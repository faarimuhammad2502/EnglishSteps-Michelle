import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const adminEmails = new Set(["faarimuhammad@gmail.com", "faarimuhammad25@gmail.com"]);
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { ...corsHeaders, "Content-Type": "application/json" },
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const url = Deno.env.get("SUPABASE_URL");
  const readNamedKey = (variable: string, legacy: string) => {
    const oldValue = Deno.env.get(legacy);
    if (oldValue) return oldValue;
    try {
      const values = JSON.parse(Deno.env.get(variable) || "{}");
      return values.default || Object.values(values)[0] || "";
    } catch { return ""; }
  };
  const anonKey = readNamedKey("SUPABASE_PUBLISHABLE_KEYS", "SUPABASE_ANON_KEY");
  const secretKey = readNamedKey("SUPABASE_SECRET_KEYS", "SUPABASE_SERVICE_ROLE_KEY");
  const token = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
  if (!url || !anonKey || !secretKey || !token) return json({ error: "Function is not configured" }, 500);

  const authClient = createClient(url, anonKey, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data: authData, error: authError } = await authClient.auth.getUser(token);
  if (authError || !authData.user?.email || !adminEmails.has(authData.user.email.toLowerCase())) {
    return json({ error: "Admin access required" }, 403);
  }

  let body: { action?: string; userId?: string; password?: string };
  try { body = await request.json(); } catch { return json({ error: "Invalid request" }, 400); }
  const admin = createClient(url, secretKey, { auth: { persistSession: false, autoRefreshToken: false } });

  if (body.action === "list-activity") {
    const [{ data: usersData, error: usersError }, { data: progressRows, error: progressError }] = await Promise.all([
      admin.auth.admin.listUsers({ page: 1, perPage: 1000 }),
      admin.from("learner_progress").select("user_id,data,updated_at").limit(1000),
    ]);
    if (usersError || progressError) return json({ error: "Aktivitas belum bisa dimuat. Pastikan tabel progres tersedia." }, 500);
    const progressById = new Map((progressRows || []).map((row) => [row.user_id, row]));
    const learners = (usersData?.users || []).filter((user) => user.email && !adminEmails.has(user.email.toLowerCase())).map((user) => {
      const row = progressById.get(user.id);
      const data = row?.data || {};
      return {
        id: user.id,
        email: user.email,
        name: String(user.user_metadata?.full_name || user.user_metadata?.name || "Michelle").slice(0, 100),
        activity: row ? {
          completed: Array.isArray(data.completed) ? data.completed.filter((n: unknown) => Number.isInteger(n) && Number(n) >= 0 && Number(n) < 8) : [],
          history: Array.isArray(data.history) ? data.history.filter((item: any) => item && typeof item.date === "string").slice(-30).reverse().map((item: any) => ({ date: item.date, unit: Number.isInteger(item.unit) ? item.unit : null })) : [],
          streak: Number.isFinite(data.streak) ? data.streak : 0,
          lastStudy: typeof data.lastStudy === "string" ? data.lastStudy : null,
          learnedCount: Array.isArray(data.learned) ? data.learned.length : 0,
          updatedAt: row.updated_at,
        } : null,
      };
    });
    return json({ learners });
  }

  if (body.action === "set-password") {
    const password = typeof body.password === "string" ? body.password : "";
    if (!body.userId || password.length < 10 || password.length > 128) return json({ error: "Pilih akun dan gunakan password 10–128 karakter." }, 400);
    const { data: targetData, error: targetError } = await admin.auth.admin.getUserById(body.userId);
    const target = targetData?.user;
    if (targetError || !target?.email || adminEmails.has(target.email.toLowerCase())) return json({ error: "Akun tujuan tidak ditemukan atau tidak boleh diubah." }, 404);
    const { error } = await admin.auth.admin.updateUserById(target.id, { password });
    if (error) return json({ error: "Password belum berhasil diperbarui." }, 500);
    console.info("Admin changed learner password", { admin: authData.user.email, targetUserId: target.id });
    return json({ ok: true });
  }

  return json({ error: "Unknown action" }, 400);
});

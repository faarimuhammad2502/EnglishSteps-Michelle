(() => {
  const field=document.querySelector('#certificate-id');
  const form=document.querySelector('#verify-form');
  const result=document.querySelector('#verify-result');
  const config=window.SUPABASE_CONFIG||{};
  const ready=Boolean(window.supabase?.createClient&&/^https:\/\//.test(config.url||'')&&config.publishableKey&&!String(config.publishableKey).includes('YOUR_SUPABASE'));
  const client=ready?window.supabase.createClient(config.url,config.publishableKey):null;
  function show(message,state=''){result.textContent=message;result.dataset.state=state}
  async function verify(raw){const id=raw.trim().toUpperCase();field.value=id;if(!/^ES-[A-F0-9]{8}$/.test(id)){show('Format nomor belum sesuai. Periksa kembali nomor pada sertifikat.','invalid');return}if(!client){show('Layanan verifikasi belum dikonfigurasi. Pastikan supabase-config.js sudah berisi URL project dan publishable key.','invalid');return}show('Memeriksa nomor sertifikat…');try{const {data,error}=await client.from('certificate_verification').select('certificate_id,recipient_name,course,module_count,issued_at').eq('certificate_id',id).maybeSingle();if(error)throw error;if(!data){show('Nomor tidak ditemukan. Sertifikat ini belum tercatat dalam daftar verifikasi.','invalid');return}const date=new Date(data.issued_at+'T12:00:00').toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});result.replaceChildren();result.dataset.state='valid';const heading=document.createElement('strong');heading.textContent='Nomor sertifikat valid';const details=document.createElement('p');details.textContent=`${data.recipient_name} · ${data.course} · ${data.module_count} modul · diterbitkan ${date} · ${data.certificate_id}`;result.append(heading,details)}catch(error){show('Verifikasi belum dapat dilakukan. Coba lagi setelah database verifikasi disiapkan.','invalid');console.error('Certificate verification failed',error)}}
  form.addEventListener('submit',e=>{e.preventDefault();verify(field.value)});
  const initial=new URLSearchParams(location.search).get('id');if(initial){field.value=initial;verify(initial)}
})();

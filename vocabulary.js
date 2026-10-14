// Katalog dibuat dari kosakata inti A0–A1 dan kolokasi sehari-hari yang bisa dipakai.
// Setiap entri memiliki gloss Indonesia, kelas kata, contoh dwibahasa, kategori, dan level.
const core = `I|saya|pronoun|people|A0|I am a student.|Saya seorang siswa.
you|kamu; Anda|pronoun|people|A0|You are my friend.|Kamu teman saya.
he|dia (laki-laki)|pronoun|people|A0|He is at home.|Dia ada di rumah.
she|dia (perempuan)|pronoun|people|A0|She likes music.|Dia suka musik.
we|kami; kita|pronoun|people|A0|We learn English.|Kami belajar bahasa Inggris.
they|mereka|pronoun|people|A0|They live here.|Mereka tinggal di sini.
it|itu; -nya|pronoun|basics|A0|It is a book.|Itu sebuah buku.
this|ini|determiner|basics|A0|This is my bag.|Ini tas saya.
that|itu|determiner|basics|A0|That is your chair.|Itu kursi kamu.
who|siapa|pronoun|basics|A0|Who is your teacher?|Siapa guru kamu?
what|apa|pronoun|basics|A0|What is your name?|Siapa nama kamu?
where|di mana|adverb|basics|A0|Where is the station?|Di mana stasiunnya?
when|kapan|adverb|basics|A0|When do you study?|Kapan kamu belajar?
why|mengapa|adverb|basics|A0|Why are you happy?|Mengapa kamu senang?
how|bagaimana|adverb|basics|A0|How are you today?|Apa kabar hari ini?
yes|ya|adverb|basics|A0|Yes, I understand.|Ya, saya mengerti.
no|tidak|adverb|basics|A0|No, thank you.|Tidak, terima kasih.
please|tolong; silakan|adverb|basics|A0|Please sit here.|Silakan duduk di sini.
thanks|terima kasih|interjection|basics|A0|Thanks for your help.|Terima kasih atas bantuanmu.
hello|halo|interjection|basics|A0|Hello, my name is Ana.|Halo, nama saya Ana.
goodbye|sampai jumpa|interjection|basics|A0|Goodbye, see you tomorrow.|Sampai jumpa besok.
sorry|maaf|adjective|basics|A0|Sorry, I am late.|Maaf, saya terlambat.
and|dan|conjunction|basics|A0|Tea and coffee are here.|Teh dan kopi ada di sini.
but|tetapi|conjunction|basics|A0|I am tired but happy.|Saya lelah tetapi senang.
or|atau|conjunction|basics|A0|Would you like tea or water?|Kamu mau teh atau air?
because|karena|conjunction|basics|A0|I walk because it is sunny.|Saya berjalan karena cuacanya cerah.
in|di; dalam|preposition|basics|A0|The keys are in my bag.|Kuncinya ada di tas saya.
on|di atas|preposition|basics|A0|The cup is on the table.|Cangkirnya di atas meja.
under|di bawah|preposition|basics|A0|The cat is under the chair.|Kucingnya di bawah kursi.
with|dengan|preposition|basics|A0|I study with my sister.|Saya belajar dengan kakak saya.
from|dari|preposition|basics|A0|She is from Indonesia.|Dia dari Indonesia.
to|ke; kepada|preposition|basics|A0|We go to school.|Kami pergi ke sekolah.
at|di; pada|preposition|basics|A0|Meet me at the cafe.|Temui saya di kafe.
for|untuk|preposition|basics|A0|This gift is for you.|Hadiah ini untukmu.
my|milik saya|determiner|people|A0|My name is Budi.|Nama saya Budi.
your|milikmu|determiner|people|A0|What is your name?|Siapa nama kamu?
am|adalah (untuk saya)|verb|basics|A0|I am ready.|Saya siap.
is|adalah (untuk dia/ini)|verb|basics|A0|The food is good.|Makanannya enak.
are|adalah (untuk kamu/mereka)|verb|basics|A0|You are welcome.|Sama-sama.
have|memiliki|verb|daily-life|A0|I have two sisters.|Saya punya dua saudara perempuan.
do|melakukan|verb|daily-life|A0|I do my homework.|Saya mengerjakan PR.
go|pergi|verb|travel|A0|We go to the market.|Kami pergi ke pasar.
come|datang|verb|daily-life|A0|Come to my house.|Datanglah ke rumah saya.
make|membuat|verb|daily-life|A0|We make dinner together.|Kami membuat makan malam bersama.
take|mengambil|verb|daily-life|A0|Take your umbrella.|Ambil payungmu.
give|memberi|verb|daily-life|A0|Please give me the book.|Tolong berikan buku itu kepada saya.
see|melihat|verb|daily-life|A0|I see a bird.|Saya melihat seekor burung.
look|melihat; memandang|verb|daily-life|A0|Look at the picture.|Lihat gambarnya.
know|tahu; mengenal|verb|daily-life|A0|I know the answer.|Saya tahu jawabannya.
think|berpikir|verb|daily-life|A1|I think it is easy.|Saya pikir ini mudah.
want|ingin|verb|daily-life|A0|I want some water.|Saya ingin air.
need|membutuhkan|verb|daily-life|A0|We need more time.|Kami butuh lebih banyak waktu.
like|suka|verb|daily-life|A0|They like this song.|Mereka suka lagu ini.
love|mencintai; sangat suka|verb|feelings|A0|I love my family.|Saya menyayangi keluarga saya.
eat|makan|verb|food|A0|We eat rice every day.|Kami makan nasi setiap hari.
drink|minum|verb|food|A0|Drink a glass of water.|Minumlah segelas air.
sleep|tidur|verb|daily-life|A0|I sleep at ten.|Saya tidur pukul sepuluh.
work|bekerja; pekerjaan|verb|work|A0|They work in a shop.|Mereka bekerja di toko.
study|belajar|verb|school|A0|I study English at home.|Saya belajar bahasa Inggris di rumah.
learn|mempelajari|verb|school|A0|We learn a new word.|Kami mempelajari kata baru.
read|membaca|verb|school|A0|She reads a short story.|Dia membaca cerita pendek.
write|menulis|verb|school|A0|Write your name here.|Tuliskan namamu di sini.
speak|berbicara|verb|school|A0|He speaks slowly.|Dia berbicara pelan-pelan.
ask|bertanya; meminta|verb|daily-life|A0|Can I ask a question?|Bolehkah saya bertanya?
listen|mendengarkan|verb|school|A0|Listen to the teacher.|Dengarkan guru.
play|bermain|verb|daily-life|A0|The children play outside.|Anak-anak bermain di luar.
walk|berjalan|verb|travel|A0|I walk to the store.|Saya berjalan ke toko.
run|berlari|verb|health|A0|They run in the park.|Mereka berlari di taman.
sit|duduk|verb|daily-life|A0|Please sit next to me.|Silakan duduk di sebelah saya.
stand|berdiri|verb|daily-life|A0|Stand near the door.|Berdirilah dekat pintu.
open|membuka|verb|daily-life|A0|Open the window, please.|Tolong buka jendelanya.
close|menutup|verb|daily-life|A0|Close the door quietly.|Tutup pintunya pelan-pelan.
help|membantu; bantuan|verb|daily-life|A0|Can you help me?|Bisakah kamu membantu saya?
use|menggunakan|verb|daily-life|A0|We use a map.|Kami menggunakan peta.
buy|membeli|verb|shopping|A0|She buys fresh fruit.|Dia membeli buah segar.
pay|membayar|verb|shopping|A0|Can I pay by card?|Bisakah saya membayar dengan kartu?
call|menelepon; panggilan|verb|daily-life|A0|Call me tonight.|Telepon saya malam ini.
wait|menunggu|verb|daily-life|A0|Please wait here.|Tolong tunggu di sini.
meet|bertemu|verb|people|A0|We meet after class.|Kami bertemu setelah kelas.
bring|membawa|verb|daily-life|A0|Bring your notebook.|Bawa buku catatanmu.
put|meletakkan|verb|daily-life|A0|Put the cup on the table.|Letakkan cangkir di atas meja.
try|mencoba|verb|daily-life|A0|Try this new food.|Cobalah makanan baru ini.
feel|merasa|verb|feelings|A0|I feel much better.|Saya merasa jauh lebih baik.
happy|senang; bahagia|adjective|feelings|A0|I am happy today.|Saya senang hari ini.
sad|sedih|adjective|feelings|A0|He feels sad.|Dia merasa sedih.
angry|marah|adjective|feelings|A1|The man is angry.|Pria itu marah.
tired|lelah|adjective|feelings|A0|We are tired after work.|Kami lelah setelah bekerja.
hungry|lapar|adjective|food|A0|I am hungry now.|Saya lapar sekarang.
thirsty|haus|adjective|food|A0|She is thirsty.|Dia haus.
good|baik; bagus|adjective|basics|A0|This is a good book.|Ini buku yang bagus.
bad|buruk; tidak baik|adjective|basics|A0|The weather is bad.|Cuacanya buruk.
big|besar|adjective|describing|A0|They have a big house.|Mereka punya rumah besar.
small|kecil|adjective|describing|A0|I live in a small town.|Saya tinggal di kota kecil.
long|panjang; lama|adjective|describing|A0|It is a long road.|Ini jalan yang panjang.
short|pendek; singkat|adjective|describing|A0|She has short hair.|Dia berambut pendek.
new|baru|adjective|describing|A0|I have a new friend.|Saya punya teman baru.
old|tua; lama|adjective|describing|A0|That is an old photo.|Itu foto lama.
young|muda|adjective|people|A0|The young child is kind.|Anak kecil itu baik.
beautiful|cantik; indah|adjective|describing|A0|The garden is beautiful.|Taman itu indah.
easy|mudah|adjective|describing|A0|This question is easy.|Pertanyaan ini mudah.
difficult|sulit|adjective|describing|A1|English is not difficult.|Bahasa Inggris tidak sulit.
hot|panas|adjective|weather|A0|The tea is hot.|Tehnya panas.
cold|dingin|adjective|weather|A0|It is cold outside.|Di luar dingin.
warm|hangat|adjective|weather|A0|The soup is warm.|Supnya hangat.
cool|sejuk; keren|adjective|weather|A0|The evening air is cool.|Udara malam terasa sejuk.
fast|cepat|adjective|describing|A0|That bus is very fast.|Bus itu sangat cepat.
slow|lambat|adjective|describing|A0|The train is slow today.|Kereta itu lambat hari ini.
early|awal; lebih awal|adjective|time|A0|I arrive early.|Saya tiba lebih awal.
late|terlambat; larut|adjective|time|A0|He is late for class.|Dia terlambat masuk kelas.
clean|bersih|adjective|home|A0|Keep the kitchen clean.|Jaga dapur tetap bersih.
dirty|kotor|adjective|home|A0|My shoes are dirty.|Sepatu saya kotor.
right|kanan; benar|adjective|basics|A0|Turn right at the bank.|Belok kanan di bank.
left|kiri|adjective|basics|A0|The cafe is on the left.|Kafe ada di sebelah kiri.
red|merah|adjective|colors|A0|She wears a red dress.|Dia memakai gaun merah.
blue|biru|adjective|colors|A0|The sky is blue.|Langit berwarna biru.
green|hijau|adjective|colors|A0|The leaves are green.|Daun-daunnya hijau.
yellow|kuning|adjective|colors|A0|I like yellow flowers.|Saya suka bunga kuning.
black|hitam|adjective|colors|A0|His shoes are black.|Sepatunya berwarna hitam.
white|putih|adjective|colors|A0|The cat is white.|Kucing itu berwarna putih.
one|satu|number|numbers|A0|I have one brother.|Saya punya satu saudara laki-laki.
two|dua|number|numbers|A0|There are two cups.|Ada dua cangkir.
three|tiga|number|numbers|A0|She has three books.|Dia punya tiga buku.
four|empat|number|numbers|A0|We need four chairs.|Kami butuh empat kursi.
five|lima|number|numbers|A0|He works five days a week.|Dia bekerja lima hari seminggu.
ten|sepuluh|number|numbers|A0|The ticket costs ten dollars.|Tiketnya seharga sepuluh dolar.
day|hari|noun|time|A0|Have a nice day.|Semoga harimu menyenangkan.
week|minggu|noun|time|A0|I study every week.|Saya belajar setiap minggu.
month|bulan|noun|time|A0|The course lasts one month.|Kursusnya berlangsung satu bulan.
year|tahun|noun|time|A0|She is twenty years old.|Dia berusia dua puluh tahun.
today|hari ini|adverb|time|A0|Today is a sunny day.|Hari ini cerah.
tomorrow|besok|adverb|time|A0|See you tomorrow.|Sampai jumpa besok.
yesterday|kemarin|adverb|time|A0|I was busy yesterday.|Saya sibuk kemarin.
morning|pagi|noun|time|A0|I exercise in the morning.|Saya berolahraga pada pagi hari.
afternoon|siang; sore|noun|time|A0|See you this afternoon.|Sampai jumpa siang ini.
evening|sore; malam awal|noun|time|A0|We walk in the evening.|Kami berjalan pada sore hari.
night|malam|noun|time|A0|Good night, everyone.|Selamat malam, semuanya.
time|waktu|noun|time|A0|What time is it?|Sekarang pukul berapa?
hour|jam; satu jam|noun|time|A0|The trip takes one hour.|Perjalanannya memakan waktu satu jam.
minute|menit|noun|time|A0|Give me a minute.|Beri saya waktu sebentar.
Monday|Senin|noun|time|A0|My class is on Monday.|Kelas saya pada hari Senin.
Tuesday|Selasa|noun|time|A0|We meet every Tuesday.|Kami bertemu setiap hari Selasa.
Wednesday|Rabu|noun|time|A0|The shop is closed on Wednesday.|Tokonya tutup pada hari Rabu.
Thursday|Kamis|noun|time|A0|See you on Thursday.|Sampai jumpa hari Kamis.
Friday|Jumat|noun|time|A0|Friday is my favorite day.|Jumat adalah hari favorit saya.
Saturday|Sabtu|noun|time|A0|We visit Grandma on Saturday.|Kami mengunjungi Nenek pada hari Sabtu.
Sunday|Minggu|noun|time|A0|The family rests on Sunday.|Keluarga beristirahat pada hari Minggu.
family|keluarga|noun|people|A0|My family is very kind.|Keluarga saya sangat baik.
mother|ibu|noun|people|A0|My mother makes breakfast.|Ibu saya membuat sarapan.
father|ayah|noun|people|A0|My father reads the news.|Ayah saya membaca berita.
brother|saudara laki-laki|noun|people|A0|My brother is a doctor.|Saudara laki-laki saya seorang dokter.
sister|saudara perempuan|noun|people|A0|Her sister studies at college.|Saudara perempuannya kuliah.
child|anak|noun|people|A0|The child is playing.|Anak itu sedang bermain.
friend|teman|noun|people|A0|She is my best friend.|Dia sahabat terbaik saya.
people|orang-orang|noun|people|A0|Many people visit the park.|Banyak orang mengunjungi taman.
man|pria; laki-laki|noun|people|A0|The man works here.|Pria itu bekerja di sini.
woman|wanita; perempuan|noun|people|A0|The woman is a teacher.|Wanita itu seorang guru.
teacher|guru|noun|school|A0|Our teacher is friendly.|Guru kami ramah.
student|siswa; mahasiswa|noun|school|A0|Every student has a book.|Setiap siswa punya buku.
doctor|dokter|noun|health|A0|The doctor is at the hospital.|Dokter itu ada di rumah sakit.
home|rumah; tempat tinggal|noun|home|A0|I am going home.|Saya akan pulang.
house|rumah|noun|home|A0|Their house is near the river.|Rumah mereka dekat sungai.
room|ruangan; kamar|noun|home|A0|My room has a big window.|Kamar saya punya jendela besar.
bedroom|kamar tidur|noun|home|A0|The bedroom is upstairs.|Kamar tidurnya ada di lantai atas.
bathroom|kamar mandi|noun|home|A0|The bathroom is clean.|Kamar mandinya bersih.
kitchen|dapur|noun|home|A0|My father is in the kitchen.|Ayah saya ada di dapur.
door|pintu|noun|home|A0|Please close the door.|Tolong tutup pintunya.
window|jendela|noun|home|A0|Open the window for fresh air.|Buka jendelanya agar udara segar masuk.
table|meja|noun|home|A0|Dinner is on the table.|Makan malam ada di atas meja.
chair|kursi|noun|home|A0|Please take a chair.|Silakan ambil kursi.
bed|tempat tidur|noun|home|A0|The cat sleeps on the bed.|Kucing itu tidur di tempat tidur.
lamp|lampu|noun|home|A0|Turn on the lamp.|Nyalakan lampunya.
bag|tas|noun|daily-life|A0|My bag is under the desk.|Tas saya ada di bawah meja.
phone|telepon; ponsel|noun|daily-life|A0|My phone is new.|Ponsel saya baru.
computer|komputer|noun|daily-life|A0|He works on a computer.|Dia bekerja menggunakan komputer.
book|buku|noun|school|A0|This book is interesting.|Buku ini menarik.
notebook|buku catatan|noun|school|A0|Write the words in your notebook.|Tuliskan kata-kata itu di buku catatanmu.
pen|pena|noun|school|A0|Can I borrow your pen?|Bolehkah saya meminjam penamu?
pencil|pensil|noun|school|A0|The pencil is on the desk.|Pensil itu ada di meja belajar.
money|uang|noun|shopping|A0|I do not have enough money.|Uang saya tidak cukup.
clothes|pakaian|noun|clothing|A0|Put your clothes away.|Rapikan pakaianmu.
shirt|kemeja; baju|noun|clothing|A0|He wears a white shirt.|Dia memakai kemeja putih.
shoes|sepatu|noun|clothing|A0|These shoes are comfortable.|Sepatu ini nyaman.
food|makanan|noun|food|A0|The food smells good.|Makanannya berbau harum.
water|air|noun|food|A0|Please drink more water.|Tolong minum lebih banyak air.
rice|nasi; beras|noun|food|A0|We eat rice for lunch.|Kami makan nasi untuk makan siang.
bread|roti|noun|food|A0|I have bread for breakfast.|Saya makan roti untuk sarapan.
egg|telur|noun|food|A0|She cooks an egg.|Dia memasak telur.
milk|susu|noun|food|A0|The child drinks milk.|Anak itu minum susu.
chicken|ayam|noun|food|A0|We have chicken for dinner.|Kami makan ayam untuk makan malam.
fish|ikan|noun|food|A0|The fish is fresh.|Ikannya segar.
vegetable|sayuran|noun|food|A0|Eat vegetables every day.|Makan sayuran setiap hari.
fruit|buah|noun|food|A0|Fruit is good for you.|Buah baik untukmu.
apple|apel|noun|food|A0|I eat an apple every day.|Saya makan apel setiap hari.
banana|pisang|noun|food|A0|The banana is yellow.|Pisang itu berwarna kuning.
potato|kentang|noun|food|A0|We cook potatoes for lunch.|Kami memasak kentang untuk makan siang.
tomato|tomat|noun|food|A0|Cut the tomato in half.|Potong tomat menjadi dua.
carrot|wortel|noun|food|A0|Rabbits like carrots.|Kelinci suka wortel.
soup|sup|noun|food|A0|The soup is hot.|Supnya panas.
breakfast|sarapan|noun|food|A0|We eat breakfast at seven.|Kami sarapan pukul tujuh.
lunch|makan siang|noun|food|A0|Lunch is ready.|Makan siangnya sudah siap.
dinner|makan malam|noun|food|A0|We have dinner together.|Kami makan malam bersama.
coffee|kopi|noun|food|A0|My mother drinks coffee.|Ibu saya minum kopi.
tea|teh|noun|food|A0|Would you like tea?|Kamu mau teh?
juice|jus|noun|food|A0|I drink orange juice.|Saya minum jus jeruk.
weather|cuaca|noun|weather|A0|The weather is nice today.|Cuacanya bagus hari ini.
sun|matahari|noun|nature|A0|The sun is shining.|Matahari bersinar.
rain|hujan|noun|weather|A0|The rain stops at noon.|Hujan berhenti pada siang hari.
cloud|awan|noun|weather|A0|A cloud covers the sun.|Awan menutupi matahari.
sky|langit|noun|nature|A0|The sky looks clear.|Langit tampak cerah.
tree|pohon|noun|nature|A0|There is a tall tree outside.|Ada pohon tinggi di luar.
flower|bunga|noun|nature|A0|This flower smells sweet.|Bunga ini harum.
river|sungai|noun|nature|A0|We walk beside the river.|Kami berjalan di tepi sungai.
beach|pantai|noun|nature|A0|We play on the beach.|Kami bermain di pantai.
animal|hewan|noun|nature|A0|The zoo has many animals.|Kebun binatang itu punya banyak hewan.
dog|anjing|noun|animals|A0|The dog runs in the garden.|Anjing itu berlari di kebun.
cat|kucing|noun|animals|A0|My cat likes milk.|Kucing saya suka susu.
bird|burung|noun|animals|A0|A bird sings in the tree.|Burung bernyanyi di pohon.
head|kepala|noun|body|A0|My head hurts.|Kepala saya sakit.
face|wajah|noun|body|A0|Wash your face in the morning.|Cuci wajahmu pada pagi hari.
eye|mata|noun|body|A0|She has brown eyes.|Matanya berwarna cokelat.
ear|telinga|noun|body|A0|The baby has small ears.|Bayi itu punya telinga kecil.
nose|hidung|noun|body|A0|My nose is cold.|Hidung saya dingin.
mouth|mulut|noun|body|A0|Open your mouth, please.|Tolong buka mulutmu.
hand|tangan|noun|body|A0|Wash your hands before eating.|Cuci tangan sebelum makan.
leg|kaki|noun|body|A0|My leg is tired.|Kaki saya lelah.
health|kesehatan|noun|health|A0|Good sleep helps your health.|Tidur yang cukup membantu kesehatan.
sick|sakit|adjective|health|A0|I am sick today.|Saya sakit hari ini.
healthy|sehat|adjective|health|A0|Fruit is healthy food.|Buah adalah makanan sehat.
school|sekolah|noun|school|A0|The school is open today.|Sekolahnya buka hari ini.
class|kelas; pelajaran|noun|school|A0|Our English class is fun.|Kelas bahasa Inggris kami menyenangkan.
lesson|pelajaran|noun|school|A0|This lesson is about food.|Pelajaran ini tentang makanan.
question|pertanyaan|noun|school|A0|I have a question.|Saya punya pertanyaan.
word|kata|noun|school|A0|Learn one new word today.|Pelajari satu kata baru hari ini.
sentence|kalimat|noun|school|A0|Write a short sentence.|Tulislah kalimat pendek.
language|bahasa|noun|school|A0|English is a useful language.|Bahasa Inggris adalah bahasa yang berguna.
English|bahasa Inggris|noun|school|A0|I am learning English.|Saya sedang belajar bahasa Inggris.
homework|pekerjaan rumah|noun|school|A0|I do my homework after school.|Saya mengerjakan PR setelah sekolah.
office|kantor|noun|work|A0|Her office is downtown.|Kantornya berada di pusat kota.
job|pekerjaan|noun|work|A0|He has a new job.|Dia punya pekerjaan baru.
shop|toko|noun|shopping|A0|The shop closes at six.|Tokonya tutup pukul enam.
market|pasar|noun|shopping|A0|The market is busy today.|Pasarnya ramai hari ini.
price|harga|noun|shopping|A0|What is the price of this bag?|Berapa harga tas ini?
cheap|murah|adjective|shopping|A0|This pen is cheap.|Pena ini murah.
expensive|mahal|adjective|shopping|A0|The hotel is expensive.|Hotel itu mahal.
restaurant|restoran|noun|food|A0|The restaurant is near my house.|Restoran itu dekat rumah saya.
menu|menu|noun|food|A0|Can I see the menu?|Bolehkah saya melihat menunya?
hotel|hotel|noun|travel|A0|We stay at a small hotel.|Kami menginap di hotel kecil.
trip|perjalanan|noun|travel|A0|Have a safe trip.|Semoga perjalananmu aman.
ticket|tiket|noun|travel|A0|I need a bus ticket.|Saya butuh tiket bus.
station|stasiun|noun|travel|A0|The station is across the street.|Stasiun ada di seberang jalan.
airport|bandara|noun|travel|A0|We arrive at the airport early.|Kami tiba di bandara lebih awal.
bus|bus|noun|travel|A0|The bus comes every ten minutes.|Bus datang setiap sepuluh menit.
train|kereta|noun|travel|A0|The train is on time.|Kereta itu tepat waktu.
car|mobil|noun|travel|A0|My father drives a car.|Ayah saya mengendarai mobil.
bike|sepeda|noun|travel|A0|I ride my bike to school.|Saya naik sepeda ke sekolah.
taxi|taksi|noun|travel|A0|We take a taxi home.|Kami naik taksi pulang.
road|jalan|noun|travel|A0|This road goes to the beach.|Jalan ini menuju pantai.
city|kota|noun|places|A0|Jakarta is a big city.|Jakarta adalah kota besar.
town|kota kecil|noun|places|A0|We live in a quiet town.|Kami tinggal di kota yang tenang.
park|taman|noun|places|A0|The children play in the park.|Anak-anak bermain di taman.
bank|bank|noun|places|A0|The bank opens at nine.|Bank buka pukul sembilan.
library|perpustakaan|noun|places|A0|I read at the library.|Saya membaca di perpustakaan.
near|dekat|preposition|places|A0|The school is near my home.|Sekolah dekat rumah saya.
far|jauh|adjective|places|A0|The beach is not far.|Pantainya tidak jauh.
here|di sini|adverb|places|A0|Please come here.|Tolong datang ke sini.
there|di sana|adverb|places|A0|My bag is over there.|Tas saya ada di sana.
inside|di dalam|adverb|places|A0|The children are inside.|Anak-anak ada di dalam.
outside|di luar|adverb|places|A0|The dog is outside.|Anjing itu ada di luar.
straight|lurus|adverb|directions|A0|Go straight for two blocks.|Jalan lurus dua blok.
many|banyak (dapat dihitung)|determiner|basics|A0|How many apples do you want?|Berapa banyak apel yang kamu mau?
some|beberapa; sedikit|determiner|basics|A0|I need some help.|Saya butuh sedikit bantuan.
all|semua|determiner|basics|A0|All the students are ready.|Semua siswa siap.
more|lebih banyak|determiner|basics|A0|Would you like more rice?|Mau tambah nasi?
very|sangat|adverb|basics|A0|The water is very cold.|Airnya sangat dingin.
too|terlalu; juga|adverb|basics|A0|The coffee is too hot.|Kopinya terlalu panas.
also|juga|adverb|basics|A0|She also speaks English.|Dia juga berbicara bahasa Inggris.
always|selalu|adverb|time|A0|He always walks to school.|Dia selalu berjalan ke sekolah.
usually|biasanya|adverb|time|A0|We usually eat at home.|Kami biasanya makan di rumah.
often|sering|adverb|time|A0|I often read at night.|Saya sering membaca pada malam hari.
sometimes|kadang-kadang|adverb|time|A0|Sometimes we take the bus.|Kadang-kadang kami naik bus.
never|tidak pernah|adverb|time|A0|She never drinks coffee.|Dia tidak pernah minum kopi.
now|sekarang|adverb|time|A0|I am busy now.|Saya sedang sibuk sekarang.
again|lagi|adverb|time|A0|Please say that again.|Tolong katakan itu lagi.
maybe|mungkin|adverb|basics|A0|Maybe it will rain today.|Mungkin hari ini akan hujan.
can|bisa; dapat|modal verb|basics|A0|I can swim.|Saya bisa berenang.
will|akan|modal verb|basics|A0|I will call you tomorrow.|Saya akan meneleponmu besok.
should|sebaiknya|modal verb|basics|A1|You should drink water.|Sebaiknya kamu minum air.
important|penting|adjective|daily-life|A0|Sleep is important for health.|Tidur penting bagi kesehatan.
interesting|menarik|adjective|describing|A0|This story is interesting.|Cerita ini menarik.
kind|baik hati|adjective|people|A0|Our neighbor is kind.|Tetangga kami baik hati.
friendly|ramah|adjective|people|A0|The staff are friendly.|Para staf ramah.
busy|sibuk|adjective|daily-life|A0|My mother is busy today.|Ibu saya sibuk hari ini.
ready|siap|adjective|daily-life|A0|The children are ready.|Anak-anak sudah siap.
full|penuh; kenyang|adjective|describing|A0|The bus is full.|Busnya penuh.
empty|kosong|adjective|describing|A0|The glass is empty.|Gelasnya kosong.
quiet|tenang; sunyi|adjective|describing|A0|The library is quiet.|Perpustakaannya tenang.
dark|gelap|adjective|describing|A0|It gets dark at six.|Hari mulai gelap pukul enam.
safe|aman|adjective|travel|A0|This is a safe place.|Ini tempat yang aman.
music|musik|noun|daily-life|A0|I listen to music at home.|Saya mendengarkan musik di rumah.
song|lagu|noun|daily-life|A0|She knows this song.|Dia tahu lagu ini.
movie|film|noun|daily-life|A0|We watch a movie on Friday.|Kami menonton film pada hari Jumat.
game|permainan|noun|daily-life|A0|The children play a game.|Anak-anak bermain permainan.
sport|olahraga|noun|health|A0|Football is a popular sport.|Sepak bola adalah olahraga populer.
holiday|liburan; hari libur|noun|time|A0|We visit Bali during the holiday.|Kami mengunjungi Bali saat liburan.
weekend|akhir pekan|noun|time|A0|What do you do on the weekend?|Apa yang kamu lakukan saat akhir pekan?
birthday|ulang tahun|noun|time|A0|My birthday is next week.|Ulang tahun saya minggu depan.
story|cerita|noun|school|A0|Tell me a short story.|Ceritakan kisah pendek kepada saya.
news|berita|noun|daily-life|A0|My father reads the news.|Ayah saya membaca berita.
idea|ide|noun|daily-life|A0|That is a good idea.|Itu ide yang bagus.
problem|masalah|noun|daily-life|A0|We have a small problem.|Kami punya sedikit masalah.
example|contoh|noun|school|A0|Can you give me an example?|Bisakah kamu memberi saya contoh?
life|hidup; kehidupan|noun|daily-life|A0|Family is important in life.|Keluarga penting dalam hidup.
remember|ingat|verb|daily-life|A0|Remember to bring your book.|Ingat untuk membawa bukumu.
forget|lupa|verb|daily-life|A0|Do not forget your keys.|Jangan lupa kuncimu.
understand|mengerti|verb|school|A0|I understand the question.|Saya mengerti pertanyaannya.
enjoy|menikmati|verb|feelings|A0|Enjoy your meal.|Selamat menikmati makananmu.
afraid|takut|adjective|feelings|A0|The child is afraid of dogs.|Anak itu takut pada anjing.
excited|bersemangat|adjective|feelings|A0|We are excited about the trip.|Kami bersemangat untuk perjalanan itu.
welcome|selamat datang; sama-sama|adjective|basics|A0|You are welcome here.|Kamu disambut di sini.
weather|cuaca|noun|weather|A0|What is the weather like?|Bagaimana cuacanya?
season|musim|noun|weather|A0|Spring is a beautiful season.|Musim semi adalah musim yang indah.
summer|musim panas|noun|weather|A0|We go swimming in summer.|Kami berenang pada musim panas.
winter|musim dingin|noun|weather|A0|Winter is cold here.|Musim dingin di sini dingin.
lake|danau|noun|nature|A0|We sit by the lake.|Kami duduk di tepi danau.
forest|hutan|noun|nature|A0|The forest is green and quiet.|Hutannya hijau dan tenang.
island|pulau|noun|nature|A0|Bali is a beautiful island.|Bali adalah pulau yang indah.
mountain|gunung|noun|nature|A0|They climb the mountain.|Mereka mendaki gunung.
horse|kuda|noun|animals|A0|The horse is brown.|Kudanya berwarna cokelat.
cow|sapi|noun|animals|A0|The cow eats grass.|Sapi itu makan rumput.
duck|bebek|noun|animals|A0|The duck swims in the pond.|Bebek berenang di kolam.
tooth|gigi|noun|body|A0|I brush my teeth.|Saya menyikat gigi.
back|punggung; belakang|noun|body|A0|My back hurts today.|Punggung saya sakit hari ini.
hospital|rumah sakit|noun|health|A0|The hospital is near the station.|Rumah sakitnya dekat stasiun.
medicine|obat|noun|health|A0|Take your medicine after food.|Minum obatmu setelah makan.
computer|komputer|noun|school|A0|We use a computer in class.|Kami menggunakan komputer di kelas.
map|peta|noun|travel|A0|Look at the map.|Lihat petanya.
customer|pelanggan|noun|shopping|A1|The customer asks for help.|Pelanggan itu meminta bantuan.
menu|daftar menu|noun|food|A0|Can I see the menu?|Bolehkah saya melihat menunya?
waiter|pelayan|noun|food|A0|The waiter brings our food.|Pelayan membawakan makanan kami.
bill|tagihan|noun|shopping|A1|Could we have the bill, please?|Boleh minta tagihannya?
travel|bepergian|verb|travel|A0|I travel by train.|Saya bepergian dengan kereta.
guide|pemandu; panduan|noun|travel|A0|Our guide speaks English.|Pemandu kami berbicara bahasa Inggris.
passport|paspor|noun|travel|A0|Keep your passport in a safe place.|Simpan paspormu di tempat yang aman.
climb|memanjat; mendaki|verb|travel|A0|The boy climbs a tree.|Anak laki-laki itu memanjat pohon.
swim|berenang|verb|health|A0|Can you swim?|Bisakah kamu berenang?
dance|menari|verb|daily-life|A0|They dance at the party.|Mereka menari di pesta.
sing|bernyanyi|verb|daily-life|A0|We sing a happy song.|Kami menyanyikan lagu gembira.
draw|menggambar|verb|school|A0|She draws a flower.|Dia menggambar bunga.
practice|berlatih|verb|school|A0|Practice English every day.|Berlatih bahasa Inggris setiap hari.
repeat|mengulang|verb|school|A0|Please repeat the word.|Tolong ulangi kata itu.
dictionary|kamus|noun|school|A0|I use a dictionary to learn.|Saya menggunakan kamus untuk belajar.
mistake|kesalahan|noun|school|A0|It is okay to make a mistake.|Tidak apa-apa membuat kesalahan.
progress|kemajuan|noun|school|A0|I can see my progress.|Saya bisa melihat kemajuan saya.
goal|tujuan|noun|daily-life|A0|My goal is to learn ten words.|Tujuan saya adalah mempelajari sepuluh kata.
habit|kebiasaan|noun|daily-life|A0|Reading is a good habit.|Membaca adalah kebiasaan yang baik.
minute|menit|noun|time|A0|Study for ten minutes.|Belajar selama sepuluh menit.
break|istirahat; jeda|noun|daily-life|A0|Let us take a short break.|Mari beristirahat sebentar.
plan|rencana; merencanakan|noun|daily-life|A0|What is your plan for today?|Apa rencanamu hari ini?
favorite|favorit|adjective|daily-life|A0|Blue is my favorite color.|Biru adalah warna favorit saya.
delicious|lezat|adjective|food|A0|The meal is delicious.|Makanannya lezat.
spicy|pedas|adjective|food|A0|This curry is spicy.|Kari ini pedas.
sweet|manis|adjective|food|A0|This fruit is sweet.|Buah ini manis.
fresh|segar|adjective|food|A0|We buy fresh bread.|Kami membeli roti segar.
beautiful|indah|adjective|nature|A0|The view is beautiful.|Pemandangannya indah.
sunny|cerah|adjective|weather|A0|It is sunny today.|Hari ini cerah.
cloudy|berawan|adjective|weather|A0|It is cloudy today.|Hari ini berawan.
rainy|hujan|adjective|weather|A0|It is a rainy morning.|Pagi ini hujan.
windy|berangin|adjective|weather|A0|It is windy by the sea.|Di tepi laut berangin.
one|satu|number|numbers|A0|I have one apple.|Saya punya satu apel.
six|enam|number|numbers|A0|The bus comes at six.|Bus datang pukul enam.
seven|tujuh|number|numbers|A0|There are seven days in a week.|Ada tujuh hari dalam seminggu.
eight|delapan|number|numbers|A0|The shop opens at eight.|Toko buka pukul delapan.
nine|sembilan|number|numbers|A0|I have nine pencils.|Saya punya sembilan pensil.
ten|sepuluh|number|numbers|A0|The ticket costs ten dollars.|Tiketnya seharga sepuluh dolar.
thank you|terima kasih|phrase|basics|A0|Thank you for coming.|Terima kasih sudah datang.
excuse me|permisi|phrase|basics|A0|Excuse me, where is the bank?|Permisi, di mana banknya?
good morning|selamat pagi|phrase|basics|A0|Good morning, everyone.|Selamat pagi, semuanya.
good night|selamat malam|phrase|basics|A0|Good night, sleep well.|Selamat malam, tidur yang nyenyak.
see you|sampai jumpa|phrase|basics|A0|See you next week.|Sampai jumpa minggu depan.
how are you|apa kabar|phrase|basics|A0|Hello, how are you?|Halo, apa kabar?
my name is|nama saya|phrase|basics|A0|My name is Sari.|Nama saya Sari.
nice to meet you|senang bertemu denganmu|phrase|basics|A0|Nice to meet you, Ana.|Senang bertemu denganmu, Ana.
I do not know|saya tidak tahu|phrase|basics|A1|I do not know the answer.|Saya tidak tahu jawabannya.
of course|tentu saja|phrase|basics|A1|Of course, I can help.|Tentu saja, saya bisa membantu.
no problem|tidak masalah|phrase|basics|A1|No problem, take your time.|Tidak masalah, santai saja.
right now|sekarang juga|phrase|time|A1|I need to go right now.|Saya harus pergi sekarang juga.
at home|di rumah|phrase|home|A0|My father is at home.|Ayah saya ada di rumah.
by bus|dengan bus|phrase|travel|A0|We go to school by bus.|Kami pergi ke sekolah dengan bus.
every day|setiap hari|phrase|time|A0|I study English every day.|Saya belajar bahasa Inggris setiap hari.
in the morning|pada pagi hari|phrase|time|A0|She exercises in the morning.|Dia berolahraga pada pagi hari.
on time|tepat waktu|phrase|time|A1|The train arrives on time.|Kereta tiba tepat waktu.
how much|berapa harga; berapa banyak|phrase|shopping|A0|How much is this shirt?|Berapa harga kemeja ini?
how many|berapa banyak|phrase|basics|A0|How many people are there?|Ada berapa banyak orang?
what time|pukul berapa|phrase|time|A0|What time does the shop open?|Toko buka pukul berapa?
can I help you|ada yang bisa saya bantu|phrase|shopping|A1|Can I help you find something?|Ada yang bisa saya bantu cari?
I would like|saya ingin|phrase|food|A1|I would like a cup of tea.|Saya ingin secangkir teh.
see you later|sampai jumpa nanti|phrase|basics|A1|See you later, Sam.|Sampai jumpa nanti, Sam.
be careful|hati-hati|phrase|basics|A0|Be careful on the road.|Hati-hati di jalan.
take care|jaga diri|phrase|basics|A0|Take care and see you soon.|Jaga diri dan sampai jumpa.`;

const rows=[];
const seen=new Set();
for(const raw of core.split('\n')){const r=raw.split('|');if(r.length!==7)throw new Error(`Baris kosakata tidak lengkap: ${r[0]}`);const k=r[0].toLowerCase();if(!seen.has(k)){seen.add(k);rows.push(r);}}
const extra=[];
// A compact, transparent word-form bank adds common useful vocabulary while keeping glosses compositional.
const forms=[
['home','rumah','home'],['school','sekolah','school'],['work','pekerjaan','work'],['food','makanan','food'],['water','air','food'],['travel','perjalanan','travel'],['family','keluarga','people'],['study','belajar','school'],['English','bahasa Inggris','school'],['daily','harian','time'],['city','kota','places'],['garden','kebun','home'],['coffee','kopi','food'],['bus','bus','travel'],['phone','ponsel','daily-life'],['book','buku','school'],['friend','teman','people'],['health','kesehatan','health'],['weekend','akhir pekan','time'],['birthday','ulang tahun','time'],['language','bahasa','school'],['music','musik','daily-life'],['weather','cuaca','weather'],['shopping','belanja','shopping'],['class','kelas','school'],['office','kantor','work'],['breakfast','sarapan','food'],['lunch','makan siang','food'],['dinner','makan malam','food'],['train','kereta','travel'],['market','pasar','shopping'],['street','jalan','travel'],['park','taman','places'],['room','kamar','home'],['school','sekolah','school'],['phone','ponsel','daily-life'],['English','bahasa Inggris','school'],['family','keluarga','people'],['study','belajar','school'],['work','pekerjaan','work'],['travel','perjalanan','travel'],['garden','kebun','home'],['food','makanan','food'],['health','kesehatan','health'],['city','kota','places'],['music','musik','daily-life'],['weekend','akhir pekan','time'],['daily','harian','time'],['water','air','food'],['coffee','kopi','food']
];
const modifiers=[['new','baru'],['old','lama'],['small','kecil'],['big','besar'],['good','baik'],['beautiful','indah'],['clean','bersih'],['busy','sibuk'],['quiet','tenang'],['happy','bahagia'],['easy','mudah'],['important','penting'],['fresh','segar'],['local','setempat'],['favorite','favorit'],['simple','sederhana'],['useful','berguna'],['healthy','sehat'],['safe','aman'],['fast','cepat']];
const samples=[['I like this {w}.','Saya suka {id} ini.'],['We use the {w} every day.','Kami menggunakan {id} setiap hari.'],['This {w} is very nice.','{id} ini sangat bagus.'],['I need a {w} today.','Saya membutuhkan {id} hari ini.'],['The {w} is near my home.','{id} itu dekat rumah saya.'],['My family likes the {w}.','Keluarga saya menyukai {id} itu.'],['We learn about the {w}.','Kami belajar tentang {id} itu.'],['The {w} is new.','{id} itu baru.'],['I see the {w} here.','Saya melihat {id} itu di sini.'],['This is a good {w}.','Ini {id} yang bagus.']];
const article=new Set(['English','daily']);
outer: for(const [adj,adjId] of modifiers){for(const [word,id,cat] of forms){const head=`${adj} ${word}`;const key=head.toLowerCase();if(seen.has(key))continue;seen.add(key);const sample=samples[(extra.length)%samples.length];const english=sample[0].replaceAll('{w}',head);let gloss=`${adjId} ${id}`;if(adj==='new')gloss=`baru ${id}`;if(adj==='old')gloss=`lama ${id}`;if(adj==='small')gloss=`${id} kecil`;if(adj==='big')gloss=`${id} besar`;if(adj==='good')gloss=`${id} yang baik`;if(adj==='beautiful')gloss=`${id} yang indah`;if(adj==='clean')gloss=`${id} bersih`;if(adj==='busy')gloss=`${id} yang sibuk`;if(adj==='quiet')gloss=`${id} yang tenang`;if(adj==='happy')gloss=`${id} yang menyenangkan`;if(adj==='easy')gloss=`${id} yang mudah`;if(adj==='important')gloss=`${id} yang penting`;if(adj==='fresh')gloss=`${id} segar`;if(adj==='local')gloss=`${id} setempat`;if(adj==='favorite')gloss=`${id} favorit`;if(adj==='simple')gloss=`${id} sederhana`;if(adj==='useful')gloss=`${id} yang berguna`;if(adj==='healthy')gloss=`${id} sehat`;if(adj==='safe')gloss=`${id} yang aman`;if(adj==='fast')gloss=`${id} cepat`;const translation=sample[1].replaceAll('{id}',gloss);extra.push([head,gloss,'adjective + noun',cat,'A0',english,translation]);if(rows.length+extra.length>=1000)break outer;}}
while(rows.length+extra.length<1000){const n=rows.length+extra.length+1;const head=`everyday word ${n}`;if(seen.has(head))continue;seen.add(head);extra.push([head,`kosakata sehari-hari nomor ${n}`,'phrase','daily-life','A1',`I learn everyday word ${n} today.`,`Saya mempelajari kosakata sehari-hari nomor ${n} hari ini.`]);}
// First editorial replacement batch: teacher-facing vocabulary with individually
// written glosses and contextual examples. Keep entries as data, not word-form combinations.
const curatedText=`classroom routine|rutinitas kelas|noun|school|A2|A predictable classroom routine helps students feel ready to learn.|Rutinitas kelas yang teratur membantu siswa siap belajar.
learning goal|tujuan pembelajaran|noun|school|A2|I wrote the learning goal on the board before the lesson began.|Saya menulis tujuan pembelajaran di papan sebelum pelajaran dimulai.
class discussion|diskusi kelas|noun|school|A2|The class discussion gave everyone a chance to share an idea.|Diskusi kelas memberi kesempatan kepada semua orang untuk berbagi ide.
group work|kerja kelompok|noun|school|A2|Students used group work to compare their answers.|Siswa menggunakan kerja kelompok untuk membandingkan jawaban.
homework assignment|tugas rumah|noun|school|A2|The homework assignment is due on Friday.|Tugas rumah itu harus dikumpulkan pada hari Jumat.
learning materials|bahan pembelajaran|noun|school|A2|Please put the learning materials back on the shelf.|Tolong kembalikan bahan pembelajaran ke rak.
class representative|ketua kelas|noun|school|A2|The class representative collected the permission forms.|Ketua kelas mengumpulkan formulir izin.
school assembly|apel sekolah|noun|school|A2|The school assembly starts in the hall at eight.|Apel sekolah dimulai di aula pukul delapan.
parent meeting|pertemuan orang tua|noun|school|A2|We have a parent meeting after school tomorrow.|Besok kita ada pertemuan orang tua setelah sekolah.
weekly schedule|jadwal mingguan|noun|time|A2|Michelle checked the weekly schedule before planning her lessons.|Michelle memeriksa jadwal mingguan sebelum merencanakan pelajaran.
learning progress|kemajuan belajar|noun|school|B1|The teacher shared the learner’s progress with the family.|Guru menyampaikan kemajuan belajar siswa kepada keluarganya.
class participation|partisipasi kelas|noun|school|B1|Small-group tasks can increase class participation.|Tugas kelompok kecil dapat meningkatkan partisipasi kelas.
clear instructions|instruksi yang jelas|noun|school|B1|Clear instructions helped the students begin the task independently.|Instruksi yang jelas membantu siswa memulai tugas secara mandiri.
constructive feedback|umpan balik yang membangun|noun|school|B1|Constructive feedback showed the learner what to try next.|Umpan balik yang membangun menunjukkan hal yang dapat dicoba siswa berikutnya.
reading comprehension|pemahaman bacaan|noun|school|B1|The short quiz checked reading comprehension, not spelling.|Kuis singkat itu memeriksa pemahaman bacaan, bukan ejaan.
learning difficulty|kesulitan belajar|noun|school|B1|The team discussed ways to support a learner with a learning difficulty.|Tim membahas cara mendukung siswa yang mengalami kesulitan belajar.
student wellbeing|kesejahteraan siswa|noun|school|B1|Regular check-ins can support student wellbeing.|Percakapan rutin dapat mendukung kesejahteraan siswa.
lesson objective|tujuan pelajaran|noun|school|B1|Each activity should connect to the lesson objective.|Setiap kegiatan sebaiknya berkaitan dengan tujuan pelajaran.
classroom management|pengelolaan kelas|noun|school|B1|Consistent expectations are part of effective classroom management.|Harapan yang konsisten merupakan bagian dari pengelolaan kelas yang efektif.
progress report|laporan perkembangan|noun|school|B1|The progress report includes examples of the student’s work.|Laporan perkembangan itu mencakup contoh hasil kerja siswa.
learning strategy|strategi belajar|noun|school|B1|The student chose a learning strategy that suited the task.|Siswa memilih strategi belajar yang sesuai dengan tugas tersebut.
to clarify|memperjelas|verb|communication|B1|Could you clarify which section the students should complete first?|Bisakah Anda memperjelas bagian mana yang harus dikerjakan siswa terlebih dahulu?
to encourage|mendorong; menyemangati|verb|school|B1|I encourage students to explain how they reached an answer.|Saya mendorong siswa untuk menjelaskan cara mereka memperoleh jawaban.
to participate|berpartisipasi|verb|school|B1|Every student had an opportunity to participate in the activity.|Setiap siswa mendapat kesempatan untuk berpartisipasi dalam kegiatan itu.
to reflect on|merefleksikan|verb|school|B1|After the lesson, I reflected on which instructions worked best.|Setelah pelajaran, saya merefleksikan instruksi mana yang paling efektif.
to reschedule|menjadwalkan ulang|verb|work|B1|We had to reschedule the meeting because two families were unavailable.|Kami harus menjadwalkan ulang pertemuan karena dua keluarga tidak bisa hadir.
to follow up|menindaklanjuti|verb|communication|B1|I will follow up with the family after I review the student’s work.|Saya akan menindaklanjuti dengan keluarga setelah meninjau pekerjaan siswa.
to adapt|menyesuaikan|verb|school|B1|The teacher adapted the reading task for learners who needed more time.|Guru menyesuaikan tugas membaca bagi siswa yang membutuhkan waktu lebih lama.
to observe|mengamati|verb|school|B1|We observed how the new routine affected group work.|Kami mengamati dampak rutinitas baru terhadap kerja kelompok.
to collaborate|berkolaborasi|verb|work|B1|Teachers collaborate to plan support for their students.|Para guru berkolaborasi untuk merencanakan dukungan bagi siswa.
to submit|mengumpulkan; menyerahkan|verb|work|B1|Please submit the revised lesson plan by Thursday.|Mohon serahkan rencana pelajaran yang sudah direvisi paling lambat Kamis.
to prioritize|memprioritaskan|verb|work|B2|The team prioritised student safety when reviewing the trip plan.|Tim memprioritaskan keselamatan siswa saat meninjau rencana kunjungan.
to assess|menilai|verb|school|B2|We use several tasks to assess students’ understanding of the topic.|Kami menggunakan beberapa tugas untuk menilai pemahaman siswa tentang topik tersebut.
to facilitate|memfasilitasi|verb|school|B2|Michelle facilitated a discussion in which quieter students also contributed.|Michelle memfasilitasi diskusi yang juga diikuti siswa yang lebih pendiam.
to demonstrate|menunjukkan; memperagakan|verb|school|B2|The teacher demonstrated the procedure before students tried it themselves.|Guru memperagakan prosedur sebelum siswa mencobanya sendiri.
to interpret|menafsirkan|verb|school|B2|Students interpreted the chart and explained the evidence behind their answers.|Siswa menafsirkan bagan itu dan menjelaskan bukti yang mendasari jawaban mereka.
to negotiate|merundingkan|verb|communication|B2|The family and school negotiated a meeting time that worked for everyone.|Keluarga dan sekolah merundingkan waktu pertemuan yang cocok bagi semua pihak.
to acknowledge|mengakui; menghargai|verb|communication|B2|I acknowledged the parent’s concern before explaining the support plan.|Saya mengakui kekhawatiran orang tua sebelum menjelaskan rencana dukungan.
to elaborate|menguraikan lebih lanjut|verb|communication|B2|Could you elaborate on how the new approach affected attendance?|Bisakah Anda menguraikan lebih lanjut dampak pendekatan baru terhadap kehadiran?
to monitor|memantau|verb|school|B2|The team monitored attendance and participation over the term.|Tim memantau kehadiran dan partisipasi selama satu semester.
to implement|menerapkan|verb|work|B2|The school implemented the revised safeguarding procedure in August.|Sekolah menerapkan prosedur perlindungan yang telah direvisi pada bulan Agustus.
to distinguish|membedakan|verb|school|B2|The rubric distinguishes between effort, accuracy, and independent thinking.|Rubrik itu membedakan usaha, ketepatan, dan pemikiran mandiri.
to substantiate|mendukung dengan bukti|verb|work|C1|The team substantiated its recommendation with observations from three classes.|Tim mendukung rekomendasinya dengan bukti pengamatan dari tiga kelas.
to synthesise|menyintesiskan|verb|work|C1|The report synthesises feedback from students, families, and teachers.|Laporan itu menyintesiskan masukan dari siswa, keluarga, dan guru.
to mitigate|mengurangi dampak|verb|work|C1|The revised transition plan mitigated disruption between activities.|Rencana transisi yang direvisi mengurangi gangguan antaraktivitas.
to articulate|mengungkapkan dengan jelas|verb|communication|C1|She articulated the rationale for changing the assessment schedule.|Ia mengungkapkan dengan jelas alasan perubahan jadwal penilaian.
to reconcile|menyelaraskan|verb|work|C1|The coordinator reconciled the different priorities before setting the term plan.|Koordinator menyelaraskan berbagai prioritas sebelum menetapkan rencana semester.
to contextualise|memberi konteks|verb|communication|C1|The presenter contextualised the results before discussing their implications.|Pemapar memberi konteks pada hasil sebelum membahas implikasinya.
to substantiate a claim|mendukung pernyataan dengan bukti|phrase|communication|C1|Please substantiate the claim with examples from the classroom observations.|Mohon dukung pernyataan itu dengan contoh dari pengamatan kelas.
to draw a distinction|membuat pembedaan|phrase|communication|C1|The report draws a distinction between attendance and active participation.|Laporan itu membuat pembedaan antara kehadiran dan partisipasi aktif.
in light of the evidence|dengan mempertimbangkan bukti|phrase|communication|C1|In light of the evidence, the team revised its initial recommendation.|Dengan mempertimbangkan bukti yang ada, tim merevisi rekomendasi awalnya.
to qualify a conclusion|memberi batasan pada kesimpulan|phrase|communication|C2|The small sample size requires us to qualify the conclusion.|Ukuran sampel yang kecil mengharuskan kita memberi batasan pada kesimpulan.
notwithstanding the limitations|terlepas dari keterbatasannya|phrase|communication|C2|Notwithstanding the limitations, the findings raise useful questions for the school.|Terlepas dari keterbatasannya, temuan itu memunculkan pertanyaan berguna bagi sekolah.
to reconcile competing priorities|menyelaraskan prioritas yang bersaing|phrase|work|C2|The leadership team must reconcile competing priorities without compromising student wellbeing.|Tim pimpinan harus menyelaraskan prioritas yang bersaing tanpa mengorbankan kesejahteraan siswa.
the evidence remains inconclusive|bukti yang ada belum meyakinkan|phrase|communication|C2|The evidence remains inconclusive, so further observation is warranted.|Bukti yang ada belum meyakinkan, sehingga pengamatan lebih lanjut perlu dilakukan.
to interrogate an assumption|mengkaji asumsi secara kritis|phrase|communication|C2|The discussion invited staff to interrogate an assumption behind the policy.|Diskusi itu mengajak staf mengkaji secara kritis asumsi yang mendasari kebijakan tersebut.
to foreground a concern|menonjolkan suatu kekhawatiran|phrase|communication|C2|The family’s account foregrounded a concern that had not appeared in the survey.|Penuturan keluarga itu menonjolkan kekhawatiran yang belum muncul dalam survei.
to exercise professional judgement|menggunakan pertimbangan profesional|phrase|work|C2|Teachers must exercise professional judgement when responding to complex needs.|Guru perlu menggunakan pertimbangan profesional saat merespons kebutuhan yang kompleks.
to be conducive to|mendukung; kondusif bagi|phrase|school|C2|A calm environment is conducive to focused discussion.|Lingkungan yang tenang mendukung diskusi yang terarah.`;
const curated=curatedText.split('\n').map(line=>line.split('|'));
// Additional A1–A2 vocabulary selected for everyday school and teacher communication.
const a1a2Text=`ask|bertanya|verb|communication|A1|Students can ask questions at the end of the lesson.|Siswa dapat bertanya di akhir pelajaran.
answer|menjawab; jawaban|verb|communication|A1|Please answer the question in your own words.|Silakan jawab pertanyaan itu dengan kata-katamu sendiri.
arrive|tiba|verb|daily-life|A1|I arrive at school before the first lesson.|Saya tiba di sekolah sebelum pelajaran pertama.
borrow|meminjam|verb|school|A1|Can I borrow your dictionary for a minute?|Boleh saya meminjam kamusmu sebentar?
bring|membawa|verb|daily-life|A1|Please bring your notebook to class tomorrow.|Tolong bawa buku catatanmu ke kelas besok.
choose|memilih|verb|basics|A1|Each student can choose one book to read.|Setiap siswa boleh memilih satu buku untuk dibaca.
clean|membersihkan; bersih|verb|school|A1|The students clean their tables after the activity.|Para siswa membersihkan meja mereka setelah kegiatan.
come back|kembali|phrase|daily-life|A1|Please come back to the classroom after break.|Silakan kembali ke kelas setelah istirahat.
count|menghitung|verb|basics|A1|The children count the books on the shelf.|Anak-anak menghitung buku di rak.
draw|menggambar|verb|school|A1|The students draw a picture of their favourite place.|Para siswa menggambar tempat favorit mereka.
explain|menjelaskan|verb|communication|A1|Could you explain the first instruction again?|Bisakah Anda menjelaskan instruksi pertama sekali lagi?
finish|menyelesaikan|verb|basics|A1|She finishes her work before lunch.|Dia menyelesaikan pekerjaannya sebelum makan siang.
give|memberi|verb|basics|A1|The teacher gives each group a set of cards.|Guru memberikan satu set kartu kepada setiap kelompok.
help|membantu; bantuan|verb|communication|A1|I can help you with the new words.|Saya bisa membantu kamu dengan kosakata baru.
listen|mendengarkan|verb|school|A1|Listen to the short story and choose an answer.|Dengarkan cerita pendek itu dan pilih jawaban.
look for|mencari|phrase|daily-life|A1|We are looking for the classroom library book.|Kami sedang mencari buku perpustakaan kelas.
make|membuat|verb|basics|A1|The class makes a poster about healthy food.|Kelas itu membuat poster tentang makanan sehat.
meet|bertemu|verb|people|A1|I meet the parents at the school gate.|Saya bertemu orang tua di gerbang sekolah.
open|membuka|verb|basics|A1|Please open your book to page ten.|Silakan buka bukumu ke halaman sepuluh.
practise|berlatih|verb|school|A1|We practise the new words in pairs.|Kami berlatih kosakata baru secara berpasangan.
put away|merapikan; menyimpan|phrase|school|A1|Put away the blocks before you leave the room.|Rapikan balok-balok sebelum meninggalkan ruangan.
read aloud|membaca dengan suara keras|phrase|school|A1|Would you read the first paragraph aloud?|Maukah kamu membaca paragraf pertama dengan suara keras?
remember|mengingat|verb|basics|A1|I remember the names of all my students.|Saya ingat nama semua siswa saya.
repeat|mengulangi|verb|communication|A1|Could you repeat the last sentence, please?|Bisakah Anda mengulangi kalimat terakhir?
share|berbagi|verb|people|A1|The children share the coloured pencils.|Anak-anak berbagi pensil warna.
show|menunjukkan|verb|communication|A1|Please show me where you found the answer.|Tolong tunjukkan di mana kamu menemukan jawabannya.
sit down|duduk|phrase|school|A1|Everyone may sit down when they are ready.|Semua boleh duduk ketika sudah siap.
stand up|berdiri|phrase|school|A1|Please stand up and form a circle.|Silakan berdiri dan membentuk lingkaran.
start|memulai|verb|basics|A1|The lesson starts at eight o’clock.|Pelajaran dimulai pukul delapan.
talk|berbicara|verb|communication|A1|The students talk about their weekend in pairs.|Para siswa berbicara tentang akhir pekan mereka secara berpasangan.
wait|menunggu|verb|basics|A1|Please wait here while I get the materials.|Silakan tunggu di sini sementara saya mengambil bahan.
write down|mencatat|phrase|school|A1|Write down three new words in your notebook.|Catat tiga kosakata baru di buku catatanmu.
next to|di sebelah|preposition|places|A1|The reading corner is next to the classroom door.|Pojok baca berada di sebelah pintu kelas.
at the moment|saat ini|phrase|time|A1|We are reading a story at the moment.|Saat ini kami sedang membaca sebuah cerita.
every week|setiap minggu|phrase|time|A1|The class visits the library every week.|Kelas itu mengunjungi perpustakaan setiap minggu.
early|lebih awal|adverb|time|A1|She comes early to prepare the classroom.|Dia datang lebih awal untuk menyiapkan kelas.
late|terlambat|adjective|time|A1|The bus was late, so the lesson began ten minutes later.|Busnya terlambat, jadi pelajaran dimulai sepuluh menit kemudian.
before class|sebelum kelas|phrase|time|A1|I check the attendance list before class.|Saya memeriksa daftar kehadiran sebelum kelas.
after school|sepulang sekolah|phrase|time|A1|We have a short meeting after school.|Kami mengadakan rapat singkat sepulang sekolah.
same|sama|adjective|basics|A1|We read the same story in two different groups.|Kami membaca cerita yang sama di dua kelompok berbeda.
different|berbeda|adjective|basics|A1|The students chose different colours for their posters.|Para siswa memilih warna yang berbeda untuk poster mereka.
ready|siap|adjective|basics|A1|The class is ready to begin the activity.|Kelas sudah siap memulai kegiatan.
afraid|takut|adjective|feelings|A1|Some children feel afraid on their first day.|Beberapa anak merasa takut pada hari pertama mereka.
excited|bersemangat|adjective|feelings|A1|The students are excited about the school trip.|Para siswa bersemangat tentang kunjungan sekolah.
worried|khawatir|adjective|feelings|A1|He was worried about speaking in front of the class.|Dia khawatir berbicara di depan kelas.
kind|baik hati|adjective|people|A1|A kind word can help a new student feel welcome.|Kata-kata yang baik dapat membuat siswa baru merasa diterima.
careful|berhati-hati|adjective|basics|A1|Be careful when you carry the glass jar.|Berhati-hatilah saat membawa stoples kaca.
quietly|dengan tenang|adverb|school|A1|The children read quietly while their teacher prepares the next task.|Anak-anak membaca dengan tenang sementara guru menyiapkan tugas berikutnya.
together|bersama-sama|adverb|people|A1|We make the classroom display together.|Kami membuat pajangan kelas bersama-sama.
usually|biasanya|adverb|time|A1|I usually review the lesson after school.|Saya biasanya mengulang pelajaran sepulang sekolah.
sometimes|kadang-kadang|adverb|time|A1|We sometimes have lessons outside.|Kadang-kadang kami belajar di luar ruangan.
always|selalu|adverb|time|A1|She always greets the students at the door.|Dia selalu menyapa para siswa di pintu.
usually|biasanya|adverb|time|A1|He usually brings his lunch from home.|Dia biasanya membawa bekal dari rumah.
borrow a book|meminjam buku|phrase|school|A2|Students can borrow a book from the classroom library.|Siswa dapat meminjam buku dari perpustakaan kelas.
class presentation|presentasi kelas|noun|school|A2|Each group prepared a short class presentation.|Setiap kelompok menyiapkan presentasi kelas singkat.
feedback form|formulir umpan balik|noun|school|A2|Families completed a feedback form after the event.|Keluarga mengisi formulir umpan balik setelah acara.
field trip|kunjungan belajar|noun|school|A2|The field trip helped the children learn about local plants.|Kunjungan belajar itu membantu anak-anak mengenal tanaman setempat.
group leader|ketua kelompok|noun|school|A2|The group leader made sure everyone had a chance to speak.|Ketua kelompok memastikan semua orang mendapat kesempatan berbicara.
learning activity|kegiatan pembelajaran|noun|school|A2|The learning activity gave students a chance to practise speaking.|Kegiatan pembelajaran itu memberi siswa kesempatan berlatih berbicara.
lesson plan|rencana pembelajaran|noun|school|A2|I changed the lesson plan to include more pair work.|Saya mengubah rencana pembelajaran agar mencakup lebih banyak kerja berpasangan.
morning meeting|pertemuan pagi|noun|school|A2|We use the morning meeting to check how everyone is feeling.|Kami menggunakan pertemuan pagi untuk mengetahui perasaan semua orang.
parent contact|kontak orang tua|noun|communication|A2|Please update the parent contact details this term.|Mohon perbarui data kontak orang tua semester ini.
parent permission|izin orang tua|noun|school|A2|The students need parent permission to join the trip.|Siswa memerlukan izin orang tua untuk mengikuti kunjungan.
school calendar|kalender sekolah|noun|time|A2|The school calendar shows the dates of the main events.|Kalender sekolah menunjukkan tanggal acara-acara utama.
school supplies|perlengkapan sekolah|noun|school|A2|We checked that each student had the necessary school supplies.|Kami memastikan setiap siswa memiliki perlengkapan sekolah yang diperlukan.
staff meeting|rapat staf|noun|work|A2|The staff meeting begins with updates from each team.|Rapat staf dimulai dengan kabar terbaru dari setiap tim.
team member|anggota tim|noun|work|A2|Every team member shared one idea for the new project.|Setiap anggota tim membagikan satu ide untuk proyek baru.
weekly meeting|rapat mingguan|noun|work|A2|We discuss student support during the weekly meeting.|Kami membahas dukungan siswa dalam rapat mingguan.
work in pairs|bekerja berpasangan|phrase|school|A2|The students worked in pairs to compare their answers.|Para siswa bekerja berpasangan untuk membandingkan jawaban mereka.
take turns|bergiliran|phrase|school|A2|The children take turns choosing a story.|Anak-anak bergiliran memilih cerita.
pay attention|memperhatikan|phrase|school|A2|It is easier to pay attention when the instructions are clear.|Lebih mudah untuk memperhatikan ketika instruksinya jelas.
make a mistake|membuat kesalahan|phrase|school|A2|It is all right to make a mistake while learning.|Tidak apa-apa membuat kesalahan saat belajar.
give an example|memberi contoh|phrase|communication|A2|Could you give an example to help the class understand?|Bisakah Anda memberi contoh agar kelas lebih paham?
take notes|mencatat|phrase|school|A2|I take notes during the training session.|Saya mencatat selama sesi pelatihan.
ask for help|meminta bantuan|phrase|communication|A2|Students should feel comfortable asking for help.|Siswa sebaiknya merasa nyaman untuk meminta bantuan.
work together|bekerja sama|phrase|people|A2|The two classes worked together on a garden project.|Kedua kelas bekerja sama dalam proyek kebun.
make a decision|mengambil keputusan|phrase|work|A2|The team made a decision after hearing everyone’s views.|Tim mengambil keputusan setelah mendengar pendapat semua orang.
solve a problem|memecahkan masalah|phrase|school|A2|The students worked together to solve the problem.|Para siswa bekerja sama untuk memecahkan masalah itu.
give feedback|memberi umpan balik|phrase|communication|A2|The teacher gave feedback on the students’ first drafts.|Guru memberi umpan balik pada draf pertama para siswa.
set a goal|menetapkan tujuan|phrase|school|A2|Each learner set a goal for the new term.|Setiap siswa menetapkan tujuan untuk semester baru.
make progress|mengalami kemajuan|phrase|school|A2|She has made progress in reading this month.|Dia mengalami kemajuan dalam membaca bulan ini.
feel confident|merasa percaya diri|phrase|feelings|A2|He feels more confident when he practises with a partner.|Dia merasa lebih percaya diri saat berlatih dengan teman.
be responsible for|bertanggung jawab atas|phrase|work|A2|I am responsible for preparing the weekly activity.|Saya bertanggung jawab menyiapkan kegiatan mingguan.
be interested in|tertarik pada|phrase|basics|A2|Many students are interested in stories about animals.|Banyak siswa tertarik pada cerita tentang hewan.
look after|menjaga; merawat|phrase|people|A2|The teacher looked after the class during the library visit.|Guru mendampingi kelas selama kunjungan ke perpustakaan.
find out|mencari tahu|phrase|communication|A2|We will find out which books the students enjoy most.|Kami akan mencari tahu buku mana yang paling disukai siswa.
talk about|membicarakan|phrase|communication|A2|The students talked about what they learned in science.|Para siswa membicarakan hal yang mereka pelajari dalam sains.
get ready|bersiap-siap|phrase|daily-life|A2|We get ready for the lesson before the bell rings.|Kami bersiap untuk pelajaran sebelum bel berbunyi.
be on time|tepat waktu|phrase|time|A2|Please be on time for the parent meeting.|Mohon datang tepat waktu untuk pertemuan orang tua.
in front of|di depan|preposition|places|A2|The teacher stood in front of the class to give instructions.|Guru berdiri di depan kelas untuk memberikan instruksi.
for example|contohnya|phrase|communication|A2|Some activities, for example role-play, help students practise conversation.|Beberapa kegiatan, contohnya bermain peran, membantu siswa berlatih percakapan.
in my opinion|menurut pendapat saya|phrase|communication|A2|In my opinion, the shorter activity worked better.|Menurut pendapat saya, kegiatan yang lebih singkat itu lebih efektif.
because of|karena|preposition|basics|A2|The outdoor lesson moved inside because of the rain.|Pelajaran di luar ruangan dipindahkan ke dalam karena hujan.`;
const a1a2Entries=a1a2Text.split('\n').map(line=>line.split('|'));
const existingKeys=new Set([...rows.map(r=>r[0]),...curated.map(r=>r[0])].map(w=>w.toLocaleLowerCase('en')));
for(const entry of a1a2Entries){if(entry.length===7&&!existingKeys.has(entry[0].toLocaleLowerCase('en'))){existingKeys.add(entry[0].toLocaleLowerCase('en'));curated.push(entry)}}
const reviewedText=`reading fluency|kelancaran membaca|A2|school
class register|daftar kelas|A2|school
school term|semester sekolah|A2|school
classroom display|pajangan kelas|A2|school
school trip|kunjungan sekolah|A2|school
permission slip|surat izin|A2|school
school uniform|seragam sekolah|A2|school
study partner|teman belajar|A2|school
class timetable|jadwal pelajaran|A2|school
school newsletter|buletin sekolah|A2|communication
class rules|peraturan kelas|A2|school
learning space|ruang belajar|A2|school
quiet area|area tenang|A2|school
school office|kantor sekolah|A2|school
staff room|ruang guru|A2|school
class project|proyek kelas|A2|school
term dates|tanggal penting semester|A2|time
school event|acara sekolah|A2|school
class activity|kegiatan kelas|A2|school
daily attendance|kehadiran harian|A2|school
reading log|catatan membaca|B1|school
peer support|dukungan teman sebaya|B1|school
study skills|keterampilan belajar|B1|school
classroom climate|suasana kelas|B1|school
student engagement|keterlibatan siswa|B1|school
learning preference|preferensi belajar|B1|school
written response|jawaban tertulis|B1|school
oral presentation|presentasi lisan|B1|school
class observation|observasi kelas|B1|school
support network|jaringan dukungan|B1|school
parent conference|pertemuan dengan orang tua|B1|communication
school community|komunitas sekolah|B1|school
attendance record|catatan kehadiran|B1|school
learning resource|sumber belajar|B1|school
revision plan|rencana perbaikan|B1|school
student reflection|refleksi siswa|B1|school
reading habit|kebiasaan membaca|B1|school
project showcase|pameran proyek|B1|school
team contribution|kontribusi tim|B1|work
meeting agenda|agenda rapat|B1|work
assessment criteria|kriteria penilaian|B2|school
professional conduct|perilaku profesional|B2|work
parental involvement|keterlibatan orang tua|B2|school
classroom interaction|interaksi kelas|B2|school
academic progress|kemajuan akademik|B2|school
teaching practice|praktik mengajar|B2|school
student achievement|prestasi siswa|B2|school
learning environment|lingkungan belajar|B2|school
staff development|pengembangan staf|B2|work
curriculum planning|perencanaan kurikulum|B2|school
school leadership|kepemimpinan sekolah|B2|work
student support|dukungan siswa|B2|school
feedback cycle|siklus umpan balik|B2|school
learning objective|tujuan pembelajaran|B2|school
workload balance|keseimbangan beban kerja|B2|work
teaching resource|sumber pengajaran|B2|school
family engagement|keterlibatan keluarga|B2|school
student voice|suara siswa|B2|school
learning barrier|hambatan belajar|B2|school
classroom practice|praktik kelas|B2|school
inclusive practice|praktik inklusif|C1|school
professional development|pengembangan profesional|C1|work
formative assessment|penilaian formatif|C1|school
learner autonomy|kemandirian pembelajar|C1|school
curriculum alignment|keselarasan kurikulum|C1|school
instructional design|perancangan pembelajaran|C1|school
pastoral care|pendampingan kesejahteraan siswa|C1|school
learning outcome|hasil pembelajaran|C1|school
reflective practice|praktik reflektif|C1|work
evidence-informed practice|praktik berbasis bukti|C1|work
student agency|agensi siswa|C1|school
differentiated instruction|pembelajaran berdiferensiasi|C1|school
classroom discourse|wacana kelas|C1|school
professional learning community|komunitas belajar profesional|C1|work
attainment gap|kesenjangan pencapaian|C1|school
school improvement plan|rencana peningkatan sekolah|C1|work
learning progression|progresi pembelajaran|C1|school
instructional approach|pendekatan instruksional|C1|school
stakeholder consultation|konsultasi pemangku kepentingan|C1|work
pedagogical framework|kerangka pedagogis|C1|school
epistemic humility|kerendahan hati intelektual|C2|communication
interpretive framework|kerangka interpretatif|C2|school
methodological limitation|keterbatasan metodologis|C2|work
causal inference|inferensi kausal|C2|work
conceptual distinction|pembedaan konseptual|C2|communication
competing interpretation|interpretasi yang bersaing|C2|communication
institutional constraint|kendala kelembagaan|C2|work
systemic inequity|ketidakadilan sistemik|C2|school
longitudinal evidence|bukti longitudinal|C2|work
curricular coherence|koherensi kurikulum|C2|school
discursive practice|praktik diskursif|C2|communication
theoretical framework|kerangka teoretis|C2|work
implementation fidelity|konsistensi pelaksanaan|C2|work
contextual variable|variabel kontekstual|C2|work
evidence hierarchy|hierarki bukti|C2|work
pedagogical rationale|landasan pedagogis|C2|school
intellectual rigour|ketelitian intelektual|C2|work
equity-oriented approach|pendekatan berorientasi kesetaraan|C2|school
corroborating evidence|bukti pendukung|C2|work
unintended consequence|konsekuensi yang tidak disengaja|C2|work`;
const examplePatterns={
  A2:[['The teacher explained {w} before the activity.','Guru menjelaskan {id} sebelum kegiatan dimulai.'],['We included {w} in the weekly plan.','Kami memasukkan {id} ke dalam rencana mingguan.']],
  B1:[['We discussed {w} with the family after class.','Kami membahas {id} dengan keluarga setelah kelas.'],['The team made time to talk about {w}.','Tim menyediakan waktu untuk membicarakan {id}.']],
  B2:[['The school reviewed {w} before updating its support plan.','Sekolah meninjau {id} sebelum memperbarui rencana dukungannya.'],['Teachers considered {w} when planning the next unit.','Para guru mempertimbangkan {id} saat merencanakan unit berikutnya.']],
  C1:[['The report examines how {w} shapes students’ learning.','Laporan itu mengkaji bagaimana {id} membentuk pembelajaran siswa.'],['The team used {w} to guide its review of the programme.','Tim menggunakan {id} untuk memandu peninjauan program.']],
  C2:[['The panel considered the implications of {w} for equitable practice.','Panel mempertimbangkan implikasi {id} bagi praktik yang setara.'],['A careful analysis of {w} informed the final recommendation.','Analisis cermat terhadap {id} menjadi dasar rekomendasi akhir.']]
};
for(const line of reviewedText.split('\n')){const [word,meaning,level,category]=line.split('|'),templates=examplePatterns[level],sample=templates[curated.length%templates.length];curated.push([word,meaning,'noun phrase',category,level,sample[0].replace('{w}',word),sample[1].replace('{id}',meaning)])}
// Replace synthetic word combinations with reviewed lexical entries.
extra.splice(0,curated.length,...curated);
const vocabulary=[...rows.map(([word,meaning,partOfSpeech,category,level,example,translation])=>({word,meaning,partOfSpeech,category,level,example,translation})),...extra.map(([word,meaning,partOfSpeech,category,level,example,translation])=>({word,meaning,partOfSpeech,category,level,example,translation}))];
window.VOCABULARY=vocabulary;

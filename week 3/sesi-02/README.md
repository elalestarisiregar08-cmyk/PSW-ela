00/index.html?nama=Ela+Lestari+Siregar&email=ela%40imut.com&telepon=08525894376&tiket=4&prodi=trpl&mode=luring&topik=html&catatan=imup+bgte
Ini adalah hasil form HTML dengan method="get": data isian ditempel di belakang URL.
1.? menandai awal data, dan & memisahkan antar isian.
2.Format tiap data: name=value (name dari atribut input, value dari isian pengguna).
Hasil dari disabled 
http://127.0.0.1:5500/index.html?email=ela%40imut.com&telepon=08525894376&tiket=4&prodi=trpl&mode=luring&topik=html&catatan=fgnsjgs



1. Mengapa telepon bukan type="number"?
Nomor telepon bukan angka untuk dihitung, melainkan deretan digit sebagai identitas. Jika pakai number, angka 0 didepan hilang (08525... jadi 8525...), muncul tombol panah naik/turun yang tidak berguna, dan tidak bisa memuat + atau - (misalnya +62). Karena itu dipakai type="tel".

2. Beda label pilihan dan legend kelompok?
- label memberi nama untuk satu input (misalnya "Luring" pada satu radio button). Kalau diklik, input ikut terpilih.
- legend memberi judul untuk sekelompok input di dalam fieldset (misalnya judul "Mode Kehadiran" untuk radio Luring dan Daring).

3. Beda id dan name?
- id dipakai untuk identitas unik di halaman: dihubungkan ke label for, CSS, dan JavaScript. Tidak boleh kembar.
- name dipakai untuk nama data yang dikirim saat form disubmit (jadi key di URL, misalnya nama=...`). Boleh sama pada radio button satu kelompok.

4. Apa yang terjadi pada checkbox tidak dicentang?
Checkbox yang tidak dicentang tidak ikut terkirim sama sekali, jadi namanya tidak muncul di URL. Kalau dicentang, terkirim sebagai name=value (jika tanpa value, isinya on).

Eksperimen           Hasil yang diharapkan
name tersedia        Pasangan data tampil                               berhasil sss
name dihapus         Pasangan kontrol tidak tampil                      berhadil
disabled             Kontrol tidak dikirim(tidak bisa menambahkan nama) berhasil
Radio dipilih        Hanya nilai pilihan aktif tampil                   berhasil


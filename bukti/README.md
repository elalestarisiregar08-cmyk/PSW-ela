Nama : Ela Lestari Siregar
NIM : 41426021
Prodi : D4 TRPL1

AI USE STATEMENTS
saya menggunakan ai untuk mencari tahu bagaimana penggunaan Periksa currentSrc di Console atau Elements yaitu dengan cara menggunakan document.querySelectorAll('img').forEach(i => console.log(i.currentSrc, i.naturalWidth)).


1.font computed pada 2 size yang saya dapatkan adalah 
card kegiatan mahasiswa    757 px           34 px
card kegiatan mahasiswa     248px           28 px


Perbedaan Media Query dan Container Query

Media query (@media) menyesuaikan gaya berdasarkan kondisi viewport, yaitu lebar jendela browser atau perangkat. Artinya, semua elemen yang diatur dengan media query bereaksi pada ukuran layar yang sama, tanpa peduli seberapa besar ruang yang tersedia untuk elemen itu sendiri. Contohnya, @media (min-width: 768px) aktif ketika lebar viewport minimal 768 px.

Container query (@container) menyesuaikan gaya berdasarkan ukuran container induk terdekat yang sudah dideklarasikan dengan container-type. Jadi sebuah komponen bereaksi pada ruang yang benar-benar tersedia baginya. Contohnya, @container (min-width: 400px) aktif ketika lebar container minimal 400 px, berapa pun lebar viewport-nya.

Pada bagian praktikum ini, kode @media (prefers-reduced-motion: reduce) { .card { transition: none; } } berperan sebagai pengatur agar ketika pengguna mengaktifkan pengaturan prefers-reduced-motion: reduce di perangkatnya, perangkat secara otomatis membuat transisi pada web (misalnya saat elemen membesar atau mengecil) menjadi lebih sedikit tahapannya, atau lebih tepatnya supaya tampilannya lebih halus.

Format laporan yang diisi mahasiswa
1.Input/kondisi:computed pada 2 viewport
Tindakan: saya mencari font size di computed pada dev tolls lalu memperbesar dan memperkecil responsive
hasil: ada perubahan ketika dia 700 px semakin besar juga dia font size begitu juga semakin kecil dia responsive nya dia makin kecil font size nya 
status: berhasil

2. input :ubah lebih container pada view port
tindakan : mengecilkan dari inspect 
hasil:dia mengecil begitu juga dengan tulisan dan juga gambar nya ikut mengecil karena ada di scrset dia yang 320px dan 640px

3.input:uji cache 
tindakan: pada inspect network centang disable change 
hasil : maka akan ada pilihan dari gambar yang dipilih oleh browser
status: berhasil 

4.input : currentscr di console 
tindakan : mengetik  document.querySelectorAll('img').forEach(i => console.log(i.currentSrc, i.naturalWidth)) di coonsole 
hasil: maka akan muncul gambar tapi sbeelum itu ada eror karena salah penamaan pada gambar 
status:berhasil 
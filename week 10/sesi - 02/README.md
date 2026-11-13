Nama : Ela Lestari Siregar
NIM : 41426021
Prodi : D4 TRPL

AI use statements
Saya menggunakan AI untuk mencari cara untuk mengecek selector h1 dan daftar dan cara menghubungkan main js dan index html


1. Starter DOM
 - uji selector h1 dan #daftar 
 tindakan: Memeriksa elemen menggunakan document.querySelector()
 prediksi : Kedua elemen di prediksi berhasil di temukan 
 hasil: berhasil ditemukan dan ditampilkan di console 
 - selector salah #list 
 tindakan : mengubah kode const daftar menjadi #list 
 prediksi: Menghasilkan null karena id tidak sesuai 
 hasil: Console menampilkan null karena elemen tidak ditemukan.

 2. Teks dan Elemen baru 
 -Memerika DOM menggunakan querySelector("b)
 Prediksi: menghasilkan null 
 hasil nyata : elemen b tidak ditemukan dan hasil null

 -HTML markup 
 Tindakan : Mengganti textContent dengan innerHTML 
 Prediksi: Teks Rina menjadi tebal dan tidak ada tag tag itu 
 Hasil :Tag HTML di proses menjadi elemen dan tag itu tidak ada dan Rina menjadi tebal 

 perbedaaan textContent dan innerHTML
 textContent digunakan untuk memasukkan atau mengubah isi suatu elemen HTML dalam bentuk teks biasa. Jika kita memasukkan tag HTML seperti <b>Rina</b>, tag tersebut akan ditampilkan sebagai teks dan tidak diproses menjadi format HTML.

Sedangkan innerHTML digunakan untuk memasukkan atau mengubah isi elemen dengan memproses tag HTML. Jika kita memasukkan <b>Rina</b>, browser akan menampilkan tulisan Rina dalam format tebal.

3. State dan renders
    -array berisi dan budi 
    Tindakan : Memanggil render() dua kali 
    Prediksi : Data tetap 2 item 
    Hasil : Data tetap 2 item 

    -Data yang sama 
    item tidak duplikat 
    
    -peserta = [] 
    Tindakan : Mesongkan array lalu memanggil render() 
    Prediksi : Daftar menjadi kosong 
    Hasil nyata : Jumlah elemen menjadi 0 

4. Keadaan kosong
-Peserta= []
Tindakan: Mengosongkan array dan menjalankan render()
prediksi : pesan kosong muncul 
Hasil: pesan berhasil muncul

- Array berisi Rina dan Budi
Tindakan: Mengisi array dan menjalankakn render().
Prediksi:Nama muncul dan pesan hilang.
hasil: Rina dan budi muncul

-Class empty-state
tindakan: menggunakan class.list toggle() dan css 
Prediksi : Pesan memiliki gaya khusus
Hasil : Pesan tampil merah dan miring 
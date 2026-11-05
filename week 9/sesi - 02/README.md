Nama : Ela Lestari Siregar
NIM : 41426021
Prodi : D4 TRPL

AI USE Statements 
Saya menggunakan ai untuk mencari tau kenapa java script saya belum berjalan di devtolls dan belum ada tulisan java script berhasil dijalankan 


1. File dan Console

Tindakan: Membuat file main.js dan menghubungkannya dengan index.html menggunakan atribut defer dengan kode 
<script src="main.js" defer></script> dan menambahkannya di selum tag penutup body 


Pengujian:Membuka Console pada browser, menjalankan console.log("Halo, saya sedang belajar java script"), dan melakukan reload halaman.

Hasil: Pesan berhasil ditampilkan pada Console. File JavaScript dieksekusi tanpa SyntaxError.
tapi sebelum itu tetap ada eror karena kesalahan pada kode yang ternyata java script belum terhubung ke html.

perbaikan: melakukan perbaikan pada script main js karena ada folder js tertulis padahal main js tidak dalam folder 

hasil: main js berhasil terhubung begitu juga dengan console log tampil dengan baik tanpa eror

Status: Berhasil.

2. konversi data 
perbedaan concatenation dan addition adalah Concatenation kalau ditambahkan "2" + 1 = "21" sedangkan addition Number("2") + 1 = 3

Tindakan: Melakukan eksperimen konversi string menjadi number menggunakan Number("abc") serta memeriksa hasil menggunakan Number.isFinite().

Hasil:String "2" yang digabung dengan angka 1 menghasilkan "21", sedangkan string "2" yang dikonversi menjadi angka menghasilkan 3. String "abc" menghasilkan NaN (Not a Number) dan pemeriksaan Number.isFinite() menghasilkan false.

Kesimpulan: Operator + dapat digunakan untuk concatenation maupun penjumlahan, bergantung pada tipe datanya. Fungsi Number() digunakan untuk mengonversi string menjadi angka.

3. aturan jumlah tiket 

Tindakan: Membuat validasi jumlah tiket menggunakan Number.isInteger(1,5,6,1.5,abc), operator logika || yang dimana dengan kondisi jika dia bukan merupakan bilangan bulat atau lebih kecil dari 1 atau lebih besar dari 5 dan apabila memenuhi salah 1 maka akan di print jumlah tidak valid tetapi jika tidak memenuhi ke 3 kondisi maka akan di kali 10 000, serta batas jumlah tiket minimal 1 dan maksimal 5.

Hasil:Input berupa bilangan bulat 1–5 diterima dan dihitung dengan harga Rp10.000 per tiket. Input 0, 6, dan string "abc" ditolak karena tidak memenuhi aturan validasi.

Kesimpulan: Validasi digunakan untuk memastikan input sesuai ketentuan sebelum dilakukan perhitungan. Input tidak valid tidak dihitung sebagai total harga normal. dan apabila dia memenuhi akaan di print jumlah tidak valid jika tidak akan dikali 10000

4. Loop koleksi 

Tindakan:Membuat array judul yang berisi kumpulan string dan menampilkan setiap item menggunakan perulangan for...of. dan menambahkan item ke empat serta menguji array  string kosong 

Hasil: Console menampilkan HTML, CSS, dan Audit sesuai isi array. Ketika item keempat ditambahkan, item tersebut juga ditampilkan. Ketika array kosong, tidak ada item yang ditampilkan dan program tetap berjalan normal.

Kesimpulan: Perulangan for...of digunakan untuk mengakses dan menampilkan setiap elemen array secara berurutan. Jumlah perulangan mengikuti panjang array sehingga tidak memerlukan loop tanpa batas.
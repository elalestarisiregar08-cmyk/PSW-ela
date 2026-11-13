Nama : ELa Lestari Siregar 
NIM :41426021
Prodi : D4 TRPL

Ai Use Statements
Saya menggunakan AI untuk mencari tau ketika ada eror di java script yang saya buat apalagi ketika membuat yang module dan uji disitu saya bingung jadi saya bertanya pada AI mengenai hal saya bingungkan tersebut.

1. Function Murni Sederhana 

- return null berarti fungsi mengembalikan nilai kosong karena input tidak valid.
Contoh: hitungTotal(0, 10000) menghasilkan null, bukan 0 atau 10000.

Perbedaan console.log dan return
console.log
-Menampilkan sesuatu di consol
-untuk melihat hasil pengujian
-Tidak menentukan nilai hasil fungsi
return
-Mengembalikan nilai dari fungsi 
-untuk digunakan oleh kode lain
-Menentukan nilai hasil fungsi 



Tindakan: Membuat fungsi hitungTotal(n, harga) untuk menghitung total harga berdasarkan jumlah barang dan harga satuan. Melakukan pengujian dengan input valid dan tidak valid.

Hasil aktual:
- hitungTotal(2, 10000) menghasilkan 20000.
- Input 0, bilangan negatif, bilangan desimal, dan string menghasilkan null.

Kesimpulan:return null digunakan untuk menandakan bahwa input tidak valid sehingga fungsi tidak menghasilkan perhitungan total. return mengembalikan nilai dari fungsi, sedangkan console.log() menampilkan hasil ke Console.

2. Koleksi Kegiatan


Tindakan: Membuat array kegiatan yang berisi tiga objek kegiatan, yaitu HTML, CSS, dan JavaScript. Melakukan pengujian dengan kuota 0 menggunakan filter() dan mengambil judul kegiatan menggunakan map().

Hasil aktual: Kegiatan HTML dengan kuota 20 dan JavaScript dengan kuota 15 ditampilkan sebagai kegiatan tersedia. Kegiatan CSS dengan kuota 0 tidak masuk ke hasil filter. Fungsi map() menghasilkan array judul ["HTML", "JavaScript"].

Kesimpulan: filter() digunakan untuk menyaring data berdasarkan kondisi tertentu, sedangkan map() digunakan untuk menghasilkan array baru dari data yang dipilih. dan k.judul mengambil nilai properti judul dari objek k.


3. Destructing dan scope 

Tindakan: Mengambil properti judul dan kuota dari objek pertama array kegiatan menggunakan destructuring. Selanjutnya, melakukan eksperimen binding di dalam block dan mencoba mengakses variabel dari luar block.

Hasil aktual: Destructuring berhasil menghasilkan HTML dan 20. Ketika variabel yang dideklarasikan di dalam block diakses dari luar block, muncul ReferenceError karena variabel tersebut hanya berlaku di dalam block.

Kesimpulan:Destructuring mempermudah pengambilan properti dari objek. Scope membatasi akses variabel berdasarkan tempat deklarasinya. Perbaikan dilakukan dengan mengakses variabel di dalam block tempat variabel tersebut dideklarasikan.

4. Module dan uji
1.path import sudah sesuai dengan main.js dan util.js sudah berada pada folder yang benar serta nama file pada import sama persis dengan nama file sebelumnya 

2. pemeriksaan editor yaitu ketika dibuka main js di bawah sebelah kanan dia ada tulisan java script lalu ctrl+shift+M untuk membuka panel problems 

A.Tabel uji function
no input            Hasil yang diharapkan
1 .(2,10000)        20000
2 .(3,15000)        45000
3 .(-1, 10000)      -10000
4 .(2.5, 10000)     25000    
5 .("2", 10000)     20000

B.Tabel Uji Koleksi
no input            kuota   hasil filter
1  .HTML            20      Tersedia
2  .CSS             0       Tidak Tersedia
3  .JavaScript      15      Tersedia

FORMAT LAPORAN YANG DI ISI MAHASISWA
1. input/kondisi : kasus normal
Tindakan : Menjalankan hitungtotal(2, 10000)
Hasil aktual: 20000
Status : Berhasil

2. input: kasus batas 
tindakan: Menguji semua kuota nilai bernilai  0
Hasil:[] array kosong
Status:Berhasil
 
3. Kasus gagal
tindakan: Mengubah path import menjadi salah
Hasil : eror file tidak ditemukan
Status:Terdeteksi 
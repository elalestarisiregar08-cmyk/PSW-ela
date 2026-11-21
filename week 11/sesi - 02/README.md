Nama : Ela Lestari Siregar
NIM : 41426021
Prodi :DIV TRPL1

AI use statements :
saya menggunakan ai untuk mencari tau cara pengambilan data dari json dan bagaimana cara menguji objek bukan array.

1. Fixture stabil
- buka url jason langsung : 
input : URL berkas JSON di browser, contoh:
http://127.0.0.1:5500/data/kegiatan.json

prediksi : browser akan menampilkan laman kosong yang berisi data yang dimasukkan 

tindakan :Membuat folder data dan berkas kegiatan.json, menjalankan Live Server, lalu membuka URL berkas tersebut di browser

hasil : data tampak yang berupa data yang [
 { "id": 1, "judul": "HTML", "kuota": 20 },
 { "id": 2, "judul": "CSS", "kuota": 0 }
]

-json valid 
JSON valid sehingga browser menampilkannya tanpa error, dan perintah fetch("/data/kegiatan.json").then(r => r.json()) di Console berhasil mengembalikan array dua objek.

Tindakan:
Memeriksa isi berkas lewat browser dan Console (F12). Memastikan tanda kurung, tanda kutip ganda, dan koma sudah benar.

hasil: data yang berisi [
 { "id": 1, "judul": "HTML", "kuota": 20 },
 { "id": 2, "judul": "CSS", "kuota": 0 }
]


2. Periksa Selector
input : perintah di console browser (f12):
document.querySelector('#muat')
document.querySelector('#pesan')
document.querySelector('#daftar')

prediksi sebelum tindakan: ketiga perintah mengembalikan elemen yang sesuai bukan null, karena script memakai defer.

Tindakan : Membuka halaman di browser, menekan F12, lalu menjalankan ketiga perintah di tab Console. Setelah itu memeriksa apakah ada error di Console.

Hasil nyata : #muat menampilkan <button id="muat" type="button">Muat kegiatan</button>
- #pesan menampilkan <p id="pesan" role="status"></p>
- #daftar menampilkan <ul id="daftar"></ul>
Ketiga selector sesuai prediksi

 3.Fetch dengan ansyc
 -Pengujian mengambil data JSON
Tindakan: Menjalankan website melalui Live Server, membuka Console, kemudian mengeklik tombol Muat.
Prediksi: Data dari kegiatan.json akan berhasil diambil dan ditampilkan pada Console.
Hasil aktual: Data berhasil diambil menggunakan fetch() dan ditampilkan melalui console.log(data).

-Pengujian HTTP 404
Tindakan: Mengubah alamat Fetch menjadi ./data/hilang.json, kemudian mengeklik tombol Muat.
Prediksi: Program akan mendeteksi bahwa file tidak ditemukan dan menghasilkan HTTP 404.
Hasil aktual: Muncul error HTTP 404 karena file tidak ditemukan. Kesalahan berhasil ditangani oleh blok catch.
-Pengujian mengembalikan alamat Fetch
Tindakan: Mengembalikan alamat Fetch menjadi ./data/kegiatan.json, kemudian mengeklik tombol Muat kembali.
Prediksi: Data kegiatan akan kembali berhasil diambil tanpa menghasilkan error.
Hasil aktual: Data kegiatan berhasil ditampilkan kembali pada Console setelah alamat Fetch dikembalikan.

4. Validasi dan render 
— Menguji objek bukan array
Tindakan: Mengubah isi kegiatan.json dari array menjadi objek biasa, kemudian menjalankan website dan mengeklik tombol Muat.
Prediksi: Program akan menampilkan error Data harus array karena data tidak berbentuk array.
Hasil aktual: Program mendeteksi data berbentuk objek dan menampilkan pesan error Data harus array.

 — Menguji judul dengan markup
Tindakan: Mengubah nilai judul menjadi <b>HTML</b>, kemudian mengeklik tombol Muat.
Prediksi: Tulisan markup akan ditampilkan sebagai teks biasa dan tidak diproses sebagai elemen HTML.
Hasil aktual: Tulisan <b>HTML</b> ditampilkan secara utuh sebagai teks pada halaman karena menggunakan textContent.

 — Memeriksa textContent
Tindakan: Mengamati hasil tampilan judul yang mengandung markup pada halaman website.
Prediksi: Browser akan menampilkan isi judul sebagai teks biasa, bukan menjalankan tag HTML.
Hasil aktual: Tag HTML ditampilkan sebagai tulisan biasa. Hal ini menunjukkan bahwa textContent bekerja sesuai fungsinya.

text content adalah textContent adalah properti JavaScript yang digunakan untuk mengambil atau mengubah isi teks di dalam elemen HTML.
Sederhananya, textContent memasukkan tulisan ke dalam elemen HTML tanpa menjalankan tag HTML yang terdapat di dalam tulisan tersebut.
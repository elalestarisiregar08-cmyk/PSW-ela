Nama : Ela Lestari Siregar 
NIM : 41426021
prodi : D4 TRPL 

AI use statements :
Saya menggunakan ai untuk mencari  tau bagaimana penggunaan 


1.Loading dan finally
-Klik berulang
-Tindakan: Klik tombol Muat, lalu langsung klik cepat berkali-kali selagi “Memuat data...” masih tampil.
-Prediksi: Tombolnya langsung disabled, jadi klik berikutnya tidak dihitung dan di Network cuma ada 1 request kegiatan.json.
-Hasil aktual: Benar, cuma muncul 1 baris kegiatan.json. Baris baru baru muncul waktu tombolnya sudah aktif lagi dan diklik lagi, tapi itu memang proses muat yang baru, bukan request ganda.

-Tombol aktif lagi saat sukses
-Tindakan: Tunggu sampai proses muat selesai.
-Prediksi: Daftar kegiatan tampil dan tombol aktif lagi karena ada finally.
-Hasil aktual: Daftar tampil dan tombol aktif lagi setelah sekitar 2 detik.

-Tombol aktif lagi saat gagal
-Tindakan: Ganti sementara path fetch jadi ./data/salah.json, lalu klik Muat.
-Prediksi: Requestnya gagal, pesan berubah jadi “Gagal memuat”, dan tombol tetap aktif lagi karena finally tetap jalan walaupun ada error.
-Hasil aktual: Pesan “Gagal memuat” muncul dan tombolnya aktif lagi. Setelah itu path dikembalikan ke ./data/kegiatan.json.

2.Empty dan pesan sukses 
-Fixture array kosong
-Tindakan: Ganti isi kegiatan.json jadi [], simpan, lalu klik tombol Muat.
-Prediksi: Array kosong bukan error, jadi daftar kosong, pesan berubah jadi “Belum ada kegiatan”, dan tidak ada tulisan “Gagal memuat”.
-Hasil aktual: Sesuai prediksi. Daftar kosong dan pesan “Belum ada kegiatan” muncul. Tidak ada tulisan “Gagal memuat” dan Console tidak menampilkan error.

-Data lama tidak dianggap data terbaru
-Tindakan: Pakai isi asli kegiatan.json, klik Muat sampai HTML dan CSS tampil. Lalu ganti isi file jadi [], simpan, dan klik Muat lagi tanpa refresh halaman.
-Prediksi: Daftar lama hilang karena daftar.replaceChildren() dijalankan sebelum render, lalu pesan berubah jadi “Belum ada kegiatan”.
-Hasil aktual: Daftar HTML dan CSS hilang dan pesan “Belum ada kegiatan” muncul. Setelah selesai, isi kegiatan.json dikembalikan ke aslinya.

3.Time out dengan abort
-Timeout dengan Abort

-Tindakan: Timeout di setTimeout diubah sementara dari 5000 jadi 1000, throttling diset ke 3G, lalu klik tombol Muat kegiatan beberapa kali.
-Prediksi: Request butuh sekitar 2 detik di 3G, jadi bakal dibatalkan di detik pertama oleh controller.abort(). Pesannya berubah jadi “Gagal memuat” dan tombol aktif lagi karena finally.
-Hasil aktual: Sesuai prediksi. Request kegiatan.json di Network berwarna merah (canceled) dengan waktu sekitar 1 detik, pesan “Gagal memuat” muncul, dan tombol aktif lagi.
and the kesimpulan is Request yang kelamaan bisa dibatalkan otomatis lewat AbortController, dan tampilan tetap pulih karena clearTimeout dan tombol.disabled = false dijalankan di finally.

4.Matriks kegagalan
-404 (file tidak ada)
- Tindakan: Path fetch diganti jadi ./data/tidakada.json, lalu klik Muat.
- Prediksi: Filenya tidak ketemu, jadi Status 404, !r.ok bakal melempar error, dan halaman menampilkan "Gagal memuat".
- Hasil aktual: Sesuai prediksi. Status 404, Console menampilkan Error: HTTP 404, dan halaman menampilkan "Gagal memuat".

-JSON rusak
- Tindakan: Path fetch diganti jadi ./data/rusak.json, lalu klik Muat.
- Prediksi: Filenya ketemu (Status 200), tapi r.json() gagal membaca isinya, jadi muncul SyntaxError dan halaman menampilkan "Gagal memuat".
- Hasil aktual: Sesuai prediksi. Status 200, Console menampilkan SyntaxError, dan halaman menampilkan "Gagal memuat".

- JSON salah bentuk
- Tindakan: Path fetch diganti jadi ./data/salah-bentuk.json, lalu klik Muat.
- Prediksi: JSON-nya valid (Status 200), tapi isinya objek, bukan array, jadi validasi Array.isArray bakal melempar error.
- Hasil aktual: Sesuai prediksi. Status 200, Console menampilkan Error: Data harus array, dan halaman menampilkan "Gagal memuat".

-Data kosong
- Tindakan: Path fetch diganti jadi ./data/kosong.json, lalu klik Muat.
- Prediksi: Array kosong bukan kegagalan, jadi Status 200, tidak ada error, dan pesannya "Belum ada kegiatan".
- Hasil aktual: Sesuai prediksi. Status 200, Console tidak ada error, dan halaman menampilkan "Belum ada kegiatan".

-Offline
- Tindakan: Path dikembalikan ke file normal, throttling diubah ke Offline, lalu klik Muat.
- Prediksi: Request tidak sampai ke server sama sekali, jadi fetch langsung gagal dan halaman menampilkan "Gagal memuat".
- Hasil aktual: Sesuai prediksi. Request berstatus failed, Console menampilkan TypeError: Failed to fetch, dan halaman menampilkan "Gagal memuat".

-Lambat
- Tindakan: Timeout diubah sementara jadi 1000, throttling diset ke 3G, lalu klik Muat.
- Prediksi: Request butuh sekitar 2 detik, jadi dibatalkan di detik pertama oleh controller.abort().
- Hasil aktual: Sesuai prediksi. Request berstatus canceled, Console menampilkan AbortError, dan halaman menampilkan "Gagal memuat".
batasan 
- CORS: fetch hanya bisa membaca data dari asal yang sama. Kalau halaman dibuka lewat file:// atau mengambil data dari domain lain tanpa izin server, browser bakal memblokirnya dan di Console muncul sebagai error Failed to fetch.
- Prototipe statis: data cuma berasal dari file JSON, tidak ada server atau database asli. Jadi error server seperti 500 tidak bisa diuji, dan data yang ditambahkan tidak tersimpan permane
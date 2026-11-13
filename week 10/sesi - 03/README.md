Nama: Ela Lestari Siregar
NIM : 41426021
Prodi : D4 TRPL

AI Use statements
saya mengunakan ai untuk memahami bebrapa istilah baru seperti .trim() menghapus spasi di awal dan akhir teks atribut data fungsi render.



1. Tambah peserta
Pengujian tombol Tambah dan Enter: Nama peserta berhasil ditambahkan menggunakan tombol Tambah maupun Enter karena JavaScript menggunakan addEventListener("submit") untuk menangani pengiriman form.

Pengujian input spasi: Nama yang hanya berisi spasi tidak dapat ditambahkan karena .trim() menghapus spasi di awal dan akhir teks. Kondisi if (!nama) kemudian memeriksa apakah input kosong dan menampilkan pesan "Nama harus diisi."

Pengujian penambahan peserta: Jumlah peserta bertambah satu setiap kali nama berhasil dikirim karena peserta.push() menambahkan data baru ke dalam array.

Pembaruan tampilan: Daftar peserta langsung diperbarui setelah penambahan data karena fungsi render() dijalankan kembali.

2. Tombol hapus saat render
-Tindakan : Menambahkan kode pembuatan tombol Hapus di dalam loop render().
Prediksi :  Setiap peserta memiliki tombol Hapus.
Hasil:Setiap peserta berhasil menampilkan tombol Hapus

-Data peserta dengan id berbeda
Tindakan : Memeriksa atribut data-id pada tombol melalui Inspect Element (F12).
Prediksi:Setiap tombol memiliki data-id sesuai ID peserta.
hasil:Setiap tombol memiliki ID yang sesuai dengan peserta masing-masing.


kesimpulan
Tombol Hapus berhasil dibuat menggunakan document.createElement("button") di dalam loop render(), sehingga setiap peserta memiliki tombol masing-masing.

Atribut data-id digunakan untuk menyimpan ID setiap peserta agar tombol dapat dikenali berdasarkan data peserta yang sesuai.

Fungsi render() membuat ulang daftar peserta beserta tombolnya ketika data diperbarui, sehingga peserta yang baru ditambahkan juga mendapatkan tombol Hapus.

Pada tahap ini, tombol Hapus baru dibuat dan dihubungkan dengan ID peserta. Fungsinya untuk menghapus data belum diterapkan
3. Delegation dan pengujian
-menambahkan nama peserta baru
tindakan:Menambahkan Dina melalui form setelah render, kemudian menekan tombol Hapus miliknya.
prediksi:Peserta baru dapat dihapus menggunakan tombol Hapus
hasil:Dina berhasil ditambahkan dan dihapus kembali dari daftar.

-Nama <b>Andi</b>
tindakan: Memasukkan nama yang menyerupai markup HTML melalui form.
prediksi:Nama ditampilkan sebagai teks biasa, bukan sebagai elemen HTML.
hasil:Nama <b>Andi</b> tampil sebagai teks biasa.

-Nama peserta baru
tindakan:Menambahkan Rudi, kemudian melakukan refresh halaman.
prediksi:Data Rudi tidak tersimpan setelah halaman dimuat ulang.
hasil:isi sesuai hasil pengujian setelah refresh.
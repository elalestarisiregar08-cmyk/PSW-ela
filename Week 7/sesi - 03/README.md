Nama : Ela Lestari Siregar
NIM : 41426021
Prodi : D4 TRPL

 AI Use Statement

Saya menggunakan AI untuk membantu memahami materi dalam modul praktikum ini. AI tidak hanya memberikan hasil, tetapi juga membimbing saya dalam memahami langkah-langkah pengerjaan. Selain itu, saya menggunakan AI untuk mencari tahu lebih lanjut tentang Git, memahami perintah-perintah Git, serta membantu mencari penyebab dan solusi ketika terjadi error saat menggunakan Git. Dengan bantuan tersebut, saya dapat mempelajari cara mengatasi masalah dan memahami proses pengerjaan dengan lebih baik.

Komentar Teman :

Komentar 1 — Label pilihan program studi

Pada pilihan program studi, teks Pilih program studi sudah digunakan sebagai opsi awal, tetapi sebaiknya tambahkan atribut disabled agar pengguna tidak dapat memilihnya sebagai pilihan yang valid.
bagian <option value="">Pilih program studi</option>   diganti menjadi <option value="" disabled selected>Pilih program studi</option> agar Pengguna wajib memilih program studi yang benar, bukan membiarkan opsi petunjuk sebagai pilihan.

komentar 2 - Batas panjang catatan

Kolom catatan sudah memiliki maxlength="300", tetapi belum ada informasi yang menjelaskan batas maksimal karakter kepada pengguna. Sebaiknya tambahkan petunjuk agar pengguna tahu bahwa catatan dibatasi hingga 300 karakter.
bagian <label for="catatan">Catatan (opsional)</label>
<textarea id="catatan" name="catatan"
          rows="4" maxlength="300"></textarea> menjadi 
          <label for="catatan">Catatan (opsional)</label>
<small>Maksimal 300 karakter.</small>
<textarea id="catatan" name="catatan"
          rows="4" maxlength="300"></textarea>

1. Simulasi Review

File yang diubah: daftar.html

Perubahan: Menambahkan teks petunjuk format berupa placeholder dan tag <small> pada input nama, nomor telepon, email, dan sebagian besar kolom lainnya.

Hasil Uji: Formulir berhasil menampilkan teks petunjuk dengan jelas ketika dibuka melalui browser.

2. Matriks Uji
Kasus normal | Mengisi form dengan data valid | Form dapat disubmit | Sukses |
Kasus gagal | menghapus tag li | Muncul eror tag  | Sukses  diperbaiki |



*Hasil pengujian: Semua kontrol pada form dapat diakses menggunakan tombol Tab dan Shift+Tab. Fokus terlihat dengan jelas, checkbox dapat dipilih menggunakan Space, dan form dapat dikirim menggunakan keyboard. Urutan fokus juga sudah logis dan tidak menggunakan tabindex positif.
*kenapa server tetap perlu memvalidasi?
Karena server adalah pihak yang benar-benar menyimpan atau memproses data. Kalau server tidak memvalidasi, pengguna bisa mengirim data yang tidak sesuai aturan dan server tetap menerimanya.
Kasus                       Harapan                         Alasan
Email kosong                Ditolak                         Form menolak karena email wajib diisi
Email abc                   Ditolak karena bentuk email     Form menolak karena format email tidak valid
Email contoh valid          Diterima jika lainnya valid     Form diterima jika data lainnya valid
Jumlah 0 / 6                Ditolak                         Form menolak karena jumlah di bawah batas
Jumlah 1 / 5                Diterima
Jumlah 1.5                  Ditolak bila step=1
Kode 12345                  Ditolak
Kode 001234                 Diterima
Keyboard Semua kontrol dapat dicapai                        Semua kontrol dapat dicapai dan digunakan dengan keyboard
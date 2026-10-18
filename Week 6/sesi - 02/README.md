Nama : Ela Lestari Siregar
NIM : 41426021
Prodi : D4 TRPL

AI Statements:
Saya menggunakan ai untuk mencari tau bagaimana cara mengerjakan overflow yang di sengaja dengan 900px karena saya kurang mengerti dalam pengerjaaannya.


1. Nilai breakpoint dalam rem dan nilai viewport dalam aktual.

Pengujian dilakukan di browser dengan Responsive Design Mode pada lebar 767px, 768px, dan 769px. Root font-size terbaca [16px], jadi 48rem = [768px]. Hasilnya, 767px tampil satu kolom, sedangkan 768px dan 769px tampil dua kolom. Ini sesuai harapan karena min-width bersifat inklusif.

Saya tidak mengasumsikan 1rem selalu 16px, sebab rem di media query mengikuti font default browser dan breakpoint bisa bergeser jika pengaturan itu diubah.

2.Lebar 320px
Harapan: konten lengkap. Saya menguji lewat Responsive Design Mode di  browser dengan lebar 320px. Hasilnya, semua konten tampil lengkap tanpa scroll horizontal, sehingga sesuai harapan. 

 3.Zoom 200%
Harapan: tidak terpotong. Saya memperbesar halaman sampai 200% dengan Ctrl + (+). Hasilnya, teks dan elemen tidak terpotong maupun tertutup, sehingga sesuai harapan.
 
 4.Keyboard
Harapan: fokus terlihat. Saya menekan Tab berurutan pada halaman. Hasilnya, indikator fokus terlihat jelas pada setiap link dan tombol, sehingga sesuai harapan. 

kasus pengujian mandiri - hal 8:
kasus                                   harapan                             hasil akhirnya
judul kegiatan dibuat lebih panjang     teks tetap berada di kotaknya       teks tetap berada di kotaknya
judul di kotaknya dikosongkan           kotaknya tetap ada                  kotaknya tetap ada



untuk sesi kali ini saya menjadi mengerti dalam pengerjaan over flow yang dimana ada penambahan card-2 agar ketika diatas 48 rem dia tidak luber tapi ketika dia dibawah 48 rem dia menjadi panjang card.
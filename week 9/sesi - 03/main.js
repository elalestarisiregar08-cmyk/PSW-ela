//pengujian module//
console.log("Pengujian module");
import { hitungTotal } from "./utils.js";

console.log(hitungTotal(2, 10000));
console.log(hitungTotal(3, 15000));
console.log("Uji 3:", hitungTotal(0, 10000));
console.log("Uji 4:", hitungTotal(-2, 10000));
console.log("Uji 5:", hitungTotal(2.5, 10000));
console.log("Uji 6:", hitungTotal("2", 10000));

/*koleksi kegiatan*/
const kegiatan = [
 { id: 1, judul: "HTML", kuota: 20 },
 { id: 2, judul: "CSS", kuota: 0 },
 { id: 3, judul: "JavaScript", kuota: 15 }
];

//Mengambil kegiatan yang kuotanya lebih dari 0//
const tersedia = kegiatan.filter(k => k.kuota > 0);
console.log("kegiatan tersedia:", tersedia);

// Mengambil judul kegiatan saja//
const judulKegiatan = tersedia.map(k => k.judul);

console.log("Judul kegiatan:", judulKegiatan);

//DESTRUCTURING DAN SCOPE//

// binding dalam blok//
const { judul, kuota } = kegiatan[0];
console.log("Didalam block:", judul, kuota);

{
const { judul, kuota } = kegiatan[0];
console.log("Didalam block:", judul, kuota);
}



console.log("JavaScript berhasil dijalankan!");

/*konversi data */
const teks = "2";
console.log(teks + 1);
console.log(Number(teks) + 1);

/*aturan jumlah tiket*/
const jumlah = Number("3");
if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) {
 console.log("Jumlah tidak valid");
} else { console.log(jumlah * 10000); }

/*loop koleksi*/
const judul = ["HTML", "CSS", "Audit", "java script"];
for (const item of judul) console.log(item);
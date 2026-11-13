console.log("JavaScript berhasil terhubung!");

alert("Halo, selamat belajar JavaScript!");

const daftar = document.querySelector("#daftar");
const li = document.createElement("li");
li.innerHTML = "<b>Rina</b>";
daftar.append(li);

let peserta = [
    { id: 1, nama: "Rina" }, 
    { id: 2, nama: "Budi" }
];

function render() {
 daftar.replaceChildren();

 const pesan = document.querySelector("#pesan");
pesan.textContent = peserta.length ? "" : "Belum ada peserta";
pesan.classList.toggle("empty-state", peserta.length === 0);

 for (const p of peserta) {
 const li = document.createElement("li");
 li.textContent = p.nama; daftar.append(li);
 }
}
render();

peserta = [];
render();

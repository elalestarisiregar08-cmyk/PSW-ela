const greetingButton =
    document.querySelector('#greeting-button');
greetingButton.addEventListener('click', () => {
    alert('Saya sedang belajar Pengembangan Situs Web I!');
    console.log('main.js berhasil dijalankan');
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    
    alert('Pendaftaran Anda Sudah Berhasil!');
});
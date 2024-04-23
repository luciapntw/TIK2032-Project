document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const fullNameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageTextarea = document.querySelector('textarea');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            // Jika formulir valid, lakukan tindakan seperti pengiriman data
            // Di sini Anda bisa menambahkan kode untuk mengirim data formulir ke server atau melakukan tindakan lainnya
            alert('Formulir berhasil dikirim!');
            // Mengosongkan formulir setelah pengiriman berhasil
            fullNameInput.value = '';
            emailInput.value = '';
            messageTextarea.value = '';
        }
    });

    function validateForm() {
        // Validasi nama lengkap
        if (fullNameInput.value.trim() === '') {
            alert('Nama lengkap harus diisi');
            return false;
        }

        // Validasi alamat email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert('Alamat email tidak valid');
            return false;
        }

        // Validasi pesan
        if (messageTextarea.value.trim() === '') {
            alert('Pesan harus diisi');
            return false;
        }

        // Jika semua validasi berhasil, kembalikan true
        return true;
    }
});
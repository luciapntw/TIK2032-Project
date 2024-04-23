document.addEventListener("DOMContentLoaded", function() {
    // Select elemen-elemen yang dibutuhkan
    const logoTitle = document.querySelector(".logo-title");
    const containerImg = document.querySelector(".container img");

    // Tambahkan event listener untuk efek mouseover pada logo
    logoTitle.addEventListener("mouseover", function() {
        this.style.color = "#FF6A3D";
        this.style.transform = "rotate(2deg)";
    });

    // Tambahkan event listener untuk efek mouseout pada logo
    logoTitle.addEventListener("mouseout", function() {
        this.style.color = "#eaeaea";
        this.style.transform = "rotate(0deg)";
    });

    // Tambahkan event listener untuk efek zoom pada gambar saat dihover
    containerImg.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
    });

    // Tambahkan event listener untuk mengembalikan ukuran normal gambar saat mouse keluar
    containerImg.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Select elemen-elemen yang dibutuhkan
    const galleryImages = document.querySelectorAll(".container-gallery img");

    // Tambahkan event listener untuk efek hover pada gambar
    galleryImages.forEach(function(image) {
        // Tambahkan efek zoom saat mouse hover
        image.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.5s";
        });

        // Kembalikan ke ukuran normal saat mouse meninggalkan gambar
        image.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
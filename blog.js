document.addEventListener("DOMContentLoaded", function() {
    // Select elemen-elemen yang dibutuhkan
    const headings = document.querySelectorAll(".container h2");
    const paragraphs = document.querySelectorAll(".container p");

    // Tambahkan event listener untuk efek hover pada judul h2
    headings.forEach(function(heading) {
        heading.addEventListener("mouseover", function() {
            this.style.color = "#FF6A3D";
            this.style.transition = "color 0.5s";
        });

        heading.addEventListener("mouseout", function() {
            this.style.color = "#333";
        });
    });

    // Tambahkan event listener untuk efek hover pada paragraf
    paragraphs.forEach(function(paragraph) {
        paragraph.addEventListener("mouseover", function() {
            this.style.fontWeight = "bold";
            this.style.transition = "font-weight 0.5s";
        });

        paragraph.addEventListener("mouseout", function() {
            this.style.fontWeight = "normal";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const perhiasanToggle = document.getElementById("perhiasanToggle");
    const dropdownMenu = document.getElementById("dropdownMenu");

    if (perhiasanToggle && dropdownMenu) {
        perhiasanToggle.addEventListener("click", function (e) {
            e.preventDefault();
            dropdownMenu.classList.toggle("show");
        });

        // Tutup menu kalau klik di luar
        document.addEventListener("click", function (e) {
            if (!perhiasanToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const bungaKiri = document.querySelector(".bunga-kiri");

    const bungaKanan = document.querySelector(".bunga-kanan");

    setTimeout(function () {

        if (bungaKiri) {
            bungaKiri.classList.add("muncul");
        }

        if (bungaKanan) {
            bungaKanan.classList.add("muncul");
        }

    }, 500);

    const fotoPasangan = document.querySelector(".foto-pasangan");

    setTimeout(function () {

        if (fotoPasangan) {
            fotoPasangan.classList.add("muncul");
        }

    }, 2300);

    createLoveParticles();

});

function createLoveParticles() {

    const hero = document.getElementById("hero");

    const container = document.getElementById("loveContainer");

    if (!hero || !container) {
        return;
    }

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
        return;
    }

    const jumlahPartikel = window.innerWidth <= 768
        ? 15
        : 30;

    function random(min, max) {

        return Math.random() * (max - min) + min;

    }


    function updateJarakJatuh() {

        const tinggiHalaman = hero.offsetHeight;

        container.style.setProperty(
            "--fall-distance",
            `${tinggiHalaman + 65}px`
        );

    }

    updateJarakJatuh();

    window.addEventListener("resize", updateJarakJatuh);

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < jumlahPartikel; i++) {

        const love = document.createElement("img");

        love.src = "assets/love.png";

        love.alt = "";

        love.classList.add("love-particle");

        love.setAttribute("aria-hidden", "true");

        const posisiX = random(2, 98);

        const ukuran = window.innerWidth <= 768
            ? random(12, 30)
            : random(18, 42);

        const durasi = random(6, 13);

        const delay = random(0, 4);

        const gerakanSamping = random(-100, 100);

        const rotasi = random(-360, 360);

        const transparansi = random(0.4, 0.9);

        love.style.setProperty(
            "--left",
            `${posisiX}%`
        );

        love.style.setProperty(
            "--size",
            `${ukuran}px`
        );

        love.style.setProperty(
            "--duration",
            `${durasi}s`
        );

        love.style.setProperty(
            "--delay",
            `${delay}s`
        );

        love.style.setProperty(
            "--drift",
            `${gerakanSamping}px`
        );

        love.style.setProperty(
            "--rotation",
            `${rotasi}deg`
        );

        love.style.setProperty(
            "--opacity",
            transparansi
        );

        fragment.appendChild(love);

    }

    container.appendChild(fragment);

}

document.addEventListener("DOMContentLoaded", function () { 
    const navLinks = document.querySelectorAll(".nav-link-undangan"); 
    
    navLinks.forEach(function (link) { 
        link.addEventListener("click", function () { 
            navLinks.forEach(function (item) { 
                item.classList.remove("aktif"); 
            }); 
            
            this.classList.add("aktif"); 
        }); 
    }); 
}); 
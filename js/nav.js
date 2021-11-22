$('document').ready(function () {

    //Menu hamburger au Clic !

    let buttonHamburger = document.getElementById("icon");
    let menu = document.getElementById("main-nav");

    buttonHamburger.addEventListener('click', function (e) {
        menu.classList.toggle('d-none');
    });

    //Menu pays au Clic !

    let iconPays = document.getElementById("other");
    let iconFr = document.getElementById("pays");

    iconFr.addEventListener('click', function () {
        iconPays.classList.toggle('d-none');
    });

});
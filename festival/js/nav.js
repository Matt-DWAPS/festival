$('document').ready(function() {

    //Menu hamburger au Clic !
    $("#icon").click(function () {
        let iconHamburger = document.getElementById("main-nav");
        if (iconHamburger.style.display === "grid") {
            iconHamburger.style.display = "none";
        } else {
            iconHamburger.style.display = "grid";
        }
    });

    //Menu pays au Clic !
    $("#pays").click(function () {

        let iconPays = document.getElementById("other");
        let iconFr = document.getElementById("pays");
        if (iconPays.style.display === "block") {
            iconPays.style.display = "none";
            iconFr.style.border = "";
            iconFr.style.borderRadius = "";
        } else {
            iconPays.style.display = "block";

        }
    });

});
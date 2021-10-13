$('document').ready(function() {

    //Menu hamburger au Clic !

    let buttonHamburger = document.getElementById("icon");
    let menu = document.getElementById("main-nav");

    buttonHamburger.addEventListener('click', function (e)
    {
        if (menu.style.display="none"){
            menu.style.display="grid"
        } else {
            menu.style.display="none";
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
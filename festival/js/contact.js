$('document').ready(function() {

    $("#btnContactSend").click(function () {
        let formContact = document.getElementById("formContact");
        console.log(formContact.checkValidity());
        if(formContact.checkValidity() === true){
            alert("Votre message nous a bien était transmis, nous vous répondrons dans les meilleurs délais");
        }

    });

});
$(document).ready(function () {

    $("#driversave").click(function (event) {

        event.preventDefault();
        console.error($("#ktc").val());
       ;
        var veri = {
            "tc" : $("#ktc").val(),
            "name" : $("#kad").val(),
            "surname" : $("#ksoyad").val(),
            "email" : $("#kmail").val(),
            "phone" : $("#ktelefon").val(),
            "plake" : $("#kplaka").val(),
            "company" : $("#kfirma").val(),
            "password": $("#ksifre").val(),
            "foto" : $("#kfoto").val(),
        }
        $.ajax({
            url: 'http://localhost:8080/api/driver/save',
            type: 'POST',
            data: JSON.stringify(veri),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        })

        .done(function (data) {

            $("modal1").modal('show');
            window.id = da
         })

        .fail(function () {
            alert('olmadi');
        })
       
    });

});
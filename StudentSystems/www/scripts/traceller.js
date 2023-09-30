$(function () {
    $("#traver-list").click(function () {

        $("#kayit-ekle").fadeOut(500);
        $("#lists").fadeIn(500);
    });
});

$(function () {
    $("#new-add").click(function () {

        $("#lists").fadeOut(500);
        $("#kayit-ekle").fadeIn(500);
        var service_id = localStorage.getItem("ucode");
        var gel = "http://localhost:8080/api/service/find-all-driver";
        $.getJSON(gel, function (gelen) {
            for (var i = 0; i < gelen.length; i++) {
                var ob = gelen[i];
                if (ob.service_id != service_id) {
                    continue;
                }
                $("#kkod").val(ob.service_id);
                $("#kplake").val(ob.plaka);
            }
        });
    });
});



$(document).ready(function () {

    $("#Traveller").click(function (event) {

        event.preventDefault();
        console.error($("#kad").val());
        var veri = {
            "name": $("#kad").val(),
            "surname": $("#ksoyad").val(),
            "phone": $("#ktel").val(),
            "serviceId": $("#kkod").val(),
            "password": $("#ksifre").val(),
            "tc": $("#ktc").val(),
            "plate": $("#kplaka").val(),
            "companyName": $("#kfirma").val(),
        }
        $.ajax({
            url: 'http://localhost:8080/api/traveller/save',
            type: 'POST',
            data: JSON.stringify(veri),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        })

            .done(function (data) {

                $("modal2").modal('show');
                window.id = data;
            })

            .fail(function () {
                alert('olmadi');
            })

    });

});

//$(document).ready(function () {
//    var site = "http://localhost:8080/api/traveller/find-all-traveller";
//    var site2 = "http://localhost:8080/api/status/find-all-status";
//    var dizi = [];
//    console.write("http://localhost:8080/api/status/find-all-status");
//    $("#lists").click(function () {
//        $.getJSON(site2, function (gelen2) {
//            t = 0;
//            for (var i = 0; i < gelen2.length; i++) {
//                var ob2 = gelen2[i];
//                if (ob2.service_id != localStorage.getItem("service_id"))
//                    continue;
//                dizi[t] = ob2.durumad;
//                t++;
//            }
//            $.getJSON(site2, function (gelen2) {
//                $("#write_here").html('');
//                m = 0;
//                for (var j = 0; j < gelen; j++) {
//                    var obj = gelen[j];
//                    if (obj.service_id != localStorage.getItem("service_id"))
//                        continue;
//                    $("#write_here").append('<tr>');
//                    $("#write_here").append('<tr>');
//                    $("#write_here").append('<tr>');
//                }
//            }
//        })
//    })
//});

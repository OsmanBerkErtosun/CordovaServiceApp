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







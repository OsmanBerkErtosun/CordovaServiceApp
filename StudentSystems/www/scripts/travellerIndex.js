
function gonder1() {
    var des = document.getElementById("ktel").value;
    var gel1 = "http://localhost:4400/api/traveller";

    $.getJSON(gel1, function (gelen) {
        for (var i = 0; i < gelen.length; i++) {
            var ob = gelen[i];
            if (ob.telefon != des)
                continue;
            localStorage.setItem('ogrenciid', ob.student_id);
            localStorage.setItem('adgonder', ob.name);
            localStorage.setItem('soyadgonder', ob.surname);
            localStorage.setItem('telgonder', ob.phone);
            localStorage.setItem('plakagonder', ob.plake);
            localStorage.setItem('firmagonder', ob.company_name);
            localStorage.setItem('tcgonder', ob.tc);
            localStorage.setItem('serviceidgonder', ob.service_id);

        }
    });
}
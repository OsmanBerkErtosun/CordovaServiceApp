// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

function gonder1() {
    var nameValue = document.getElementById("dname").value;
    localStorage.setItem("name", nameValue);
    var codeValue = document.getElementById("dcode").value;
    localStorage.setItem("code", codeValue);
}

//function gonder1() {
//    var des = document.getElementById("#kkod").value;
//    localStorage.setItem('service_id', des);

//    var des1 = document.getElementById("ktel").value;
//    var gel1 = "http://localhost:4400/api/service";

//    $.getJSON(gel1, function (gelen) {
//        for (var i = 0; i < gelen.length; i++) {
//            var ob = gelen[i];
//            if (ob.telefon != des1)
//                continue;
//            localStorage.setItem('adigonder', ob.name);
//            localStorage.setItem('soyadgonder', ob.surname);
//            localStorage.setItem('telgonder', ob.phone);
//            localStorage.setItem('mailgonder', ob.email);
//            localStorage.setItem('plakagonder', ob.plake);
//            localStorage.setItem('firmagonder', ob.company);
//            localStorage.setItem('tcgonder', ob.tc);
//        }
//    });
//}
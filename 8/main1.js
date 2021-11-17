$(document).ready(function () {
    PopUpHide();
});

var stateObj1 = { index: "form" };
var stateObj2 = { index: "neform" };
function PopUpShow() {
    history.pushState(stateObj1, "page 2", "?form");
    $("#popupout").show();
    $("#email").val(localStorage.getItem('email'));
    $("#fio").val(localStorage.getItem('fio'));
    $("#message").val(localStorage.getItem('message'));
}

function PopUpHide() {
    history.pushState(stateObj2, "page 1", "?neform");
    $("#popupout").hide();
}
window.addEventListener('popstate', function () {
    PopUpHide();
});
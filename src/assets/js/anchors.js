function checkAnchor() {
    var elementid = window.location.hash.replace("#", "");
    if (elementid) {
        scrollToElement(elementid, true);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    window.addLoadEvent(checkAnchor);
});



$('.anchors a:not([data-anchors]), .single-anchors').on("click", function (e) {

    e.preventDefault();

    var elementid = $(this).attr("href");

    if (elementid.search('#') == -1) { //element та текущей странице
        console.log('element та текущей странице');
        scrollToElement(elementid);

    } else { //element может бытьна другой странице
        console.log('elemen на текущей странице 2');
        var elementHref = elementid;
        var elementid = elementid.substr(elementid.indexOf("#") + 1);

        if (document.querySelector('#' + elementid)) { //element на текущей странице
            scrollToElement(elementid);
        } else { //element на другой странице
            location.href = elementHref;
        }
    }
});



function scrollToElement(elementId, onload) {
    var destination = $("#" + elementId).offset().top - 80;
    $('html').animate({
        scrollTop: destination
    }, 1500);
    if (document.querySelector('.mobile-menu__wrap--left0')) {
        window.hideMenu();
    }
}
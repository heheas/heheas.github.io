// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

let flickerInterval;
let activeFlickerStatus = false;
let initDecay = 3000;
let decayPos = 0;
const decayRate = .10;
function flicker(elemID, timeout) {
    if (!activeFlickerStatus) {
        if (elemID[0] != '#') {
            elemID = '#' + elemID;
        }
        console.log("start flicker");
        activeFlickerStatus = true;
        initDecay = timeout;
        setTimeout(activeFlicker, timeout, elemID, flickerRate(timeout));
    }
}
function activeFlicker(elemID, timeout) {
    if (timeout > 10) {
        console.log("flicking: " + timeout);
        $(elemID).toggleClass('flicker');
        flickerInterval = setInterval(() => { $(elemID).toggleClass('flicker'); }, );
        setTimeout(activeFlicker, timeout, elemID, flickerRate(timeout));
    } else {
        $(elemID).addClass('flicker');
        console.log("end flicker");
        clearInterval(flickerInterval);
        setTimeout(() => {
            $(elemID).removeClass('flicker');
            activeFlickerStatus = false;
        }, 30000);
    }
}
function flickerRate(rate) {
    return rate/2;
}

function toggleMenu() {
    let ariaExpanded = $('.navbar-toggler').attr('aria-expanded') === "true";
    $('.navbar-toggler').attr('aria-expanded', !ariaExpanded);
    $('.navbar-toggler svg').toggleClass('fa-bars').toggleClass('fa-xmark');
    $('.navbar-collapse').toggleClass('menuToggleExpand');
    $('body').toggleClass('no-scroll');
    if (!ariaExpanded) {
        $('.nav-social').appendTo('.navbar-collapse');
    } else {
        $('.nav-social').insertBefore('.navbar-menu');
    }
}
/*
$('.custom_slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slick_slider_nav',
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false
        }
    }]
})

$('.slick_slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.custom_slick_slider',
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
});
*/
/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

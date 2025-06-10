window.onload = function () {

    let noWelcome = getCookie('nowelcome');
    if (noWelcome != 'true') {
        showModal();
    }
}

$('.carousel').on('touchstart', function(event){
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if( Math.floor(xClick - xMove) > sensitivityInPx ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
            $(this).carousel('prev');
        }
    });
    $(this).on('touchend', function(){
        $(this).off('touchmove');
    });
});

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

// to get current year
/*function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();*/

function showModal() {
    $('dialog').show();
}
function hideModal() {
    $('dialog').hide();
}
function dontShowAgain() {
    createCookie("nowelcome", true, 400);
    $('dialog').hide();
}

let activeFlickerStatus = false;
function flicker(elemID, timeout) {
    if (!activeFlickerStatus) {
        if (elemID[0] != '#') {
            elemID = '#' + elemID;
        }
        activeFlickerStatus = true;
        initDecay = timeout;
        setTimeout(activeFlicker, timeout, elemID, flickerRate(timeout));
    }
}
function activeFlicker(elemID, timeout) {
    if (timeout > 10) {
        $(elemID).toggleClass('flicker');
        setTimeout(activeFlicker, timeout, elemID, flickerRate(timeout));
    } else {
        $(elemID).addClass('flicker');
        setTimeout(() => {
            $(elemID).removeClass('flicker');
            activeFlickerStatus = false;
        }, 15000);
    }
}
function flickerRate(rate) {
    return rate/1.25;
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

function closeMenu() {
    $('.navbar-collapse').removeClass('menuToggleExpand');
}

function toggleInstructions() {
    $('#instructions_viewer').toggleClass('collapsed');
}

function toggleMailingList() {
    var mailingList = $('#mailingList');
    if ($(mailingList).hasClass('Expanded')) {
        setTimeout(() => {
            $(mailingList).find('h5').html("Join our mailing list!");
        }, 250);
    } else {
        setTimeout(() => {
            $(mailingList).find('h5').html('<i class="fa-solid fa-caret-down" style="font-size:xx-large;"></i>');
        }, 250);
    }
    $(mailingList).toggleClass('Expanded');
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

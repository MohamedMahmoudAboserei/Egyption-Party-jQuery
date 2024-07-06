/// <reference types="../@types/jquery" />

// Navbar

$('.openNav').on('click', function () {
    $('#leftMenu').animate({ width: '250px' }, 700)
    $('.openNav').animate({ marginLeft: '250px' }, 700)
})
$(".closeBtn").on('click', function () {
    $('#leftMenu').animate({ width: '0' }, 700)
    $('.openNav').animate({ marginLeft: '0' }, 700)
})

// SliderDown

$('#sliderDown h3').on('click', function () {
    $('.showClick').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})

// Count
window.onload = function () {
    countDownToTime("9 july 2024 10:00:00");
}
function countDownToTime(countTo) {
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);
    let now = new Date();
    now = (now.getTime() / 1000);
    timeDifference = (futureDate - now);
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)
    setInterval(function () { countDownToTime(countTo); }, 1000);
}

// Contact Us
var maxLength = 100;
$('textarea').on('keyup', function() {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("your available character finished");
    }
    else {
        $("#chars").text(AmountLeft);
    }
})

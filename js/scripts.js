/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ===
                this.pathname.replace(/^\//, "") &&
            location.hostname === this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

// My scripts //

// Under Construction alert
$(".underConstruction").on("click", function () {
    Swal.fire({
        title: "Υπό Κατασκευή!",
        text: "Αυτή η δυνατότητα δεν είναι ακόμα διαθέσιμη. Δοκιμάστε κάτι διαφορετικό!",
        icon: "info",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonText: "ΟΚ!"
    })
})

$(".underConstructionEn").on("click", function () {
    Swal.fire({
        title: "Under Construction!",
        text: "This functionality is not available, yet. Try something else!",
        icon: "info",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonText: "OK!"
    })
})
// #Under Construction alert

// Scores
function tabSpace (id) {
    document.getElementById(id).innerHTML += "&emsp;";
}

function score1(id) {
    tabSpace(id);
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='far fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='far fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='far fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='far fa-circle'></i>";
}

function score2(id) {
    tabSpace(id);
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='far fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='far fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='far fa-circle'></i>";
}

function score3(id) {
    tabSpace(id);
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='far fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='far fa-circle'></i>";
}

function score4(id) {
    tabSpace(id);
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='far fa-circle'></i>";
}

function score5(id) {
    tabSpace(id);
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
    document.getElementById(id).innerHTML += "<i class='fas fa-circle'></i>";
}

score4('java');
score4('android');
score3('bootstrap4');
score3('html5');
score3('css3');
score3('javascript');
score3('php');
score3('python');
score2('laravel');
score2('c');


score5('word');
score5('excel');
score5('powerpoint');
score4('latex');
score3('github');
score2('linux');
// #Scores

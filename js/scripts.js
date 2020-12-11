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


// Sidebar and Section Titles
function initDiv(section_id, content_id, title) {
    $('#' + content_id).append(
        $('<h3/>').addClass('mb-5').append(title)
    );

    sideLi(section_id, title);
}

// <section class="resume-section" id="{Section Id}">
//     <div class="resume-section-content" id="{Section Content Id}">
//         <h3 class="mb-5">{Title}</h3>
//         <!-- From Json  -->
//     </div>
// </section>


function sideLi(href, text) {
    emptyDiv(href);
    $('#' + href).append(text);
}

// <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#{id}">{Text}</a></li>

// #Sidebar and Section Titles

// Empty Divs
function emptyDiv(id) {
    $('#' + id).empty();
}

// #Empty Divs

// Change Language
const PATH = 'json/';

window.addEventListener('load', function () {
    let lang = window.navigator.language.toLowerCase();

    if (lang.match('gr') || lang.match('el')) {
        changeLang('el');
    } else {
        changeLang('en');
    }
})

document.getElementById(ABOUT_LANG_ID).addEventListener('click', function () {
    const element = $('#' + ABOUT_LANG_ID);

    if (element.hasClass('en')) {
        element.removeClass('en');
        changeLang('en');
    } else if (element.hasClass('el')) {
        element.removeClass('el');
        changeLang('el');
    } else {
        console.log('Error in language file');
        alert('Error in language file');
    }
});

function changeLang(lang) {
    const cur_path = PATH + lang;

    $('html').attr('lang', lang);

    aboutFetch(cur_path + '/about.json')
    workExperienceFetch(cur_path + '/workExperience.json');
    voluntaryExperienceFetch(cur_path + '/voluntaryExperience.json');
    educationFetch(cur_path + '/education.json');
    certificationsFetch(cur_path + '/certifications.json');
    skillsFetch(cur_path + '/skills.json');
    portfolioFetch(cur_path + '/portfolio.json');
    interestsFetch(cur_path + '/interests.json');
}


// #Change Language


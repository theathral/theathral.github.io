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
function tabSpace(id) {
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

function score5new() {
    return "&emsp;"
        + "<i class='fas fa-circle'></i>"
        + "<i class='fas fa-circle'></i>"
        + "<i class='fas fa-circle'></i>"
        + "<i class='fas fa-circle'></i>"
        + "<i class='fas fa-circle'></i>";
}

score4('java');
score4('sql');
score3('android');
score3('bootstrap4');
score3('html5');
score3('css3');
score3('javascript');
score3('php');
score3('r');
score3('python');
score2('laravel');
score2('c');


score5('word');
score5('excel');
score5('powerpoint');
score4('latex');
score4('github');
score2('linux');
// #Scores


// Work Experience
function workExperienceDiv(workExp) {
    $('<h3/>').addClass('mb-5').append('Work Experience').appendTo('#workExperienceContent');

    workExperienceSingle('');
    // workExp.content.forEach(item => workExperienceSingle(item));
}

function workExperienceSingle(item) {
    $('<div/>').addClass(['d-flex', 'flex-column', 'flex-column', 'flex-md-row', 'justify-content-between', 'mb-5']).append(
        $('<div/>').addClass('flex-grow-1').append(
            $('<h4/>').addClass('mb-0')
                .append('Open Sea Lifeguard'),
            $('<div/>').addClass(['subheading', 'mb-3'])
                .append('BAYLINE SERVICES'),
            $('<p/>')
                .append('Open Sea Lifeguard at several beaches of Chalkidiki'),
        ),
        $('<div/>').addClass('flex-shrink-0').append(
            $('<span/>').addClass('text-info').append('September 2020')
        )
    ).appendTo('#workExperienceContent')
}

// #Work Experience


// Voluntary Experience
function voluntaryExperienceDiv(workExp) {
    $('<h3/>').addClass('mb-5').append('Voluntary Experience').appendTo('#voluntaryExperienceContent');

    voluntaryExperienceSingle('');
    // workExp.content.forEach(item => workExperienceSingle(item));
}

function voluntaryExperienceSingle(item) {
    $('<div/>').addClass(['d-flex', 'flex-column', 'flex-column', 'flex-md-row', 'justify-content-between', 'mb-5']).append(
        $('<div/>').addClass('flex-grow-1').append(
            $('<h4/>').addClass('mb-0')
                .append('Reception of Freshmen'),
            $('<div/>').addClass(['subheading', 'mb-3'])
                .append('Volunteer Coordination Office, Aristotle University of Thessaloniki'),
            $('<p/>')
                .append(''),
        ),
        $('<div/>').addClass('flex-shrink-0').append(
            $('<span/>').addClass('text-info').append('September 2020 - October 2020')
        )
    ).appendTo('#voluntaryExperienceContent')
}

// #Voluntary Experience


// Education
function educationDiv(workExp) {
    $('<h3/>').addClass('mb-5').append('Education').appendTo('#educationContent');

    educationDivSingle('');
    // workExp.content.forEach(item => workExperienceSingle(item));
}

function educationDivSingle(item) {
    $('<div/>').addClass(['d-flex', 'flex-column', 'flex-column', 'flex-md-row', 'justify-content-between', 'mb-5']).append(
        $('<div/>').addClass('flex-grow-1').append(
            $('<h4/>').addClass('mb-0')
                .append('<i class="fas fa-user-graduate"></i>' + ' ' + 'Computer Science Degree'),
            $('<div/>').addClass(['subheading', 'mb-3'])
                .append('Aristotle University of Thessaloniki'),
            $('<p/>').append(
                'BSc Thesis during Erasmus Exchange with <strong>Prof. Paris Avgeriou</strong> (University of Groningen) as supervisor.\n'
                + '<br>'
                + 'Find more information about my BSc Thesis in "Portfolio" section.'
            ),
            $('<ul/>').addClass(['fa-ul', 'mb-3']).append(
                $('<li/>').append(
                    $('<span>').addClass('fa-li')
                        .append('<i class="fas fa-hourglass-half"></i>'),
                    ' ' + 'Minimum Attendance Duration' + ': ' + '4 Years'
                ),
                $('<li/>').append(
                    $('<span>').addClass('fa-li')
                        .append('<i class="fas fa-certificate"></i>'),
                    ' ' + 'Grade' + ': ' + '8.42/10'
                )
            )
        ),
        $('<div/>').addClass('flex-shrink-0').append(
            $('<span/>').addClass('text-info').append('October 2016 - November 2020')
        )
    ).appendTo('#educationContent')
}

// #Education


// Certifications
function certificationsDiv(workExp) {
    $('<h3/>').addClass('mb-5').append('Certifications').appendTo('#certificationsContent');

    certificationsDivSingle('');
    // workExp.content.forEach(item => workExperienceSingle(item));
}

function certificationsDivSingle(item) {
    $('<div/>').addClass(['d-flex', 'flex-column', 'flex-column', 'flex-md-row', 'justify-content-between', 'mb-5']).append(
        $('<div/>').addClass('flex-grow-1').append(
            $('<h4/>').addClass('mb-0')
                .append('<i class="fas fa-user-graduate"></i>' + ' ' + 'Open Water Lifeguard Degree'),
            $('<div/>').addClass(['subheading', 'mb-3'])
                .append('BAYLINE SERVICES'),
            $('<ul/>').addClass(['fa-ul', 'mb-3']).append(
                $('<li/>').append(
                    $('<span>').addClass('fa-li')
                        .append('<i class="fas fa-first-aid">'),
                    ' ' + 'First Aid Knowledge'
                ),
            )
        ),
        $('<div/>').addClass('flex-shrink-0').append(
            $('<span/>').addClass('text-info').append('October 2016 - November 2020')
        )
    ).appendTo('#certificationsContent')
}

// #Certifications


// Skills
function skillsDiv(workExp) {
    $('<h3/>').addClass('mb-5').append('Skills').appendTo('#skillsContent');

    // skillsDivSection('');
    // workExp.content.forEach(item => workExperienceSingle(item));
}

function skillsDivSection(items) {
    $('<div/>').addClass(['subheading', 'mb-3']).append('Languages');

    $('<table/>').addClass(['ml-3', 'mb-3']).append(
        skillsDivSingle('')
        // workExp.content.forEach(item => workExperienceSingle(item));
    )
}

function skillsDivSingle(item) {
    $('<tr/>').append(
        $('<td/>').append('<i class="fab fa-java"></i>' + ' ' + 'Java'),
        $('<td/>').append(score5new())
    )

    // workExp.content.forEach(item => workExperienceSingle(item));
}

// #Skills


workExperienceDiv('');
voluntaryExperienceDiv('');
educationDiv('');
certificationsDiv('');
// skillsDiv('');






















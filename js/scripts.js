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
const MAX_GRADE = 5

function score(grade) {
    let str = '&emsp;';

    for (let i = 0; i < grade; i++) {
        str += '<i class="fas fa-circle"></i>';
    }

    for (let i = grade; i < MAX_GRADE; i++) {
        str += '<i class="far fa-circle"></i>';
    }

    return str;
}

// #Scores


// Json Files
async function getData() {
    return new Promise((resolve, reject) => {
        fetch('../json/skills.json')
            .then(response => {
                return response.json();
            }).then(data_from_fetched => {
            let data = data_from_fetched.results;
            resolve(data);
        })
    })
}

let movies = 's dfg sdghsrtf';
getData().then(data => {
    movies = data
});

console.log(movies);


// async function jsonFile() {
//     const skillResponse = await fetch('../json/skills.json');
//     return await skillResponse.then(response => response.json());
// }
//
// console.log(jsonFile());


// var json = $.getJSON("../json/skills.json");
// var obj = JSON.parse(json);
// var obj = JSON.stringify(json);
// console.log(json.responseJSON);


// #Json Files


// Work Experience
const WORK_EXP_ID = 'workExperienceContent';

function workExperienceDiv(json) {
    $('<h3/>').addClass('mb-5').append('Work Experience').appendTo('#' + WORK_EXP_ID);

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
    ).appendTo('#' + WORK_EXP_ID)
}

// #Work Experience


// Voluntary Experience
const VOLUNTARY_EXP_ID = 'voluntaryExperienceContent';

function voluntaryExperienceDiv(json) {
    $('<h3/>').addClass('mb-5').append('Voluntary Experience').appendTo('#' + VOLUNTARY_EXP_ID);

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
    ).appendTo('#' + VOLUNTARY_EXP_ID)
}

// #Voluntary Experience


// Education
const EDUCATION_ID = 'educationContent';

function educationDiv(json) {
    $('<h3/>').addClass('mb-5').append('Education').appendTo('#' + EDUCATION_ID);

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
    ).appendTo('#' + EDUCATION_ID)
}

// #Education


// Certifications
const CERTIFICATION_ID = 'certificationsContent';

function certificationsDiv(json) {
    $('<h3/>').addClass('mb-5').append('Certifications').appendTo('#' + CERTIFICATION_ID);

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
    ).appendTo('#' + CERTIFICATION_ID)
}

// #Certifications


// Skills
const SKILL_ID = 'skillsContent';
const SKILL_SECTION_ID = 'skillsSection';

function skillsDiv(json) {
    $('<h3/>').addClass('mb-5').append('Skills').appendTo('#' + SKILL_ID);

    skillsDivSection('');
    // workExp.content.forEach(item => workExperienceSingle(item));
}

function skillsDivSection(sections) {
    $('<div/>').addClass(['subheading', 'mb-3']).append('Languages').appendTo('#' + SKILL_ID);

    let cur_skill_id = SKILL_SECTION_ID + '-' + '1'
    $('<table/>').addClass(['ml-3', 'mb-3']).attr('id', cur_skill_id).appendTo('#' + SKILL_ID)

    skillsDivSingle(cur_skill_id, '')

    // workExp.content.forEach(item => workExperienceSingle(item));
}

function skillsDivSingle(id, item) {
    $('<tr/>').append(
        $('<td/>').append('<i class="fab fa-java"></i>' + ' ' + 'Java'),
        $('<td/>').append(score(4))
    ).appendTo('#' + id);
}

// #Skills


// Interests
const INTERESTS_ID = 'interestsContent';
const INTERESTS_SECTION_ID = 'interestsSection';

function interestsDiv(json) {
    $('<h3/>').addClass('mb-5').append('Interests').appendTo('#' + INTERESTS_ID);

    $('<ul/>').addClass(['fa-ul', 'mb-0']).attr('id', INTERESTS_SECTION_ID)
        .appendTo('#' + INTERESTS_ID)

    interestsDivSingle('')

    // workExp.content.forEach(item => workExperienceSingle(item));
}

function interestsDivSingle(item) {
    $('<li/>').append(
        $('<span/>').addClass('fa-li')
            .append('<i class="fas fa-camera"></i>'),
        'Photography'
    ).appendTo('#' + INTERESTS_SECTION_ID);

    // workExp.content.forEach(item => workExperienceSingle(item));
}

// #Interests


workExperienceDiv('');
voluntaryExperienceDiv('');
educationDiv('');
certificationsDiv('');
skillsDiv('');
interestsDiv('');

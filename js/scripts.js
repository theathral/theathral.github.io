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
// async function getData() {
//     return new Promise((resolve, reject) => {
//         fetch('../json/skills.json')
//             .then(response => {
//                 return response.json();
//             }).then(data_from_fetched => {
//             let data = data_from_fetched.results;
//             resolve(data);
//         })
//     })
// }
//
// let movies = 's dfg sdghsrtf';
// getData().then(data => {
//     movies = data
// });
//
// console.log(movies);


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
fetch("../json/education.json")
    .then(res => res.json())
    .then(data => educationDiv(data))

function educationDiv(json) {
    $('<h3/>').addClass('mb-5').append(json.title).appendTo('#' + EDUCATION_ID);

    let contents = json.contents;
    for (let i = 0; i < contents.length; i++) {
        educationDivSingle(contents[i], json.title, json.min_duration_title, json.fa_min_duration, json.grade_title, json.fa_grade);
    }
    educationDivSingle('');
}

function educationDivSingle(item, title, min_duration_title, fa_min_duration, grade_title, fa_grade) {
    let fa = item.degree.fa;
    let diploma = item.degree.diploma;
    let organization = item.organization;
    let info = item.info[0]; ////////////////
    let grade = item.grade;
    let date = item.date;

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
fetch("../json/certifications.json")
    .then(res => res.json())
    .then(data => certificationsDiv(data))

function certificationsDiv(json) {
    $('<h3/>').addClass('mb-5').append(json.title).appendTo('#' + CERTIFICATION_ID);

    let contents = json.contents;
    for (let i = 0; i < contents.length; i++) {
        certificationsDivSingle(contents[i], json.grade_title);
    }
}

function certificationsDivSingle(item, grade_title) {
    let fa = item.degree.fa;
    let diploma = item.degree.diploma;
    let organization = item.organization;
    let info = item.info[0]; //////////////////////////
    let grade = item.grade;
    let date = item.date;

    $('<div/>').addClass(['d-flex', 'flex-column', 'flex-column', 'flex-md-row', 'justify-content-between', 'mb-5']).append(
        $('<div/>').addClass('flex-grow-1').append(
            $('<h4/>').addClass('mb-0').append(fa + ' ' + diploma),
            $('<div/>').addClass(['subheading', 'mb-3']).append(organization),
            $('<ul/>').addClass(['fa-ul', 'mb-3']).append(
                $('<li/>').append(
                    $('<span>').addClass('fa-li').append(info.fa),
                    ' ' + info.text
                ),
            )
        ),
        $('<div/>').addClass('flex-shrink-0').append(
            $('<span/>').addClass('text-info').append(date)
        )
    ).appendTo('#' + CERTIFICATION_ID)
}

// #Certifications


// Skills
const SKILL_ID = 'skillsContent';
const SKILL_SECTION_ID = 'skillsSection';
fetch("../json/skills.json")
    .then(res => res.json())
    .then(data => skillsDiv(data))

function skillsDiv(json) {
    $('<h3/>').addClass('mb-5').append(json.title).appendTo('#' + SKILL_ID);

    let sections = json.contents;
    for (let i = 0; i < sections.length; i++) {
        skillsDivSection(i, sections[i]);
    }
}

function skillsDivSection(id, sections) {
    $('<div/>').addClass(['subheading', 'mb-3']).append(sections.part).appendTo('#' + SKILL_ID);

    let cur_skill_id = SKILL_SECTION_ID + '-' + id;
    $('<table/>').addClass(['ml-3', 'mb-3']).attr('id', cur_skill_id).appendTo('#' + SKILL_ID)

    let items = sections.items;
    for (let i = 0; i < items.length; i++) {
        skillsDivSingle(cur_skill_id, items[i]);
    }
}

function skillsDivSingle(id, item) {
    console.log(id);
    $('<tr/>').append(
        $('<td/>').append(item.fa + ' ' + item.skill),
        $('<td/>').append(score(item.grade))
    ).appendTo('#' + id);
}

// #Skills


// Interests
const INTERESTS_ID = 'interestsContent';
const INTERESTS_SECTION_ID = 'interestsSection';
fetch("../json/interests.json")
    .then(res => res.json())
    .then(data => interestsDiv(data))

function interestsDiv(json) {
    $('<h3/>').addClass('mb-5').append(json.title).appendTo('#' + INTERESTS_ID);

    $('<ul/>').addClass(['fa-ul', 'mb-0']).attr('id', INTERESTS_SECTION_ID)
        .appendTo('#' + INTERESTS_ID)

    let contents = json.contents;
    for (let i = 0; i < contents.length; i++) {
        interestsDivSingle(contents[i]);
    }
}

function interestsDivSingle(item) {
    $('<li/>').append(
        $('<span/>').addClass('fa-li').append(item.fa),
        item.interest
    ).appendTo('#' + INTERESTS_SECTION_ID);
}

// #Interests

//
// workExperienceDiv('');
// voluntaryExperienceDiv('');
// educationDiv('');
// certificationsDiv('');
// skillsDiv('');
// interestsDiv('');

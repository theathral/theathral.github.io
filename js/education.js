// Education
const EDUCATION_ID = 'educationContent';
const EDUCATION_PAR_ID = 'educationParagraph-';
const EDUCATION_UL_ID = 'educationList-';
fetch("../json/education.json")
    .then(res => res.json())
    .then(data => educationDiv(data, EDUCATION_ID, EDUCATION_PAR_ID, EDUCATION_UL_ID))
// #Education

// Certifications
const CERT_ID = 'certificationsContent';
const CERT_PAR_ID = 'certificationsParagraph-';
const CERT_UL_ID = 'certificationsList-';
fetch("../json/certifications.json")
    .then(res => res.json())
    .then(data => educationDiv(data, CERT_ID, CERT_PAR_ID, CERT_UL_ID))

// #Certifications


function educationDiv(json, glob_id, par_id, ul_id) {
    let title = json.title;
    let contents = json.contents;
    $('#' + glob_id).append(
        $('<h3/>').addClass('mb-5').append(title)
    );

    for (let i = 0; i < contents.length; i++) {
        educationDivSingle(i, contents[i], glob_id, par_id, ul_id);
    }
}

function educationDivSingle(id, item, glob_id, par_id, ul_id) {
    let diploma = item.diploma;
    let organization = item.organization;
    let cur_par_id = par_id + id;
    let details = item.details;
    let cur_ul_id = ul_id + id;
    let info = item.info;
    let date = item.date;

    $('#' + glob_id).append(
        $('<div/>').addClass(['d-flex', 'flex-column', 'flex-column', 'flex-md-row', 'justify-content-between', 'mb-5']).append(
            $('<div/>').addClass('flex-grow-1').append(
                $('<h4/>').addClass('mb-0').append(diploma),
                $('<div/>').addClass(['subheading', 'mb-3']).append(organization),
                $('<div/>').addClass('mb-1').attr('id', cur_par_id),
                $('<ul/>').addClass(['fa-ul', 'mb-3']).attr('id', cur_ul_id)
            ),
            $('<div/>').addClass('flex-shrink-0').append(
                $('<span/>').addClass('text-info').append(date)
            )
        )
    );

    for (let i = 0; i < details.length; i++) {
        $('#' + cur_par_id)
            .append(details[i])
            .append('<br>');
    }

    for (let i = 0; i < info.length; i++) {
        educationDivInfo(cur_ul_id, info[i]);
    }
}

function educationDivInfo(id, info) {
    let fa = info.fa;
    let text = info.text;

    $('#' + id).append(
        $('<li/>').append(
            $('<span>').addClass('fa-li').append(fa),
            '&nbsp;' + text
        )
    );
}


// <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
//     <div class="flex-grow-1">
//         <h4 class="mb-0">{Diploma}</h4>
//         <div class="subheading mb-3">{Organization}</div>
//         <div class="mb-1">
//             <p>
//                 {Details}
//             </p>
//             <p>
//                 {Details}
//             </p>
//             <ul class="fa-ul mb-3">
//                 <li>
//                     <span class="fa-li">{fas fa}</span>&nbsp;{Info}
//                 </li>
//                 <li>
//                     <span class="fa-li">{fas fa}</span>&nbsp;{Info}
//                 </li>
//             </ul>
//         </div>
//     </div>
//     <div class="flex-shrink-0"><span class="text-info">{Date}</span></div>
// </div>

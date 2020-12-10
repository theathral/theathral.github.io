// Work Experience
const WORK_EXP_ID = 'workExperienceContent';
const WORK_EXP_POS_ID = 'workExperiencePos';
fetch("../json/workExperience.json")
    .then(res => res.json())
    .then(data => experienceDiv(data, WORK_EXP_ID, WORK_EXP_POS_ID))
// #Work Experience

// Voluntary Experience
const VOLUNTARY_EXP_ID = 'voluntaryExperienceContent';
const VOLUNTARY_EXP_POS_ID = 'voluntaryExperiencePos';
fetch("../json/voluntaryExperience.json")
    .then(res => res.json())
    .then(data => experienceDiv(data, VOLUNTARY_EXP_ID, VOLUNTARY_EXP_POS_ID))

// #Voluntary Experience


function experienceDiv(json, glob_id, pos_id_pre) {
    let title = json.title;
    let contents = json.contents;

    $('#' + glob_id).append(
        $('<h3/>').addClass('mb-5').append(title)
    );

    for (let i = 0; i < contents.length; i++) {
        experienceSingle(i, glob_id, pos_id_pre, contents[i]);
    }
}

function experienceSingle(id, glob_id, pos_id_pre, item) {
    let position = item.position;
    let company = item.company;
    let cur_ul_id = pos_id_pre + id;
    let info = item.info;
    let date = item.date;

    $('#' + glob_id).append(
        $('<div/>').addClass(['d-flex', 'flex-column', 'flex-column', 'flex-md-row', 'justify-content-between', 'mb-5']).append(
            $('<div/>').addClass('flex-grow-1').append(
                $('<h4/>').addClass('mb-0').append(position),
                $('<div/>').addClass(['subheading', 'mb-3']).append(company),
                $('<ul/>').addClass(['fa-ul', 'mb-0']).attr('id', cur_ul_id),
            ),
            $('<div/>').addClass('flex-shrink-0').append(
                $('<span/>').addClass('text-info').append(date)
            )
        )
    );

    for (let i = 0; i < info.length; i++) {
        experienceSingleInfo(cur_ul_id, info[i]);
    }
}

function experienceSingleInfo(id, info) {
    let fa = info.fa;
    let text = info.text;

    $('#' + id).append(
        $('<li/>').append(
            $('<span/>').addClass('fa-li').append(fa),
            '&nbsp;' + text
        )
    );
}


// <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
//     <div class="flex-grow-1">
//         <h4 class="mb-0">{Position}</h4>
//         <div class="subheading mb-3">{Company}</div>
//         <ul class="fa-ul mb-0">
//             <li>
//                 <span class="fa-li">{fas fa}</span>&nbsp;{Info Text}
//             </li>
//         </ul>
//     </div>
//     <div class="flex-shrink-0"><span class="text-info">{Date}</span></div>
// </div>

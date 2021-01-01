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

const SKILL_ID = 'skillsLink';
const SKILL_CONT_ID = 'skillsContent';
const SKILL_SECTION_ID = 'skillsSection';

function skillsFetch(path) {
    fetch(path)
        .then(res => res.json())
        .then(data => skillsDiv(data))
}

function skillsDiv(json) {
    let title = json.title;
    let sections = json.contents;

    emptyDiv(SKILL_CONT_ID);
    initDiv(SKILL_ID, SKILL_CONT_ID, title)

    for (let i = 0; i < sections.length; i++) {
        skillsDivSection(i, sections[i]);
    }
}

function skillsDivSection(id, sections) {
    let part = sections.part;
    let items = sections.items;
    let cur_skill_id = SKILL_SECTION_ID + id;

    $('#' + SKILL_CONT_ID).append(
        $('<div/>').addClass(['subheading', 'mb-3']).append(part),
        $('<table/>').addClass(['ml-3', 'mb-3']).attr('id', cur_skill_id)
    )

    for (let i = 0; i < items.length; i++) {
        skillsDivSingle(cur_skill_id, items[i]);
    }
}

function skillsDivSingle(id, item) {
    $('#' + id).append(
        $('<tr/>').append(
            $('<td/>').append(item.fa + '&nbsp;' + item.skill),
            $('<td/>').append(score(item.grade))
        )
    );
}

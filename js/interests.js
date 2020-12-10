// Interests
const INTERESTS_LINK = 'interestsLink';
const INTERESTS_CONT_ID = 'interestsContent';
const INTERESTS_SECTION_ID = 'interestsSection';

function interestsFetch(path) {
    fetch(path)
        .then(res => res.json())
        .then(data => interestsDiv(data))
}

function interestsDiv(json) {
    let title = json.title;
    let contents = json.contents;

    initDiv(INTERESTS_LINK, INTERESTS_CONT_ID, title)

    $('#' + INTERESTS_CONT_ID).append(
        $('<ul/>').addClass(['fa-ul', 'mb-0']).attr('id', INTERESTS_SECTION_ID)
    );

    for (let i = 0; i < contents.length; i++) {
        interestsDivSingle(contents[i]);
    }
}

function interestsDivSingle(item) {
    let fa = item.fa;
    let interest = item.interest;

    $('#' + INTERESTS_SECTION_ID).append(
        $('<li/>').append(
            $('<span/>').addClass('fa-li').append(fa),
            '&nbsp;' + interest
        )
    );
}

// #Interests


// <ul className="fa-ul mb-0">
//     <li><span className="fa-li">{fas fa}</span>&nbsp;{Interest}</li>
//     <li><span className="fa-li">{fas fa}</span>&nbsp;{Interest}</li>
// </ul>


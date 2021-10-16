const TITLE_DIV = 'title';
const PHOTO_SIDE = 'photoSide';
const PHOTO_TOP = 'photoTop';

const ABOUT_LINK = 'aboutLink';
const ABOUT_NAME_ID = 'aboutName';
const ABOUT_CONTACT_ID = 'aboutContact';
const ABOUT_TEXT_ID = 'aboutText';
const ABOUT_UPDATED_ID = 'aboutUpdated';
const ABOUT_SOCIAL_ID = 'aboutSocial';
const ABOUT_LANG_ID = 'langLink';

function aboutFetch(path) {
    fetch(path)
        .then(res => res.json())
        .then(data => aboutDiv(data))
}

function aboutDiv(json) {
    let updated = json.last_change;
    let title = json.title;
    let photo_alt = json.photo_alt;
    let first_name = json.first_name;
    let last_name = json.last_name;
    let place = json.place;
    let phone = json.tel;
    let email = json.email;
    let about = json.about;
    let social = json.social;
    let cv = json.cv;
    let lang = json.lang;

    emptyDiv(ABOUT_UPDATED_ID);
    $('#' + ABOUT_UPDATED_ID).append(updated);

    emptyDiv(TITLE_DIV);
    $('#' + TITLE_DIV).append(first_name + '&nbsp;' + last_name);

    $('#' + PHOTO_SIDE).attr('alt', photo_alt);
    $('#' + PHOTO_TOP).attr('alt', photo_alt);

    sideLi(ABOUT_LINK, title)

    emptyDiv(ABOUT_NAME_ID);
    $('#' + ABOUT_NAME_ID).append(
        first_name,
        ' ',
        $('<span/>').addClass('text-info').append(last_name)
    )

    emptyDiv(ABOUT_CONTACT_ID);
    $('#' + ABOUT_CONTACT_ID).append(
        place,
        ' · ',
        $('<a/>').addClass('text-black-50')
            .attr('href', 'tel:' + phone[0].href)
            .append(phone[0].phone),
        ' · ',
        $('<a/>').addClass('text-black-50')
            .attr('href', 'tel:' + phone[1].href)
            .append(phone[1].phone),
        ' · ',
        $('<a/>').addClass('text-info')
            .attr('href', 'mailto:' + email)
            .append(email),
    )

    emptyDiv(ABOUT_TEXT_ID);
    $('#' + ABOUT_TEXT_ID).append(about);

    $('#' + ABOUT_SOCIAL_ID).empty();
    for (let i = 0; i < social.length; i++) {
        aboutSocialMediaSingle(ABOUT_SOCIAL_ID, social[i]);
    }

    aboutCV(ABOUT_SOCIAL_ID, cv);

    emptyDiv(ABOUT_LANG_ID);
    $('#' + ABOUT_LANG_ID).addClass('' + lang.folder)
        .append('<i class="fa fa-language"></i>&nbsp;' + lang.title);
}

function aboutSocialMediaSingle(id, social) {
    let title = social.title;
    let href = social.href;
    let fa = social.fa;

    $('#' + id).append(
        $('<a/>').addClass(['social-icon', 'bg-info', 'm-2'])
            .attr('title', title)
            .attr('href', href)
            .attr('target', '_blank')
            .append(fa)
    )
}

function aboutCV(id, cv) {
    let title = cv.title;
    let href = cv.href;
    let download = cv.download;
    let fa = cv.fa;

    $('#' + id).append(
        $('<a/>').addClass(['social-icon', 'bg-info', 'm-2'])
            .attr('title', title)
            .attr('href', href)
            .attr('target', '_blank')
            .attr('download', download)
            .append(fa)
    )
}

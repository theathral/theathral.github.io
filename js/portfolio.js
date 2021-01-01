const PORTFOLIO_LINK = 'portfolioLink';
const PORTFOLIO_CONT_ID = 'portfolioContent';

function portfolioFetch(path) {
    fetch(path)
        .then(res => res.json())
        .then(data => portfolioDiv(data))
}

function portfolioDiv(json) {
    sideLi(PORTFOLIO_LINK, json.title);

    let title = json.title;
    let contents = json.contents;

    emptyDiv(PORTFOLIO_CONT_ID);
    initDiv(PORTFOLIO_LINK, PORTFOLIO_CONT_ID, title)

    for (let i = 0; i < contents.length; i++) {
        portfolioDivSingle(contents[i]);
    }
}

function portfolioDivSingle(item) {
    let title = item.title;
    let text = item.text;
    let hrefMsg = item.href.message;
    let hrefFa = item.href.fa;
    let href = item.href.link;
    let date = item.date;

    $('#' + PORTFOLIO_CONT_ID).append(
        $('<div/>').addClass(['d-flex', 'flex-column', 'flex-column', 'flex-md-row', 'justify-content-between', 'mb-5']).append(
            $('<div/>').addClass('flex-grow-1').append(
                $('<h4/>').addClass('mb-3').append(title),
                $('<div/>').addClass('mb-3').append(text),
                $('<small/>').append(hrefMsg).append(
                    $('<a/>')
                        .attr('href', href)
                        .attr('target', '_blank')
                        .append(
                            $('<a/>').addClass(['text-info', 'm-2']).append(hrefFa)
                        )
                )
            ),
            $('<div/>').addClass('flex-shrink-0').append(
                $('<span/>').addClass('text-info').append(date)
            )
        )
    );
}

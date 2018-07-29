$(document).ready(function() {
    newsApi();
    textTransform();
    goBack();
});

function newsApi() {

    // Selects
    $.get('https://newsapi.org/v1/sources?language=en').then(function(selects) {

        for (var key in selects) {}

        var template = Handlebars.templates['selects']({
            data: selects[key]
        });

        $('.loader').fadeOut(function() {
            $('.selection-wrap').append(template);
        });


    }).fail(function(err) {
        console.log(err);
    });

    //News
    $('.selection-wrap').on('click', 'button#go', function(e) {
        e.preventDefault();


        var selectedNewsOption = $('.news-select select[name=selected]').val();
        var selectedNewsText = $('.news-select option:selected').text();

        $.get('https://newsapi.org/v1/articles?source=' + selectedNewsOption + '&apiKey=0300c0ea3b734c0d8b418bf291c420a1').then(function(news) {
            for (var key in news) {}

            var template = Handlebars.templates['top-news']({
                data: news[key],
                title: selectedNewsText
            });

            $('.result-wrap').html(template);

            $('.content-wrap').fadeOut(function() {
                $('time.timeago').timeago();
                $('.result-wrap, .go-back').fadeIn();
            });
        }).fail(function(err) {
            console.log(err);
        });
    });
}

function textTransform() {
    var options = {
        strings: ['ABC News (AU)', 'Al Jazeera English', 'Ars Technica', 'Associated Press', 'BBC News', 'BBC Sport', 'Bild', 'Bloomberg', 'Breitbart News', 'Business Insider', 'Business Insider (UK)', 'Buzzfeed', 'CNBC', 'CNN', 'Daily Mail', 'Der Tagesspiegel', 'Die Zeit', 'Engadget', 'Entertainment Weekly', 'ESPN', 'ESPN Cric Info', 'Financial Times', 'Focus', 'Football Italia', 'Fortune', 'FourFourTwo', 'Fox Sports', 'Google News', 'Gruenderszene', 'Hacker News', 'Handelsblatt', 'IGN', 'Independent', 'Mashable', 'Metro', 'Mirror', 'MTV News', 'MTV News (UK)', 'National Geographic', 'New Scientist', 'Newsweek', 'New York Magazine', 'NFL News', 'Polygon', 'Recode', 'Reddit /r/all', 'Reuters', 'Spiegel Online', 'T3n', 'TalkSport', 'TechCrunch', 'TechRadar', 'The Economist', 'The Guardian (AU)', 'The Guardian (UK)', 'The Hindu', 'The Huffington Post', 'The Lad Bible', 'The New York Times', 'The Next Web', 'The Sport Bible', 'The Telegraph', 'The Times of India', 'The Verge', 'The Wall Street Journal', 'The Washington Post', 'Time', 'USA Today', 'Wired.de', 'Wirtschafts Woche'],
        startDelay: 500,
        shuffle: true,
        loop: true,
        backSpeed: 60,
        loopCount: Infinity,
        typeSpeed: 90
    }

    var typed = new Typed('.newspapers', options);
}

function goBack() {
    $('.go-back').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 200);
        $('.result-wrap, .go-back').fadeOut(function() {
            $('.content-wrap').fadeIn();
        });
    });
}
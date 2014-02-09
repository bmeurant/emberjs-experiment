module('Series integration tests', {
    setup: function () {
        App.reset();
    }
});

test('Initial Redirect', function () {
    expect(1);
    visit('/').then(function () {
        equal(path(), 'series.index', 'Redirects to /series');
    });
});

test('Displays seven series plus creation element', function () {
    expect(2);
    visit('/series').then(function () {
        var list = find('ul.series-listing li');
        equal(list.length, 8, 'Seven series displayed + one creation item');
        ok($(list[list.length - 1]).find('a').hasClass('add'), "last list element is the creation item");
    });
});

asyncTest('SeriesItem display', function () {
    expect(6);

    var series = App.SeriesItem.store.find('seriesItem');
    ok(series, "Series list is defined");

    series.then(function (series) {
        var seriesId = 1;
        visit('/series/' + seriesId).then(function () {
            equal(find('h3').text(), series.content[seriesId - 1].get('title'), 'correct series title');
            var description = find('.series-desc dd');
            equal(description.get(0).innerText, series.content[seriesId - 1].get('scriptwriter'), 'correct series scriptwriter');
            equal(description.get(1).innerText, series.content[seriesId - 1].get('illustrator'), 'correct series illustrator');
            equal(description.get(2).innerText, series.content[seriesId - 1].get('publisher'), 'correct series publisher');
            equal(description.get(3).innerText, series.content[seriesId - 1].get('albums.length'), 'correct series volumes');
        });

        start();
    });

});
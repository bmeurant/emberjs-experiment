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

    var seriesId = 1;
    var series = Ember.run(function() {
        return App.SeriesItem.store.find('seriesItem', seriesId);
    });
    ok(series, "Series is defined");
    ok(series, "Series is defined");

    series.then(function (series) {
        visit('/series/' + seriesId).then(function () {
            equal(find('h3').text(), series.get('title'), 'correct series title');
            var description = find('.series-desc dd');
            equal(description.get(0).innerText, series.get('scriptwriter'), 'correct series scriptwriter');
            equal(description.get(1).innerText, series.get('illustrator'), 'correct series illustrator');
            equal(description.get(2).innerText, series.get('publisher'), 'correct series publisher');
            equal(description.get(3).innerText, series.get('albums.length'), 'correct series volumes');
        });

        start();
    });

});
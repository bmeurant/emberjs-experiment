module('series-controller-filteredContent', {
    setup: function () {
        App.reset();
    }
});

asyncTest('controller initialization', function () {
    expect(6);

    var controller = getSeriesController();
    ok(controller, 'Series controller is ok');

    var store = App.SeriesItem.store;
    ok(store, "App store defined");

    var series = store.find('seriesItem');
    ok(series, "Series list is defined");

    controller.set('model', series);
    series.then(function () {
        var content = controller.get('model.content');
        var filteredContent = controller.get('filteredContent');

        equal(content.length, 7, "series list length is correct");
        ok(controller.get('filteredContent'), 'Series controller has filteredContent property');

        equal(content.length, filteredContent.length, 'content and filteredContent have same size');

        start();
    });

});

asyncTest('filteredContent-updated', function () {
    expect(6);

    var controller = getSeriesController();
    var series = App.SeriesItem.store.find('seriesItem');
    controller.set('model', series);
    series.then(function () {

        Ember.run(function () {
            App.SeriesItem.store.createRecord('seriesItem', {id: 8, title: 'zzzzzzz'});
        });

        var content = controller.get('model.content');
        var filteredContent = controller.get('filteredContent');

        equal(content.length, 8, "content length changed");
        equal(filteredContent.length, 8, "filteredContent length changed");

        // sorting still OK
        equal(content[0].id, 1, 'content first elem is OK');
        equal(content[content.length - 1].id, 8, 'content last elem is OK');
        equal(filteredContent[0].id, 4, 'filteredContent first elem is OK');
        equal(filteredContent[filteredContent.length - 1].id, 8, 'filteredContent last elem is OK');

        start();
    });
});

asyncTest('filteredContent-no-filter-sort', function () {
    expect(12);

    var controller = getSeriesController();
    var series = App.SeriesItem.store.find('seriesItem');
    controller.set('model', series);
    series.then(function () {
        var content = controller.get('model.content');
        var filteredContent = controller.get('filteredContent');

        // default sorting is ascending
        equal(content[0].id, 1, 'content first elem is OK');
        equal(content[content.length - 1].id, 7, 'content last elem is OK');
        equal(filteredContent[0].id, 4, 'filteredContent first elem is OK');
        equal(filteredContent[filteredContent.length - 1].id, 3, 'filteredContent last elem is OK');

        // changing to descending
        controller.set('sortAscending', false);

        content = controller.get('model.content');
        filteredContent = controller.get('filteredContent');

        // content changed
        equal(content[0].id, 7, 'content first elem is OK');
        equal(content[content.length - 1].id, 1, 'content last elem is OK');
        // filteredContent changed
        equal(filteredContent[0].id, 3, 'filteredContent first elem is OK');
        equal(filteredContent[filteredContent.length - 1].id, 4, 'filteredContent last elem is OK');

        // changing to ascending
        controller.set('sortAscending', true);

        content = controller.get('model.content');
        filteredContent = controller.get('filteredContent');

        // content changed
        equal(content[0].id, 1, 'content first elem is OK');
        equal(content[content.length - 1].id, 7, 'content last elem is OK');
        // filteredContent changed
        equal(filteredContent[0].id, 4, 'filteredContent first elem is OK');
        equal(filteredContent[filteredContent.length - 1].id, 3, 'filteredContent last elem is OK');

        start();
    });
});

asyncTest('filteredContent-filter-sort', function () {
    expect(6);

    var controller = getSeriesController();
    var series = App.SeriesItem.store.find('seriesItem');
    controller.set('model', series);
    series.then(function () {

        Ember.run(function () {
            controller.set('filter', 'k');
        });

        var content = controller.get('model.content');
        var filteredContent = controller.get('filteredContent');

        equal(content.length, 7, "content length did not change");
        equal(filteredContent.length, 4, "filteredContent length changed");

        // sorting still OK
        equal(content[0].id, 1, 'content first elem is OK');
        equal(content[content.length - 1].id, 7, 'content last elem is OK');
        equal(filteredContent[0].id, 4, 'filteredContent first elem is OK');
        equal(filteredContent[filteredContent.length - 1].id, 3, 'filteredContent last elem is OK');

        start();
    });
});

test('change sort', function () {
    expect(4);

    var controller = getSeriesController();
    controller.set('sortAscending', true);

    ok(controller, 'Series controller is ok');
    ok(controller._actions.sort, 'Series controller has sort action');
    ok(controller.get('sortAscending'), 'sort is ascending');

    // call action
    controller.send('sort');
    ok(!controller.get('sortAscending'), 'sort is descending');
});
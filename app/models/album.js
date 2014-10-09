import DS from 'ember-data';

var Album = DS.Model.extend({
    title               : DS.attr('string'),
    publicationDate     : DS.attr('date'),
    number              : DS.attr('number'),
    coverName           : DS.attr('string', {defaultValue: 'default.jpg'}),
    series              : DS.belongsTo('seriesItem'),
    coverUrl: function() {
        return '/assets/images/albums/covers/' + this.get('coverName');
    }.property('coverName')
});

Album.reopenClass({
    FIXTURES: [{
        id: 1,
        title: 'Somewhere Within the Shadows',
        publicationDate: 'Nov 2000',
        number: 1,
        coverName: 'blacksad-1.jpg',
        series: 1
    }, {
        id: 2,
        title: 'Arctic-Nation',
        publicationDate: 'Mar 2003',
        number: 2,
        coverName: 'blacksad-2.jpg',
        series: 1
    }, {
        id: 3,
        title: 'Red Soul',
        publicationDate: 'Nov 2005',
        number: 3,
        coverName: 'blacksad-3.jpg',
        series: 1
    }, {
        id: 4,
        title: 'A Silent Hell',
        publicationDate: 'Sep 2010',
        number: 4,
        coverName: 'blacksad-4.jpg',
        series: 1
    }, {
        id: 5,
        title: 'Amarillo',
        publicationDate: 'Nov 2013',
        number: 5,
        coverName: 'blacksad-5.jpg',
        series: 1
    }
    ]
});

export default Album;

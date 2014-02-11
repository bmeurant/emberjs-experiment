App.Album = DS.Model.extend({
    title               : DS.attr('string'),
    publicationDate     : DS.attr('date'),
    number              : DS.attr('number'),
    coverName           : DS.attr('string', {defaultValue: 'default.jpg'}),
    series              : DS.belongsTo('seriesItem'),
    coverUrl: function() {
        return 'dist/static/images/albums/covers/' + this.get('coverName');
    }.property('coverName')
});

App.Album = DS.Model.extend({
    title               : DS.attr('string'),
    publicationDate     : DS.attr('date'),
    number              : DS.attr('number'),
    coverUrl            : DS.attr('string'),
    series              : DS.belongsTo('seriesItem')
});

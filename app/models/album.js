App.Album = DS.Model.extend({
    title               : DS.attr('string'),
    scriptwriter        : DS.attr('string'),
    illustrator         : DS.attr('string'),
    publisher           : DS.attr('string'),
    publicationDate     : DS.attr('date'),
    number              : DS.attr('number'),
    coverUrl            : DS.attr('string'),
    summary             : DS.attr('string'),
    series              : DS.belongsTo('seriesItem')
});

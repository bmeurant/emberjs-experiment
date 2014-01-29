App.SeriesItem = DS.Model.extend({
    title               : DS.attr('string'),
    scriptwriter        : DS.attr('string'),
    illustrator         : DS.attr('string'),
    publisher           : DS.attr('string'),
    coverUrl            : DS.attr('string'),
    summary             : DS.attr('string'),
    albums              : DS.hasMany('album', {async: true})
});

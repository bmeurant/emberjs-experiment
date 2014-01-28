Ember.Handlebars.registerBoundHelper('format-date', function(format, date) {
    return moment(date).format(format);
});
App.SeriesItem = DS.Model.extend(Ember.Validations.Mixin, {
    title               : DS.attr('string', {defaultValue: 'New Series'}),
    scriptwriter        : DS.attr('string'),
    illustrator         : DS.attr('string'),
    publisher           : DS.attr('string'),
    coverName           : DS.attr('string', {defaultValue: 'default.jpg'}),
    summary             : DS.attr('string'),
    albums              : DS.hasMany('album', {async: true}),
    coverUrl: function() {
        return '/static/images/series/covers/' + this.get('coverName');
    }.property('coverName')
});

App.SeriesItem.reopen({
    validations: {
        title: {
            presence: true,
            length: { minimum: 5 }
        },
        scriptwriter: {
            presence: true,
            length: { minimum: 5 }
        },
        illustrator: {
            presence: true,
            length: { minimum: 5 }
        },
        publisher: {
            presence: true,
            length: { minimum: 5 }
        }
    }
});
App.SeriesRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('seriesItem');
    }
});

App.SeriesItemIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('seriesItem');
    },

    actions: {
        edit: function(){
            this.transitionTo('seriesItem.edit');
        }
    }
});

App.SeriesItemEditRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('seriesItem');
    }
});
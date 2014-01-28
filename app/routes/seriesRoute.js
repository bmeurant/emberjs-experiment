App.SeriesRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('seriesItem');
    }
});
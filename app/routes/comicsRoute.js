App.ComicsRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('series');
    }
});
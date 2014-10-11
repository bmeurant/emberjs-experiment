import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        debugger;
        return this.store.find('seriesItem');
    }
});

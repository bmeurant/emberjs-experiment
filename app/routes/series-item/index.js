import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        debugger;
        return this.modelFor('seriesItem');
    },

    actions: {
        edit: function () {
            this.transitionTo('seriesItem.edit');
        }
    }
});

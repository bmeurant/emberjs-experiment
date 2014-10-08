import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return this.modelFor('seriesItem');
    },

    actions: {
        edit: function () {
            this.transitionTo('seriesItem.edit');
        }
    }
});

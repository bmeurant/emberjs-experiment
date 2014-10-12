import Ember from 'ember';

export default Ember.Route.extend({

    model: function () {
        return this.store.createRecord('seriesItem');
    },

    renderTemplate: function () {
        this.render('seriesItem.edit', {
            controller: 'series.create'
        });
    },

    actions: {
        submit: function () {
            this.currentModel.save().then(function (model) {
                this.transitionTo('seriesItem', model);
            }.bind(this));
        },

        cancel: function () {
            this.currentModel.rollback();
            this.transitionTo('series');
        },

        willTransition: function () {
            this.currentModel.rollback();
            return true;
        }
    }
});

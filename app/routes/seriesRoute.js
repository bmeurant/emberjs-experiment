App.SeriesRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('seriesItem');
    }
});

App.SeriesItemIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('seriesItem');
    },

    actions: {
        edit: function () {
            this.transitionTo('seriesItem.edit');
        }
    }
});

App.SeriesItemEditRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('seriesItem');
    },
    actions: {
        submit: function () {
            this.currentModel.save().then(function () {
                this.transitionTo('seriesItem');
            }.bind(this));
        },

        cancel: function () {
            this.currentModel.rollback();
            this.transitionTo('seriesItem');
        },

        willTransition: function () {
            this.currentModel.rollback();
            return true;
        }
    }
});
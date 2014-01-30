App.SeriesItemEditController = Em.ObjectController.extend({
    actions: {
        submit: function () {
            this.get('model').save();
            this.transitionToRoute('seriesItem');
        }
    }
});
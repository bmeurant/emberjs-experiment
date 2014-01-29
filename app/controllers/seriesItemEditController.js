App.SeriesItemEditController = Em.ObjectController.extend({
    submit: function(){
        this.get('model').save();
        this.transitionToRoute('seriesItem');
    }
});
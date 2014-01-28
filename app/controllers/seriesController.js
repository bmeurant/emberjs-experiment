App.SeriesController = Em.ArrayController.extend({
    seriesCount: function(){
        return this.get('model.length');
    }.property('@each')
});
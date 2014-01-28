App.ComicsController = Em.ArrayController.extend({
    comicsCount: function(){
        return this.get('model.length');
    }.property('@each')
});
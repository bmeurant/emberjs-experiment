App.SeriesController = Em.ArrayController.extend({
    content: [],
    filter: "",
    sortAscending: true,

    filteredContent: function() {
        var filter = this.get('filter');

        return this.get('content').filter(function(item, index, enumerable){
            return item.get('title').toLowerCase().match(new RegExp(filter.toLowerCase()));
        }).sort(function(a, b) {
            return this.get('sortAscending') ? (b.get('title') < a.get('title')) : (b.get('title') > a.get('title'));
        }.bind(this));
    }.property('filter', 'sortAscending', 'content.@each'),

    actions: {
        sort: function () {
            this.set('sortAscending', !this.get('sortAscending'));
        }
    }
});
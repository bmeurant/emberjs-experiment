import Ember from 'ember';

export default Ember.ArrayController.extend({
    model: [],
    filter: "",
    sortAscending: true,

    filteredContent: function() {
        var filter = this.get('filter');

        return this.get('content').filter(function(item){
            if (item.get('title') === undefined) {
                return true;
            }
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

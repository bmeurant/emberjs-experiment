App.SeriesFilterView = Ember.View.extend({
    actions: {
        sort: function() {
            this.$('i').toggleClass("fa-caret-down");
            this.$('i').toggleClass("fa-caret-up");
            this.get('controller').send('sort');
        }
    }
});
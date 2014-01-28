App.Router.map(function(){
    this.resource('series', function(){
        this.resource('seriesItem', { path:'/:seriesItem_id' }, function(){
            this.route('edit');
        });
        this.route('create');
    });
});
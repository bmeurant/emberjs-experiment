App.Router.map(function(){
    this.resource('comics', function(){
        this.resource('series', { path:'/:series_id' }, function(){
            this.route('edit');
        });
        this.route('create');
    });
});
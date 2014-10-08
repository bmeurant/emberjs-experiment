import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('series', function() {
      this.resource('seriesItem', { path: '/:seriesItem_id' }, function () {
          this.route('edit');
      });
      this.route('create');
  });
});

export default Router;

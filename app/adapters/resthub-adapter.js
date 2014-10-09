import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

var adapter = DS.RESTAdapter.extend({
    host: 'http://localhost:8080',
    namespace: 'api',
    pathForType: function (type) {
        if (type == 'seriesItem')
            return 'series';

        var decamelized = Ember.String.decamelize(type);
        return Ember.String.pluralize(decamelized);
    },
    findMany: function (store, type, ids) {
        return this.ajax(this.buildURL(type.typeKey), 'GET', { data: { ids: ids } });
    }
});

export default adapter;

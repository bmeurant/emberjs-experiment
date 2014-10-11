import DS from 'ember-data';
import config from '../config/environment';
import RESThubAdapter from './resthub-adapter';

var adapter = DS.FixtureAdapter.extend({});

if (config.environment === 'production') {
    adapter = RESThubAdapter;
}

export default adapter;

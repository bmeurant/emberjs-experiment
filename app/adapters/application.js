import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';
import RESThubAdapter from './resthub-adapter';

var adapter = DS.FixtureAdapter.extend({});

if (config.environmenet === 'development') {
    // fixes bug with hasMany
    // http://discuss.emberjs.com/t/ember-data-fixture-adapter-saving-record-loses-has-many-relationships/2821
    DS.JSONSerializer.reopen({
        serializeHasMany : function(record, json, relationship) {
            var key = relationship.key;

            var relationshipType = DS.RelationshipChange.determineRelationshipType(
                record.constructor, relationship);

            if (relationshipType === 'manyToNone' || relationshipType === 'manyToMany' || relationshipType === 'manyToOne') {
                json[key] = Ember.get(record, key).mapBy('id');
                // TODO support for polymorphic manyToNone and manyToMany
                // relationships
            }
        }
    });
}

if (config.environment === 'production') {
    adapter = RESThubAdapter;
}

export default adapter;

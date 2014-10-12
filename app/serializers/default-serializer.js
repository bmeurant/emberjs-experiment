import Ember from 'ember';
import DS from 'ember-data';

var serializer = DS.RESTSerializer.extend({});

    // fixes bug with hasMany
    // http://discuss.emberjs.com/t/ember-data-fixture-adapter-saving-record-loses-has-many-relationships/2821
    DS.JSONSerializer.reopen({
        serializeHasMany : function(record, json, relationship) {
            var key = relationship.key;

            if (relationship.kind === 'manyToNone' || relationship.kind === 'manyToMany' || relationship.kind === 'manyToOne') {
                json[key] = Ember.get(record, key).mapBy('id');
                // TODO support for polymorphic manyToNone and manyToMany
                // relationships
            }
        }
    });

export default serializer;
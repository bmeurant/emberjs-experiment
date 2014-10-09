import Ember from 'ember';
import DS from 'ember-data';

var serializer = DS.JSONSerializer;

    // fixes bug with hasMany
    // http://discuss.emberjs.com/t/ember-data-fixture-adapter-saving-record-loses-has-many-relationships/2821
    serializer.reopen({
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

export default serializer;
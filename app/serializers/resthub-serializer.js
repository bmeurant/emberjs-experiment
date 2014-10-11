import Ember from 'ember';
import DS from 'ember-data';

var serializer = DS.RESTSerializer.extend({
    extractMeta: function (store, type, payload) {
        if (payload) {
            if (payload.size !== undefined) {
                store.metaForType(type, { size: payload.size });  // sets the metadata for "post"
                delete payload.size;  // keeps ember data from trying to parse "total" as a record
            }
            if (payload.number !== undefined) {
                store.metaForType(type, { number: payload.number });  // sets the metadata for "post"
                delete payload.number;  // keeps ember data from trying to parse "total" as a record
            }
            if (payload.totalPages !== undefined) {
                store.metaForType(type, { totalPages: payload.totalPages });  // sets the metadata for "post"
                delete payload.totalPages;  // keeps ember data from trying to parse "total" as a record
            }
            if (payload.numberOfElements !== undefined) {
                store.metaForType(type, { numberOfElements: payload.numberOfElements });  // sets the metadata for "post"
                delete payload.numberOfElements;  // keeps ember data from trying to parse "total" as a record
            }
            if (payload.totalElements !== undefined) {
                store.metaForType(type, { totalElements: payload.totalElements });  // sets the metadata for "post"
                delete payload.totalElements;  // keeps ember data from trying to parse "total" as a record
            }
        }
    },
    extract: function (store, type, payload, id, requestType) {
        var content = Ember.isArray(payload) ? [] : {};
        if (payload) {
            if (payload.content) {
                content = payload.content;
                delete payload.content;
            } else if (Ember.isArray(payload)) {
                content = content.concat(payload);
                payload = {};
            } else {
                for (var key in payload) {
                    if (payload.hasOwnProperty(key)) {
                        content[key] = payload[key];
                        delete payload[key];
                    }
                }
            }
            payload[type.typeKey] = content;
        }
        return this._super(store, type, payload, id, requestType);
    },
    serializeIntoHash: function (hash, type, record, options) {
        Ember.merge(hash, this.serialize(record, options));
    }
});

export default serializer;

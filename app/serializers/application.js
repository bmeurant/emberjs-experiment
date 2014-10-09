import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

var serializer;

if (config.environment === 'production') {
    console.log('production');
    debugger;
    serializer = DS.RESTSerializer.extend({
        extractMeta: function (loader, type, json) {
            if (json) {
                if (json.size != undefined) {
                    loader.metaForType(type, { size: json.size });  // sets the metadata for "post"
                    delete json.size;  // keeps ember data from trying to parse "total" as a record
                }
                if (json.number != undefined) {
                    loader.metaForType(type, { number: json.number });  // sets the metadata for "post"
                    delete json.number;  // keeps ember data from trying to parse "total" as a record
                }
                if (json.totalPages != undefined) {
                    loader.metaForType(type, { totalPages: json.totalPages });  // sets the metadata for "post"
                    delete json.totalPages;  // keeps ember data from trying to parse "total" as a record
                }
                if (json.numberOfElements != undefined) {
                    loader.metaForType(type, { numberOfElements: json.numberOfElements });  // sets the metadata for "post"
                    delete json.numberOfElements;  // keeps ember data from trying to parse "total" as a record
                }
                if (json.totalElements != undefined) {
                    loader.metaForType(type, { totalElements: json.totalElements });  // sets the metadata for "post"
                    delete json.totalElements;  // keeps ember data from trying to parse "total" as a record
                }
            }
        },
        extract: function (loader, type, json, id, requestType) {
            console.log(loader);
            console.log(type);
            console.log(json);
            console.log(id);
            console.log(requestType);
            debugger;
            var content = Ember.isArray(json) ? [] : {};
            if (json) {
                if (json.content) {
                    content = json.content;
                    delete json.content;
                } else if (Ember.isArray(json)) {
                    content = content.concat(json);
                    json = {};
                } else {
                    for (key in json) {
                        if (json.hasOwnProperty(key)) {
                            content[key] = json[key];
                            delete json[key];
                        }
                    }
                }
                json[type.typeKey] = content;
            }
            console.log(json);
            return this.__proto__._super(loader, type, json, id, requestType);
        },
        serializeIntoHash: function (data, type, record, options) {
            Ember.merge(data, this.serialize(record, options));
        }
    });
} else {
    console.log('other');
    serializer = DS.JSONSerializer;
}

export default serializer;

import config from '../config/environment';
import RESThubSerializer from './resthub-serializer';
//import JSONSerializer from './json-serializer';
import DS from 'ember-data';


var serializer;

if (config.environment === 'production') {
    serializer = RESThubSerializer;

} else {
    serializer = DS.RESTSerializer.extend({});
}

export default serializer;

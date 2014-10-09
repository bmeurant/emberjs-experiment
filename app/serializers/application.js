import Ember from 'ember';
import config from '../config/environment';
import RESThubSerializer from './resthub-serializer';
import JSONSerializer from './json-serializer';



var serializer;

if (config.environment === 'production') {
    serializer = RESThubSerializer;

} else {
    serializer = JSONSerializer;
}

export default serializer;

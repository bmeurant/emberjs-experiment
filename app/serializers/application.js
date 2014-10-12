import config from '../config/environment';
import RESThubSerializer from './resthub-serializer';
import DefaultSerializer from './default-serializer';
import DS from 'ember-data';


var serializer;

if (config.environment === 'production') {
    serializer = RESThubSerializer;

} else {
    serializer = DefaultSerializer;
}

export default serializer;

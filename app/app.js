import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import i18nHelper from './helpers/i18n';
//import translations from './i18n/labels';

Ember.Handlebars.registerBoundHelper('t', i18nHelper);

Ember.MODEL_FACTORY_INJECTIONS = true;

//CLDR.defaultLanguage = 'en';
//Ember.I18n.set('translations', Ember.$.extend({},translations.labels.en));
//Ember.I18n.set('bindTranslations', true);
I18n.locale = 'en';

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  currentLangBinding: moment.lang('en')
});

loadInitializers(App, config.modulePrefix);

export default App;

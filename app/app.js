CLDR.defaultLanguage = 'en';
Ember.I18n.set('bindTranslations', true);

window.App = Ember.Application.create({
    currentLangBinding: moment.lang('en')
});
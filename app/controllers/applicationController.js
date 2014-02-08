App.ApplicationController = Ember.ObjectController.extend({
    actions:{
        changeLanguage: function(lang){
            CLDR.defaultLanguage = lang;
            Ember.I18n.set('translations', $.extend({}, App.I18n.labels[lang]));
            App.set('currentLang', moment.lang(lang));
        }
    }
});
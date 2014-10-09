import Ember from 'ember';
import translations from '../i18n/labels';

export default Ember.ObjectController.extend({
    currentLang: CLDR.defaultLanguage,
    actions:{
        changeLanguage: function(lang){
            CLDR.defaultLanguage = lang;
            Ember.I18n.set('translations', $.extend({}, translations.labels[lang]));
            this.set('currentLang', moment.lang(lang));
        }
    }
});

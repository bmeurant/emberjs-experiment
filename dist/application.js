CLDR.defaultLanguage = 'en';
Ember.I18n.set('bindTranslations', true);

window.App = Ember.Application.create({
    currentLangBinding: moment.lang('en')
});
App.ValidatedFormComponent = Ember.Component.extend({
    tagName: 'form',

    acceptSubmit: function () {
        this.clearErrors();
        this.sendAction();
    },

    clearErrors: function () {
        this.$('.form-group').removeClass("has-error");
        this.$('.help-block').text('');
    },

    rejectSubmit: function () {
        this.clearErrors();
        var errors = this.get('model').get('.errors');

        this.$('input').each(function(index, value) {
            if (errors.hasOwnProperty(value.id) && errors[value.id].length > 0) {
                var $formGroup =  $(value).closest('.form-group');
                $formGroup.addClass('has-error');
                $formGroup.find('.help-block').text(errors[value.id][0]);
            }
        });
    },

    submit: function() {
        this.get('model').validate().then(this.acceptSubmit.bind(this), this.rejectSubmit.bind(this));
        return false;
    }

});
App.ApplicationController = Ember.ObjectController.extend({
    actions:{
        changeLanguage: function(lang){
            CLDR.defaultLanguage = lang;
            Ember.I18n.set('translations', $.extend({}, App.I18n.labels[lang]));
            App.set('currentLang', moment.lang(lang));
        }
    }
});
App.SeriesController = Ember.ArrayController.extend({
    content: [],
    filter: "",
    sortAscending: true,

    filteredContent: function() {
        var filter = this.get('filter');

        return this.get('content').filter(function(item, index, enumerable){
            if (item.get('title') == undefined) return true;
            return item.get('title').toLowerCase().match(new RegExp(filter.toLowerCase()));
        }).sort(function(a, b) {
            return this.get('sortAscending') ? (b.get('title') < a.get('title')) : (b.get('title') > a.get('title'));
        }.bind(this));
    }.property('filter', 'sortAscending', 'content.@each'),

    actions: {
        sort: function () {
            this.set('sortAscending', !this.get('sortAscending'));
        }
    }
});
Ember.Handlebars.registerBoundHelper('format', function(format, date, options) {
    var currentContext = (options.contexts && options.contexts[0]) || this;
    var view = options.data.view;
    var bindView = view.get('_childViews.lastObject');
    view.registerObserver(currentContext, 'App.currentLang', bindView, bindView.rerender);

    return moment(date).format(format);
});
App.I18n = {
    labels: {
        'en': {
            'app.title': 'Comic books library',
            'sources.view': 'View sources on github',
            'series': {
                'title': 'Comics series',
                'number': 'Number of series:'
            },
            'album': {
                'volume': 'volume',
                'date': 'date'
            },
            'seriesItem': {
                'scriptwriter': 'Scriptwriter',
                'illustrator': 'Illustrator',
                'publisher': 'Publisher',
                'volumes': 'Volumes'
            }
        },
        'fr': {
            'app.title': 'Bibliothèque de bandes dessinées',
            'sources.view': 'Voir les sources sur github',
            'series': {
                'title': 'Series',
                'number': 'Nombre de series:'
            },
            'album': {
                'volume': 'tome',
                'date': 'date'
            },
            'seriesItem': {
                'scriptwriter': 'Scénariste',
                'illustrator': 'Dessinateur',
                'publisher': 'Editeur',
                'volumes': 'Volumes'
            }
        }
    }
};

Ember.I18n.set('translations', $.extend({}, App.I18n.labels.en));

App.Album = DS.Model.extend({
    title               : DS.attr('string'),
    publicationDate     : DS.attr('date'),
    number              : DS.attr('number'),
    coverName           : DS.attr('string', {defaultValue: 'default.jpg'}),
    series              : DS.belongsTo('seriesItem'),
    coverUrl: function() {
        return '/dist/static/images/albums/covers/' + this.get('coverName');
    }.property('coverName')
});

App.SeriesItem = DS.Model.extend(Ember.Validations.Mixin, {
    title               : DS.attr('string', {defaultValue: 'New Series'}),
    scriptwriter        : DS.attr('string'),
    illustrator         : DS.attr('string'),
    publisher           : DS.attr('string'),
    coverName           : DS.attr('string', {defaultValue: 'default.jpg'}),
    summary             : DS.attr('string'),
    albums              : DS.hasMany('album', {async: true}),
    coverUrl: function() {
        return '/dist/static/images/series/covers/' + this.get('coverName');
    }.property('coverName')
});

App.SeriesItem.reopen({
    validations: {
        title: {
            presence: true,
            length: { minimum: 5 }
        },
        scriptwriter: {
            presence: true,
            length: { minimum: 5 }
        },
        illustrator: {
            presence: true,
            length: { minimum: 5 }
        },
        publisher: {
            presence: true,
            length: { minimum: 5 }
        }
    }
});
App.Router.map(function(){
    this.resource('series', function(){
        this.resource('seriesItem', { path:'/:seriesItem_id' }, function(){
            this.route('edit');
        });
        this.route('create');
    });
});
App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('series');
    }
});
App.SeriesCreateRoute = Ember.Route.extend({
    model: function () {
        return this.store.createRecord('seriesItem');
    },

    renderTemplate: function () {
        this.render('seriesItem.edit', {
            controller: 'seriesCreate'
        });
    },

    actions: {
        submit: function () {
            this.currentModel.save().then(function (model) {
                this.transitionTo('seriesItem', model);
            }.bind(this));
        },

        cancel: function () {
            this.currentModel.rollback();
            this.transitionTo('series');
        },

        willTransition: function () {
            this.currentModel.rollback();
            return true;
        }
    }
});
App.SeriesRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('seriesItem');
    }
});

App.SeriesItemIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('seriesItem');
    },

    actions: {
        edit: function () {
            this.transitionTo('seriesItem.edit');
        }
    }
});

App.SeriesItemEditRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('seriesItem');
    },
    actions: {
        submit: function () {
            this.currentModel.save().then(function () {
                this.transitionTo('seriesItem');
            }.bind(this));
        },

        cancel: function () {
            this.currentModel.rollback();
            this.transitionTo('seriesItem');
        },

        willTransition: function () {
            this.currentModel.rollback();
            return true;
        }
    }
});
import Ember from 'ember';

function formatDate(format, date, options) {
    var currentContext = (options.contexts && options.contexts[0]) || this;
    var view = options.data.view;
    var bindView = view.get('_childViews.lastObject');
    view.registerObserver(currentContext, 'App.currentLang', bindView, bindView.rerender);

    return moment(date).format(format);
}

export {
    formatDate
    };

export default Ember.Handlebars.makeBoundHelper(formatDate);

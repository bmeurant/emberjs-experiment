App.ValidatedFormComponent = Ember.Component.extend({
    tagName: 'form',

    acceptSubmit: function () {
        this.clearErrors();
        this.sendAction();
    },

    clearErrors: function () {
        $('.form-group').removeClass("has-error");
        $('.help-block').text('');
    },

    rejectSubmit: function () {
        this.clearErrors();
        var errors = this.get('model').get('.errors');

        $('input').each(function(index, value) {
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
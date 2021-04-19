odoo.define('china_finance_capital.num_capital', function (require) {
    "use strict";

    var AbstractField = require('web.AbstractField');
    var fieldRegistry = require('web.field_registry');

    var numCapitalField = AbstractField.extend({
        className: 'int_finance_capital',
        tagName: 'span',
        supportedFieldTypes: ['integer'],

        init: function () {
            this._super.apply(this, arguments);
        },

        _renderEdit: function () {
            this.$el.empty();
            this.$el = $("<input type='text'/>");
            this.$el.addClass('o_input');
            this.$el.val(this.value);
        },

        _renderReadonly: function () {
            this.$el.empty();
            this.$el = $("<input type='text' disable/>");
            this.$el.addClass('o_input');
            this.$el.val(this.value);
        },

        _getValue: function () {
            return this.$el.val();
        },
    })

    fieldRegistry.add('num_capital', numCapitalField);

    return {
        numCapitalField: numCapitalField,
    };
})
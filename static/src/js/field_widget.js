odoo.define('china_finance_capital.num_capital', function (require) {
    "use strict";

    var AbstractField = require('web.AbstractField');
    var fieldRegistry = require('web.field_registry');
    var core = require('web.core');
    var qweb = core.qweb;

    var numCapitalField = AbstractField.extend({
        className: 'num_capital',
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
            var table = qweb.render('FieldNumCapital', {widget: this});
            var nums = this.value.toString();

            var tr = $('<tr><tr>');
            for (var i=9 - nums.length; i > 0; i--)
                tr.append($('<td></td>'));
            for (var i=nums.length - 1; i >= 0; i--)
                tr.append($('<td></td>').text(nums[i]));

            table = $(table).append(tr);

            this.$el.append(table);
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
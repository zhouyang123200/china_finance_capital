# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class china_finance_capital(models.Model):
#     _name = 'china_finance_capital.china_finance_capital'
#     _description = 'china_finance_capital.china_finance_capital'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100

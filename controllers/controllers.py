# -*- coding: utf-8 -*-
# from odoo import http


# class ChinaFinanceCapital(http.Controller):
#     @http.route('/china_finance_capital/china_finance_capital/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/china_finance_capital/china_finance_capital/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('china_finance_capital.listing', {
#             'root': '/china_finance_capital/china_finance_capital',
#             'objects': http.request.env['china_finance_capital.china_finance_capital'].search([]),
#         })

#     @http.route('/china_finance_capital/china_finance_capital/objects/<model("china_finance_capital.china_finance_capital"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('china_finance_capital.object', {
#             'object': obj
#         })

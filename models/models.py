from odoo import models, fields, api


class SaleOrder(models.Model):
    _inherit = "sale.order"

    sale_object = fields.Integer(string='销售目标')
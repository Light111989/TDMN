/**
 * Created by Lighter on 8/20/2016.
 */
Ext.define('ETM.view.client.Grid',{
    extend:'Ext.grid.Panel',
    requires:[
        'Ext.grid.filters.Filters',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Check',
        'Ext.grid.column.Date'
    ],
    alias: 'widget.grd-client',
    plugins:'gridfilters',
    selModel:{
        selType:'checkboxmodel'
    },
    totalSelected: 0,
    publishes: {
        totalSelected: true
    },
    listeners: {
        selectionchange: function () {
            this.publishState('totalSelected', this.getSelection().length);
        }
    },
    columns: [{
        dataIndex: 'client_id',
        hidden: true
    }, {
        xtype: 'rownumberer',
        width: 20
    }, {
        text: 'Code',
        dataIndex: 'client_code',
        filter: {
            type: 'string'
        },
        width: 80
    }, {
        text: 'Name',
        dataIndex: 'client_name',
        filter: {
            type: 'string'
        },
        width: 300
    }, {
        text: 'Tax Code',
        dataIndex: 'client_tax_code',
        filter: {
            type: 'string'
        },
        width: 100
    }, {
        text: 'Invoice Address',
        dataIndex: 'client_invoice_addr',
        filter: {
            type: 'string'
        },
        width: 300
    }, {
        text: 'Delivery Address',
        dataIndex: 'client_delivery_addr',
        filter: {
            type: 'string'
        },
        width: 300
    }, {
        text: 'Tel',
        dataIndex: 'client_tel',
        filter: {
            type: 'string'
        },
        width: 115
    }, {
        text: 'Fax',
        dataIndex: 'client_fax',
        filter: {
            type: 'string'
        },
        width: 115
    }]
})
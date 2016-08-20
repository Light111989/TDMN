/**
 * Created by Lighter on 8/20/2016.
 */
Ext.define('ETM.view.product.Form', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.RadioGroup',
        'Ext.form.field.Date',
        'Ext.button.Button',
        'ETM.util.Spin'
    ],
    xtype: 'frm-product',
    title: 'CLIENTS',
    layout: 'fit',
    session: true,
    //controller: 'client',
    //viewModel: 'client',
    dockedItems: [{
        xtype: 'toolbar',
        ui: 'footer',
        layout: {
            pack: 'begin',
            type: 'hbox'
        },
        defaults: {selectOnFocus: true, margin: '0 20 0 0'},
        items: [{
            xtype: 'textfield',
            selectOnFocus: true,
            emptyText: 'Searching Content ...'
        }, {
            xtype: 'button',
            width: 100,
            text: 'Search',
            ico: 'fa fa-search',
            plugins: ['spin']
        }, {
            xtype: 'button',
            width: 100,
            padding: null,
            text: 'Create',
            iconCls: 'fa fa-plus'
        }, {
            xtype: 'button',
            width: 100,
            padding: null,
            text: 'Update',
            bind: {
                disabled: '{canUpdate}'
            },
            iconCls: 'fa fa-edit'
        }, {
            xtype: 'button',
            width: 100,
            padding: null,
            text: 'Delete',
            bind: {
                disabled: '{!grdClient.selection}'
            },
            iconCls: 'fa fa-remove'
        }]
    }],
});
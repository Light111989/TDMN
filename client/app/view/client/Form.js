/**
 * Created by Lighter on 23/08/2016.
 */
/**
 * Created by hemet-pc on 8/3/2016.
 * This is the containing Form for Clients Listing Feature
 */
Ext.define('ETM.view.client.Form', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.RadioGroup',
        'Ext.form.field.Date',
        'Ext.button.Button',
        'ETM.util.Spin',
        'ETM.view.client.Grid',
        'ETM.view.client.Controller',
        'ETM.view.client.Model'
    ],
    xtype: 'frm-client',
    title: 'CLIENTS',
    layout: 'fit',
    session: true,
    controller: 'client',
    viewModel: 'client',
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
            text: translations.search,
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
    // @TODO - ask reference
     items: [{
            xtype: 'grd-client',
            reference: 'grdClient',
            bind: '{clientStore}'
        }]
});
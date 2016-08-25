/**
 * Created by Lighter on 22/08/2016.
 */
Ext.define('ETM.view.client.Window', {
    extend: 'Ext.window.Window',
    requires: [
        'ETM.util.Spin',
        'Ext.layout.container.Table',
        'Ext.layout.container.Column',
        'Ext.form.FieldSet',
        'Ext.form.field.Hidden',
        'Ext.data.validator.Presence',
        'Ext.data.validator.Length',
        'Ext.form.field.Hidden'
    ],
    alias: 'widget.wnd-client',
    resizable: false,
    width: 650, height: 344,
    layout: 'fit',
    modal: true,
    closeAction: 'hide',
    bind: {
        title: '{title}'
    },
    iconCls: 'fa fa-male',
    items: [{
        xtype: 'form',
        trackResetOnLoad: true,
        modelValidation: true,
        buttonAlign: 'center',
        buttons: [{
            width: 100,
            formBind: true,
            ico: 'fa fa-plus',
            plugins: ['spin'],
            bind: {
                text: '{buttonText}'
            },
            text: 'Create'
        }, {
            width: 100,
            iconCls: 'fa fa-times',
            text: 'Cancel'
        }],
        items: [{
            layout: 'hbox',
            //defaults: { margin: '5 0 5 0', labelWidth: 86, selectOnFocus: true},
            items: [{
                defaults: {width: 310, margin: '5 5 5 5', labelWidth: 90, selectOnFocus: true},
                items: [{
                    xtype: 'hiddenfield',
                    name: 'client_id'
                }, {
                    xtype: 'textarea',
                    name: 'client_name',
                    bind: '{curClient.client_name}',
                    fieldLabel: translations.name
                }, {
                    xtype: 'textfield',
                    name: 'client_tel',
                    bind: '{curClient.client_tel}',
                    fieldLabel: 'Tel'
                }, {
                    xtype: 'textfield',
                    name: 'client_email',
                    bind: '{curClient.client_email}',
                    fieldLabel: 'E-Mail'
                }, {
                    xtype: 'textarea',
                    name: 'client_delivery_addr',
                    bind: {
                        value: '{curClient.client_delivery_addr}',
                        disabled: '{chkSameAddr.checked}'
                    },
                    fieldLabel: translations.delivery
                }, {
                    xtype: 'checkbox',
                    reference: 'chkSameAddr',
                    boxLabel: 'Same as Invoice Address',
                }]
            }, {
                defaults: {width: 310, margin: '5 5 5 5', labelWidth: 90, selectOnFocus: true},
                items: [{
                    xtype: 'textarea',
                    name: 'client_invoice_addr',
                    bind: '{curClient.client_invoice_addr}',
                    fieldLabel: translations.invoice
                }, {
                    xtype: 'textfield',
                    name: 'client_tax_code',
                    bind: '{curClient.client_tax_code}',
                    fieldLabel: translations.tax
                }, {
                    xtype: 'textfield',
                    name: 'client_code',
                    bind: '{curClient.client_code}',
                    fieldLabel: translations.code
                }, {
                    xtype: 'textfield',
                    name: 'client_account',
                    bind: '{curClient.client_account}',
                    fieldLabel: translations.account
                }, {
                    xtype: 'textfield',
                    margin: '10 5 5 5',
                    name: 'client_bank',
                    bind: '{curClient.client_bank}',
                    fieldLabel: translations.bank
                }]
            }]
        }]
    }]
});
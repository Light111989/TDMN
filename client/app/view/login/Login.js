/**
 * Created by hiep on 2/22/2016.
 * @prop welcome
 * @prop translations
 */

Ext.define('ETM.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login-dialog',
    requires: [
        'ETM.view.login.LoginController',
        'ETM.view.locale.Translation',
        'ETM.util.Spin'
    ],
    controller: 'login',
    autoShow: true,
    height: 180,
    width: 400,
    layout: {
        type: 'fit'
    },
    iconCls: 'fa fa-key fa-lg',
    title: translations.welcome,
    closeAction: 'hide',
    closable: false,
    draggable: false,
    resizable: false,
    listeners: {
        show: 'onWindowShow'
    },
    items: [
        {
            xtype: 'form',
            reference: 'frmLogin',
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                allowBlank: false,
                mETMarget: 'side',
                selectOnFocus: true,
                anchor: '100%',
                labelWidth: 70,
                listeners: {
                    specialKey: 'onTextFieldSpecialKey'
                }
            },
            items: [{
                name: 'username',
                fieldLabel: translations.user
            }, {
                name: 'password',
                id: 'txtPassword',
                inputType: 'password',
                vtype: 'customPass',
                fieldLabel: translations.password,
                enableKeyEvents: true,
                listeners: {
                    keypress: 'onTextFieldKeyPress',
                    specialKey: 'onTextFieldSpecialKey'
                }
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    xtype: 'translation'
                }, {
                    xtype: 'tbfill'
                }, {
                    xtype: 'button',
                    width: 100,
                    iconCls: 'fa fa-home fa-lg',
                    text: translations.home,
                    listeners: {click: 'onButtonClickHome'}
                }, {
                    xtype: 'button',
                    itemId: 'btnLogin',
                    formBind: true,
                    width: 100,
                    ico: 'fa fa-sign-in fa-lg',
                    plugins: ['spin'],
                    text: translations.login,
                    listeners: {click: 'onButtonClickSubmit'}
                }]
            }]
        }
    ]
});
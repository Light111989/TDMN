/**
 * Created by hiep on 3/22/2016.
 */
Ext.define('ETM.view.main.Header', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'appheader',
    requires: ['ETM.view.locale.Translation'],
    ui: 'footer',
    style: 'padding:0px 0px 0px 4px',
    height: 30,
    items: [{
        xtype: 'component',
        bind: {
            html: '{appHeaderIcon}'
        }
    }, {
        xtype: 'component',
        componentCls: 'app-header-title',
        bind: {
            html: '{appName}'
        }
    }, '->', {
        xtype: 'translation'
    }, '-', {
        xtype: 'button',
        itemId: 'logout',
        width: 100,
        text: translations.logout,
        reference: 'logout',
        iconCls: 'fa fa-sign-out fa-lg buttonIcon',
        listeners: {
            click: 'onLogout'
        }
    }]
});
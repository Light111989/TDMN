/**
 * Created by hiep on 3/22/2016.
 */
Ext.define('ETM.view.main.Footer', {
    extend: 'Ext.container.Container',
    xtype: 'appfooter',
    requires: [
        'Ext.layout.container.Center'
    ],
    cls: 'app-footer',
    height: 30,
    layout: 'center',
    items: [{
        xtype: 'component',
        componentCls: 'app-footer-title',
        bind: {
            html: '{footer}'
        }
    }]
});
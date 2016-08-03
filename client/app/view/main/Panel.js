/**
 * Created by hiep on 3/22/2016.
 */

Ext.define('ETM.view.main.Panel', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
    activeTab: 0,
    header: false,
    title: 'Tabs Panel', //to disable extjs warning in console
    items: [{
        xtype: 'panel',
        closable: false,
        iconCls: 'fa fa-dashboard fa-lg tabIcon',
        bind: {
            title: '{dashboard}'
        }
    }]
});
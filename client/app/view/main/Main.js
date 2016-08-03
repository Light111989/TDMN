/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 */

Ext.define('ETM.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    plugins: 'viewport',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.layout.container.Border',
        'ETM.view.main.Footer',
        'ETM.view.main.Header',
        'ETM.view.main.Panel',
        'ETM.view.main.MainController',
        'ETM.view.main.MainModel',
        'ETM.view.menu.Accordion'
    ],
    layout: 'border',
    controller: 'main',
    viewModel: 'main',
    ui: 'navigation',
    items: [{
        region: 'center',
        xtype: 'mainpanel'
    }, {
        region: 'north',
        xtype: 'appheader'
    }, {
        region: 'south',
        xtype: 'appfooter'
    }, {
        region: 'west',
        itemId: 'mainMenu',
        xtype: 'mainmenu'
    }]
});

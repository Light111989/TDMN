/**
 * Created by hiep on 4/5/2016.
 */

/**
 * @prop translations multi-lang translation file
 */
Ext.define('ETM.view.menu.Accordion', {
    extend: 'Ext.panel.Panel',
    requires: ['Ext.layout.container.Accordion'],
    xtype: 'mainmenu',
    width: 250,
    layout: {
        type: 'accordion',
        align: 'stretch',
        fill: false,
        multi: true
    },
    collapsible: true,
    split: {
        size: 0
    },
    iconCls: 'fa fa-desktop',
    title: translations.menu
});
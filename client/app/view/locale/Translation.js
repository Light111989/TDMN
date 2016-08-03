/**
 * Created by hiep on 3/29/2016.
 * Languages Combo
 */

Ext.define('ETM.view.locale.Translation', {
    extend: 'Ext.button.Split',
    xtype: 'translation',
    requires: ['ETM.view.locale.TranslationController'],
    controller: 'translation',
    width: 135,
    menu: {
        xtype: 'menu',
        defaults: {listeners: {click: 'onMenuItemClick'}},
        items: [{
            type: 'menuitem',
            iconCls: 'en',
            text: 'English'
        }, {
            type: 'menuitem',
            iconCls: 'es',
            text: 'Español'
        }, {
            type: 'menuitem',
            iconCls: 'vn',
            text: 'Việt Nam'
        }]
    }
});

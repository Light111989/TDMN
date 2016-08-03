/**
 * Created by hiep on 3/29/2016.
 */

Ext.define('ETM.view.locale.TranslationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.translation',
    init: function () {
        var menu = this.getView();
        var lang = ETM.util.Util.getCookie('ETMLang') || 'en';
        menu.setIconCls(lang);
        switch (lang) {
            case 'en':
                lang = 'English';
                break;
            case 'es':
                lang = 'Español';
                break;
            case 'vn':
                lang = 'Tiếng Việt';
                break;
            default:
                lang = 'English';
        }
        menu.setText(lang);
    },
    onMenuItemClick: function (item) {
        var menu = this.getView();
        menu.setIconCls(item.iconCls);
        menu.setText(item.text);
        ETM.util.Util.setCookie('ETMLang', item.iconCls, 7);
        window.location.reload();
    }
});
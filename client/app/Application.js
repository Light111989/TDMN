/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

/**
 * Loading Language from Cookies
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function loadLocale() {
    var lang = getCookie('ETMLang') || 'en';
    var extJsFile = Ext.util.Format.format('resources/locale/ext/{0}/ext-locale-{0}.js', lang);
    Ext.Loader.loadScript({url: extJsFile});
}
loadLocale();


/**
 * ETM application declaration
 */
Ext.define('ETM.Application', {
    extend: 'Ext.app.Application',
    requires: [
        'ETM.util.SessionMonitor'
    ],
    name: 'ETM',
    enableQuickTips: true,
    stores: [],
    views: ['login.Login'],
    controllers: ['Menu'],
    glyphFontFamily: 'FontAwesome',
    init: function () {
        //Fix WAI-ARIA button error in console
        Ext.enableAriaButtons = false;
        Ext.enableAriaPanels = false;

        var me = this;
        me.splashscreen = Ext.getBody().mask('Loading application!', 'splashscreen');
        me.splashscreen.addCls('splashscreen');
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },
    launch: function () {
        var me = this;
        var task = new Ext.util.DelayedTask(function () {
            me.splashscreen.fadeOut({
                duration: 500,
                remove: true,
                listeners: {
                    afteranimate: function () {
                        if (authenticated) {
                            ETM.util.SessionMonitor.start();
                            Ext.widget('app-main');
                        }
                        else {
                            Ext.widget('login-dialog');
                        }
                    }
                }
            });
        });
        task.delay(1000, null, null, null);
    }
});

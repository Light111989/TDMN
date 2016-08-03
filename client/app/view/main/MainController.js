/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ETM.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    onLogout: function () {
        ETM.util.SessionMonitor.stop();
        this.getView().destroy();
        window.location = "/logout";
    }
});

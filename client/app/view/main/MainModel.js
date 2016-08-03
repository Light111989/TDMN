/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ETM.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {
        name: 'ETM',
        appName: translations.welcome,
        appHeaderIcon: '<span class="app-header-logo">',
        footer: '<nobr>Elitetech Vietnam - Công Ty Phần Mềm Elitetech Việt Nam - www.elitetech.vn</nobr>',
        dashboard: 'Dashboard'
    }
});
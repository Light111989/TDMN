/**
 * Created by hiep on 4/4/2016.
 * Store to hold menu data
 */

Ext.define('ETM.store.Menu', {
    extend: 'Ext.data.Store',
    requires: ['ETM.util.Util'],
    model: 'ETM.model.menu.Accordion',
    proxy: {
        type: 'ajax',
        url: '/menu',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function (proxy, response) {
                ETM.util.Util.showErrorMsg(response.responseText);
            }
        }
    }
});
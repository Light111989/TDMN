/**
 * Created by Lighter on 20/08/2016.
 */
Ext.define('ETM.view.client.Model', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.client',
    requires: [
        'ETM.model.client.Client',
        //'ETM.model.client.Contact'
    ],
    stores: {
        clientStore: {
            model: 'client',
            session: true,
            autoLoad: true
        },
        // contactStore: {
        //     model: 'contact',
        //     session: true,
        //     autoLoad: false
        // }
    },
    formulas: {
        canUpdate: {
            bind: {
                bindTo: '{grdClient.totalSelected}'
            },
            get: function (totalSelected) {
                return totalSelected != 1
            }
        }
    }
});
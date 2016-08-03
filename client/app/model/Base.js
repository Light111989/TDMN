/**
 * Created by hiep on 4/19/2016.
 * Base Model for most of other Models
 */

Ext.define('ETM.model.Base', {
    extend: 'Ext.data.Model',
    requires: ['ETM.util.Util'],
    schema: {
        namespace: 'ETM.model',
        urlPrefix: '',
        proxy: {
            type: 'ajax',
            api: {
                create: '{prefix}/{entityName:lowercase}/create',
                read: '{prefix}/{entityName:lowercase}/read',
                update: '{prefix}/{entityName:lowercase}/update',
                destroy: '{prefix}/{entityName:lowercase}/destroy'
            },
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json',
                dateFormat: 'd/m/Y',
                writeAllFields: true,
                encode: true,
                rootProperty: 'data',
                allowSingle: false
            },
            listeners: {
                exception: function (p, res) {
                    //ETM.util.Util.showErrorMsg(res.responseText);
                }
            }
        }
    }
});

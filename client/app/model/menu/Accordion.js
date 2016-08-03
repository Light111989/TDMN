/**
 * Created by hiep on 4/4/2016.
 * Parent Menu Model
 */

Ext.define('ETM.model.menu.Accordion', {
    extend: 'Ext.data.Model',
    requires: ['ETM.model.menu.TreeNode'],
    fields: [
        {name: 'id', type: 'int'},
        {name: 'text'},
        {name: 'iconCls'}
    ],
    hasMany: {
        model: 'ETM.model.menu.TreeNode',
        //foreignKey: 'parentId',
        name: 'items'
    }
});
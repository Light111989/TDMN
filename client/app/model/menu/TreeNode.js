/**
 * Created by hiep on 4/4/2016.
 * Children Menu Modeal
 */

Ext.define('ETM.model.menu.TreeNode', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'text'},
        {name: 'iconCls'},
        {name: 'className'},
        {name: 'parentId', mapping: 'menu_id'}
    ]
});

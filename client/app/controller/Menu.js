/**
 * Created by hiep on 4/5/2016.
 * Menu global controller - MVC Style
 */

Ext.define('ETM.controller.Menu', {
    extend: 'Ext.app.Controller',
    requires: [
        'ETM.store.Menu',
        'ETM.view.menu.Tree'
    ],
    init: function () {
        console.log('Initialized Menu Controller! This happens before ' +
            'the Application launch() function is called');
    },
    stores: ['Menu'],
    control: {
        'menutree#mainMenu': {
            itemclick: 'onTreePanelItemClick'
        },
        'mainmenu#mainMenu': {
            render: 'renderDynamicMenu'
        }
    },
    refs: [{
        ref: 'mainPanel',
        selector: 'mainpanel'
    }],
    renderDynamicMenu: function (view) {
        view.body.mask('Loading Menus ... Please Wait ...');
        Ext.suspendLayouts();
        this.getMenuStore().load(function (modules) {
            var menus = [];
            Ext.each(modules, function (moduleRec) {
                var menu = Ext.create('ETM.view.menu.Tree', {
                    //itemId: 'mainMenu',
                    iconCls: moduleRec.get('iconCls'),
                    title: translations[moduleRec.get('text')]
                });
                var treeNodesStore = moduleRec.items();
                var nodes = [];
                for (var i = 0; i < treeNodesStore.getCount(); ++i) {
                    var node = treeNodesStore.getAt(i);
                    nodes.push({
                        leaf: true,
                        text: translations[node.get('text')],
                        glyph: node.get('iconCls'),
                        className: node.get('className'),
                        id: node.get('id')
                    });
                }
                menu.getRootNode().appendChild(nodes);
                menus.push(menu);
            });
            view.add(menus);
            view.body.unmask();
            view.setTitle('Operator: ' + ETM.util.Util.getCookie('username'));
        });
        Ext.resumeLayouts(true);
    },
    onTreePanelItemClick: function (view, record) {
        var mainPanel = this.getMainPanel();
        var newTab = mainPanel.items.findBy(function (tab) {
            return tab.title === record.get('text');
        });
        if (!newTab) {
            newTab = mainPanel.add({
                xtype: record.get('className'),
                closable: true,
                glyph: record.get('glyph') + '@FontAwesome',
                title: record.get('text')
            });
        }
        mainPanel.setActiveTab(newTab);
    }
});
/**
 * Created by hemlk on 5/12/2016.
 */

//Plugins can be added at object declaration
//Mixins can only be added at class definition
Ext.define('ETM.util.Spin', {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.spin',
    init: function (cmp) {
        this.setCmp(cmp);
        cmp.on({
            beforerender: this.setIcon,
            click: this.setSpin,
            scope: this
        });
        cmp.setIcon = this.setIcon.bind(this);
    },
    setIcon: function () {
        var me = this.getCmp();
        me.enable();
        if (me.ico) {
            me.setIconCls(me.ico);
        }
    },
    setSpin: function () {
        var me = this.getCmp();
        me.disable();
        me.setIconCls('fa fa-refresh fa-spin');
    }
});
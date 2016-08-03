/**
 * Created by hemlk on 5/10/2016.
 */

//fix tooltip not showing when mouse over button
Ext.tip.ToolTip.override({
    setTarget: function (target) {
        var me = this,
            t = Ext.get(target),
            tg;

        if (me.target) {
            tg = Ext.get(me.target);

            /*if (Ext.supports.Touch) {
             me.mun(tg, 'tap', me.onTargetOver, me);
             }*/

            // It was inside "if (Ext.supports.Touch) {} else { here }"
            me.mun(tg, {
                mouseover: me.onTargetOver,
                mouseout: me.onTargetOut,
                mousemove: me.onMouseMove,
                scope: me
            });
        }

        me.target = t;

        if (t) {
            /*if (Ext.supports.Touch) {
             me.mon(t, {
             tap: me.onTargetOver,
             scope: me
             });
             }*/

            // It was inside "if (Ext.supports.Touch) { } else { here }"
            me.mon(t, {
                mouseover: me.onTargetOver,
                mouseout: me.onTargetOut,
                mousemove: me.onMouseMove,
                scope: me
            });
        }

        if (me.anchor) {
            me.anchorTarget = me.target;
        }
    }
});
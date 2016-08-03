/**
 * Created by hiep on 4/6/2016.
 */
//remove targetCls is missing" warning!!!
Ext.define('ETM.overrides.TargetClsMissing', {
    override: 'Ext.layout.container.Container',
    notifyOwner: function () {
        this.owner.afterLayout(this);
    }
});
/**
 * Created by hiep on 5/16/2016.
 */

//Fix date picker going off-screen when it's in a scrollable container or having a scrollable siblings
Ext.override(Ext.picker.Date, {
    afterComponentLayout: function (width, height, oldWidth, oldHeight) {
        var field = this.pickerField;
        this.callParent([
            width,
            height,
            oldWidth,
            oldHeight
        ]);
        // Bound list may change size, so realign on layout
        // **if the field is an Ext.form.field.Picker which has alignPicker!**
        if (field && field.alignPicker) {
            field.alignPicker();
        }
    }
});
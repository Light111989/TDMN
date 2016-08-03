/**
 * Created by hiep on 4/7/2016.
 */

Ext.define('ETM.util.Glyphs', {
    singleton: true,
    config: {
        webFont: 'FontAwesome',
        add: 'xf067',
        edit: 'xf040',
        destroy: 'xf1f8',
        save: 'xf00c',
        cancel: 'xf0e2',
        saveAll: 'xf0c7',
        refresh: 'xf021',
        clearFilters: 'xf0b0'
    },
    constructor: function (config) {
        this.initConfig(config);
    },
    getIcon: function (glyph) {
        var me = this;
        var font = me.getWebFont();
        if (typeof me.config[glyph] === 'undefined') {
            return false;
        }
        return me.config[glyph] + '@' + font;
    }
});


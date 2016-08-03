/**
 * Created by hiep on 2/26/2016.
 */
Ext.define('ETM.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    requires: [
        'ETM.view.login.CapsLockTooltip',
        'ETM.util.Util',
        'ETM.util.SessionMonitor'
    ],
    onWindowShow: function (window) {
        window.getEl().setOpacity(0);
        window.getEl().fadeIn({duration: 500});
    },
    onTextFieldSpecialKey: function (field, e) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },
    onTextFieldKeyPress: function (field, e) {
        var me = this, charCode = e.getCharCode();
        if ((e.shiftKey && charCode >= 97 && charCode <= 122) || (!e.shiftKey && charCode >= 65 && charCode <= 90)) {
            if (me.capslockTooltip === undefined) {
                me.capslockTooltip = Ext.widget('capslocktooltip');
            }
            me.capslockTooltip.show();
        } else {
            if (me.capslockTooltip !== undefined) {
                me.capslockTooltip.hide();
            }
        }
    },
    onButtonClickHome: function () {
        window.open('http://elitetech.vn/');
    },
    onButtonClickSubmit: function () {
        var me = this;
        if (me.lookupReference('frmLogin').isValid()) {
            me.doLogin();
        }
    },
    doLogin: function () {
        var me = this,
            form = me.lookupReference('frmLogin');
        me.getView().mask('Authenticating ... Please wait ...');

        form.submit({
            clientValidation: true,
            url: 'login',
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        });
    },
    onLoginFailure: function (form, action) {
        var view = this.getView();
        view.down('button#btnLogin').setIcon();
        view.unmask();
        switch (action.failureType) {
            case Ext.form.action.Action.CLIENT_INVALID:
                ETM.util.Util.showErrorMsg('Form fields may not be submitted with invalid values');
                break;
            case Ext.form.action.Action.CONNECT_FAILURE:
                ETM.util.Util.showErrorMsg(action.response.responseText);
                break;
            case Ext.form.action.Action.SERVER_INVALID:
                var result = ETM.util.Util.decodeJSON(action.response.responseText);
                ETM.util.Util.showErrorMsg(result.msg);
                break;
        }
    },
    onLoginSuccess: function (frm, action) {
        var me = this;
        me.getView().unmask();
        me.getView().close();
        ETM.util.Util.setCookie('username', Ext.JSON.decode(action.response.responseText).username, 7);
        Ext.create('ETM.view.main.Main');
        ETM.util.SessionMonitor.start();
    }
});
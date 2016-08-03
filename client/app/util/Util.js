/**
 * Created by hemlk on 3/2/2016.
 * General Ultility functions used through out the App
 */

Ext.define('ETM.util.Util', {
    requires: ['Ext.window.Toast'],
    statics: {
        required: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
        decodeJSON: function (text) {
            var result = Ext.JSON.decode(text, true);
            if (!result) {
                result = {};
                result.success = false;
                result.msg = text;
            }
            return result;
        },
        showErrorMsg: function (text) {
            Ext.Msg.show({
                title: 'Error!',
                msg: text,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        },
        setCookie: function (cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        },
        getCookie: function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return undefined;
        },
        showToast: function (text) {
            Ext.toast({
                html: text,
                closable: false,
                align: 't',
                slideInDuration: 400,
                minWidth: 40
            });
        },
        handleFormFailure: function (action) {
            var me = this;
            switch (action.failureType) {
                case Ext.form.action.Action.CLIENT_INVALID:
                    me.showErrorMsg('Form fields may not be submitted with invalid values');
                    break;
                case Ext.form.action.Action.CONNECT_FAILURE:
                    me.showErrorMsg(action.response.responseText);
                    break;
                case Ext.form.action.Action.SERVER_INVALID:
                    var result = ETM.util.Util.decodeJSON(action.response.responseText);
                    me.showErrorMsg(result.msg.code || result.msg);
                    break;
            }
        }
    }
});
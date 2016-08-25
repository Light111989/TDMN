/**
 * View Controller containing all controler for Client forms
 */
Ext.define('ETM.view.client.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.client',
    requires: [
        'ETM.view.client.Window'
    ],
    init: function () {
        //Controller initializing code goes here
    },
    control: {
        /**
         * ===========================================================UPDATE
         */
        'window button[text="Update"]': {
            click: 'onWndBtnUpdateClick'
        },
        /**
         * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++CREATE
         */
        'frm-client>toolbar>button[text="Create"]': {
            click: 'onFrmBtnCreateClick'
        },
        /**
         * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ CloesWnd
         */
        'grid': {
            rowdblclick: 'onGrdRowDblClick'
        },
        'window form button[text="Cancel"]': {
            click: 'onWndBtnCancelClick'
        },
    },
    onWndBtnCancelClick: function () {
        var me = this;
        me.wndClient.hide();
        if (me.curRec) {
            me.curRec.reject();
        }
    },
    onGrdRowDblClick: function (t, record) {
        this.showWndClient(record);
    },
    onFrmBtnCreateClick: function () {

        this.showWndClient(null);
    },
    showWndClient: function (rec) {
        var me = this;
        var view = me.getView();
        me.curRec = rec;
        if (!me.wndClient) {
            me.wndClient = view.add({
                xtype: 'wnd-client',
                viewModel: {
                    data: {
                        curRec: rec
                    },
                    formulas: {
                        title: {
                            bind: {
                                bindTo: '{curRec}'
                            },
                            get: function (client) {
                                return (client ? client.get('client_name') : 'Creating a new Client ...');
                            }
                        },
                        buttonText: {
                            bind: {
                                bindTo: '{curRec}'
                            },
                            get: function (client) {
                                return (client ? 'Update' : 'Create');
                            }
                        },
                        curClient: {
                            bind: {
                                bindTo: '{curRec}'
                            },
                            get: function (client) {
                                return client || Ext.create('ETM.model.client.Client', {
                                        create: true
                                    });
                            }
                        },
                        selectedContact: {
                            bind: {
                                bindTo: '{grdContact.selection}',
                                deep: true
                            },
                            get: function (contact) {
                                return contact;
                            }
                        }
                    }
                }
            });
        }
        if (me.wndClient.isHidden()) {
            //load Client Info.
            me.wndClient.getViewModel().set('curRec', rec || Ext.create('ETM.model.client.Client', {
                    create: true
                }));
            me.wndClient.show();
        }
    },

    /**
     * ===============================update
     */
    /*    onWndBtnCreateClick: function (btn) {
     var me = this;
     var curClient = me.wndClient.getViewModel().getData().curClient;
     var wndFrmClient = me.getView().down('window form');
     if (wndFrmClient.isValid()) {
     curClient.save({
     success: function () {
     me.onWndBtnUpdateClick(btn, null, null, true);
     }
     });
     } else {
     btn.setIcon();
     }
     },*/
/*    closeWndClient: function (isClientCreated, btn) {
        var me = this;
        me.onWndBtnCancelClick();
        me.onBtnSearchClick(me.getView().down('button[text="Search"]'));
        ETM.util.Util.showToast('<span style="color:green;font-weight:bold">Successfully ' + (isClientCreated ? 'created' : 'updated' ) + '!</span>');
        btn.setIcon();
    },
    isStoreValid: function (st) {
        var isValid = true;
        st.each(function (rec) {
            if (!rec.isValid()) {
                isValid = false;
                return false;
            }
        });
        return isValid;
    },
    isStoreChanged: function (st) {
        return (st.getModifiedRecords().length != 0 || st.getNewRecords().length != 0 || st.getRemovedRecords().length != 0);
    },*/
        syncStore: function (btn, isClientCreated) {
            var me = this;
            var clientStore = me.getViewModel().getStore('clientStore');
            if (me.isStoreValid(clientStore)) {
                if (me.isStoreChanged(clientStore)) {
                    var curClient = me.wndClient.getViewModel().getData().curClient;
                    clientStore.each(function (contact) {
                        contact.set('client_id', curClient.get('client_id'))
                    });
                    clientStore.sync({
                        callback: function () {
                            me.closeWndClient(isClientCreated, btn);
                        }
                    });
                } else {
                    if (me.nothingChanged && !isClientCreated) {
                        ETM.util.Util.showToast('<span style="color:darkgoldenrod;font-weight:bold">There are <b>no</b> changes!</span>');
                        btn.setIcon();
                    }
                    else {
                        me.closeWndClient(isClientCreated, btn);
                    }
                }
            } else {
                ETM.util.Util.showToast('<span style="color:red;font-weight:bold">Invalid contact information!</span>');
                btn.setIcon();
            }
    },
    onWndBtnUpdateClick: function (btn, e, eOpts, isClientCreated) {
        var me = this;
        var curClient = me.wndClient.getViewModel().getData().curClient;
        var wndFrmClient = me.getView().down('window form');
        if (wndFrmClient.isValid()) {
            if (!Ext.Object.isEmpty(curClient.getChanges())) {
                me.nothingChanged = false;
                curClient.save({
                    callback: function () {
                        me.syncStore(btn, isClientCreated);
                    }
                });
            } else {
                me.nothingChanged = true;
                me.syncStore(btn, isClientCreated);
            }
        } else {
            btn.setIcon();
        }
    },
});
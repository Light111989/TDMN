/**
 * View Controller containing all controler for Client forms
 */
Ext.define('ETM.view.client.Controller',{
    extend:'Ext.app.ViewController',
    alias:'controller.client',
    requires:[

    ],
    init: function () {
        //Controller initializing code goes here
    },
    control: {
        /**
         * CREATE ////////////////////////////////////////
         */
        'frm-client>toolbar>button[text="Create"]': {
            click: 'onFrmBtnCreateClick'
        },
        'window form button[text="Create"]': {
            click: 'onWndBtnCreateClick'
        },

        /**
         * READ //////////////////////////////////////////
         */
        'frm-client>toolbar>button[text="Search"]': {
            click: 'onBtnSearchClick'
        },

        /**
         * UPDATE ////////////////////////////////////////
         */
        'frm-client>toolbar>button[text="Update"]': {
            click: 'onFrmBtnUpdateClick'
        },
        'window button[text="Update"]': {
            click: 'onWndBtnUpdateClick'
        },
        'grid': {
            rowdblclick: 'onGrdRowDblClick'
        },

        /**
         * DESTROY ///////////////////////////////////////
         */
        'toolbar button[text="Delete"]': {
            click: 'onBtnDeleteClick'
        },

        /**
         * Closing/Destroying Client window popup
         */
        'window form button[text="Cancel"]': {
            click: 'onWndBtnCancelClick'
        },
        'window': {
            close: 'onWndBtnCancelClick'
        },
        'frm-client>toolbar>button[text="Clear Filters"]': {
            click: 'onClearGridFiltersClick'
        },
        /**
         * @author : Phong (12/08/2016)
         */
        'window form textfield[name="client_delivery_addr"]': {
            disable: 'onWndClientDeliveryAddrDisable'
        },
        'window form textfield[name="client_invoice_addr"]': {
            change: 'onWndClientInvoiceAddrChange'
        },
        'grd-contact button[text="Add"]': {
            click: 'onGrdContactAddButtonClick'
        },
        'grd-contact button[text="Remove"]': {
            click: 'onGrdContactRemoveButtonClick'
        }
    },
})
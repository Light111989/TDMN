/**
 * Created by Lighter on 20/08/2016.
 */
Ext.define('ETM.model.client.Client',{
    extend: 'ETM.model.Base',
    requies:[
        'Ext.data.validator.Presence',
        'Ext.data.validator.Length'
    ],
    entityName:'client',
    idProperty:'client_id',
    fields:[
        {name: 'client_id', type: 'int'},
        {name: 'client_code', type: 'string'},
        'client_name',
        {name: 'client_tax_code', type: 'string'},
        'client_invoice_addr',
        'client_delivery_addr',
        'client_tel',
        'client_email',
        'client_account',
        'client_bank',
        'client_note'
    ],
    validators: {
        client_code: [
            {type: 'presence', message: 'This field is mandatory'},
            {type: 'length', min: 2, max: 10}
        ],
        client_name: [
            {type: 'presence', message: 'This field is mandatory'},
            {type: 'length', min: 2, max: 100}
        ],
        client_tax_code: [
            {type: 'length', max: 15}
        ],
        client_invoice_addr: [
            {type: 'length', max: 150}
        ],
        client_delivery_addr: [
            {type: 'length', max: 150}
        ],
        client_tel: [
            {type: 'length', max: 20}
        ],
        client_email: [
            {type: 'format', matcher: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: "Wrong Email Format"},
            {type: 'length', min: 0, max: 100}
        ],
        client_account: [
            {type: 'length', max: 30}
        ],
        client_bank: [
            {type: 'length', max: 100}
        ],
        client_note: [
            {type: 'length', max: 500}
        ]
    }
});
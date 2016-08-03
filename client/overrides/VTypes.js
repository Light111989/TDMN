/**
 * Created by hemet-pc on 6/3/2016.
 */

Ext.define('ETM.overrides.VTypes', {
    override: 'Ext.form.field.VTypes',

    //Time
    time: function (value) {
        return this.timeRe.test(value);
    },
    timeRe: /^([1-9]|1[0-9]):([0-5][0-9])(\s[a|p]m)$/i,
    timeText: 'Not a valid time.  Must be in the format "12:34 PM".',
    timeMask: /[\d\s:amp]/i,

    //Password
    customPass: function (val) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[AZ])(?=.*[@#$%]).{6,20})/.test(val);
    },
    customPassText: 'Not a valid password. Length must be at least 6 characters' +
    ' and maximum of 20. Password must contain on digit, one letter lowercase,' +
    ' one letter uppercase, one special symbol @#$% and between 6 and 20 characters.',

    //IP Address
    IPAddress: function (value) {
        return this.IPAddressRe.test(value);
    },
    IPAddressRe: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    IPAddressText: 'Must be a numeric IP address',
    IPAddressMask: /[\d\.]/i
});
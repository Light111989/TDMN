/**
 * Created by hiep on 3/3/2016.
 * @prop capsLockTitle
 * @prop capsLockMsg1
 * @prop capsLockMsg2
 * @prop capsLockMsg3
 * @prop capsLockMsg4
 */

Ext.define('ETM.view.login.CapsLockTooltip', {
    extend: 'Ext.tip.QuickTip',
    xtype: 'capslocktooltip',
    target: 'txtPassword',
    anchor: 'top',
    anchorOffset: 0,
    width: 300,
    dismissDelay: 0,
    autoHide: false,
    title: '<div class="fa fa-exclamation-triangle"> ' + translations.capsLockTitle + '</div>',
    html: '<div> ' + translations.capsLockMsg1 + translations.capsLockMsg2 + '</div><br/>' +
    '<div>' + translations.capsLockMsg3 + translations.capsLockMsg4 + '</div>'
});
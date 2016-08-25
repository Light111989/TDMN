/**
 * Created by Phillipet on 8/13/2016.
 */

module.exports = {
    /**
     *
     * @param spInfo { name, params, data }
     * @param db (from router object)
     * @param callback(err,data)
     */
    callSp: function (spInfo, db, callback) {
        var parameters = [];
        var strNumberParam = [];
        spInfo.params.forEach(function (param) {
            parameters.push(spInfo.data[param]);
            strNumberParam.push('?');
        });
        db.query('call ' + spInfo.name + '(' + strNumberParam.join(',') + ')', parameters, function (err, data) {
            callback(err, data);
        });
    },
    /**
     *  ==> use for insert multi record by json string
     * @param spInfo
     * @param db
     * @param callback
     * Example :
     *      var data = JSON.parse(req.body.data);
     data.forEach(function(o){
                delete o['contact_id'];
            });
     util.callSpJson({
                name: 'sp_contacts_create_json',
               JSON.stringify(data)
            }, db, function(err, data) {
                res.send({success: true, msg: data});
            });
     */
    callSpJson: function (spInfo, db, callback) {
        db.query('call ' + spInfo.name + '(?)', JSON.stringify(spInfo.data), function (err, data) {
            callback(err, data);
        });
    },
    /**
     * ====================== DELETE RECORD Template function ======================
     * @param fieldName id of table
     * @param spName store procedure delete
     * @param req request variable in router object
     * @param res response variable in router object
     * @param db variable in router object
     * Example =>  deleteRecord('client_id','sp_clients_delete',req,res,db);
     */
    deleteRecords: function (fieldName, spName, req, res, db) {
        var jsonObj = JSON.parse(req.body.data);
        var ids = [];
        jsonObj.forEach(function (o) {
            ids.push(o[fieldName]);
        });
        var strIds = ids.join(',');
        if (strIds.length < 50) {
            db.query('call ' + spName + '(?)', strIds, function (err) {
                if (err) {
                    res.send({success: false, msg: err.message});
                    return;
                }
                res.send({success: true, msg: 'success'});
            });
        }
        else {
            res.send({success: false, msg: 'You can not delete so much records'});
        }
    }
};
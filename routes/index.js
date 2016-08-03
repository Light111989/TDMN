/**
 * Initial Setup
 */
var express = require('express');
var moment = require('moment');
var router = express.Router();
var async = require('async');

/**
 * File-Upload declaration
 */
/*var multer = require('multer');
 var storage = multer.diskStorage({
 destination: function (req, file, cb) {
 cb(null, './client/resources/images/app/user-profile/');
 },
 filename: function (req, file, cb) {
 cb(null, req.body.passport + '.' + file.originalname.split('.')[1]);
 }
 });
 var upload = multer({storage: storage});*/


/**
 * Passport Authenticatoin middle-ware
 */
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.render('index', {
        authenticated: false,
        lang: req.cookies['ETMLang'] || 'en'
    });
};

/**
 * Core-Routing
 * @prop post express's router post() function
 */
module.exports = function (passport, db) {
    router.post('/login', function (req, res, next) {
        passport.authenticate('local', function (err, user) {
            if (err) {
                res.send({success: false, msg: err});
                return;
            }
            if (!user) {
                res.send({success: false, msg: 'Username not existed!'});
                return;
            }
            req.logIn(user, function (err) {
                if (err) {
                    return;
                }
                res.send({success: true, msg: 'Logged In!', username: req.user[0].username});
            });
        })(req, res, next);
    });
    router.get('/', isAuthenticated, function (req, res) {
        res.render('index', {
            authenticated: true,
            lang: req.cookies['ETMLang'] || 'en'
        });
    });
    router.get('/logout', isAuthenticated, function (req, res) {
        req.logout();
        res.redirect('/');
    });

    /**
     * @prop menu_id
     * @prop passport.user
     */
    router.get('/menu', isAuthenticated, function (req, res) {
        db.query('SELECT m.* FROM menus m ' +
            'JOIN permissions p on p.menu_id=m.id ' +
            'JOIN users u ON u.groups_id=p.groups_id ' +
            'WHERE u.username=?;', req.session.passport.user[0].username,
            function (err, menus) {
                for (var i = menus.length - 1; i >= 0; --i) {
                    if (!menus[i].menu_id) {
                        menus[i].items = menus.filter(function (item) {
                            return item.menu_id == menus[i].id;
                        });
                    }
                }
                for (var j = menus.length - 1; j >= 0; --j) {
                    if (menus[j].menu_id) {
                        menus.splice(j, 1);
                    }
                }
                res.send({data: menus});
            });
    });
    router.get('/allmenus', isAuthenticated, function (req, res) {
        db.query('SELECT * FROM menus',
            function (err, menus) {
                for (var i = menus.length - 1; i >= 0; --i) {
                    if (!menus[i].menu_id) {
                        menus[i].items = menus.filter(function (item) {
                            return item.menu_id == menus[i].id;
                        });
                    }
                }
                for (var j = menus.length - 1; j >= 0; --i) {
                    if (menus[j].menu_id) {
                        menus.splice(j, 1);
                    }
                }
                res.send({data: menus});
            });
    });

    return router;
};

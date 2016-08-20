/**
 * Initial Setup
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var app = express();


/**
 * View Engine Setup
 */
app.use(compress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/**
 * Switching between DEV/LIVE/TEST version
 */
app.use(express.static(path.join(__dirname, 'client'), {index: false}));
//app.use(express.static(path.join(__dirname, 'client/build/production/Packt'), {index: false}));
//app.use(express.static(path.join(__dirname, 'client/build/testing/Packt'), {index: false}));


/**
 * Passport authentication and DB setup
 */
var mysql = require('mysql');
var db = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'tdmdb'
});
passport.use(new LocalStrategy(
    function (username, password, done) {
        var data = [
            username,
            password
        ];
        db.query('SELECT * FROM users WHERE username like ?', data[0], function (err, user) {
            if (err == null) {
                if (user.length > 0) {
                    if (user[0].password == data[1]) {
                        return done(null, user);
                    } else {
                        return done('Incorrect password.');
                    }
                }
                else {
                    return done('Incorrect username.');
                }
            }
            return done(err);
        });
    }
));

//serialize User to Session
passport.serializeUser(function (user, done) {
    done(null, user);
});

//deserialize from Session to get User to check authentication status for every new request
//done(err,id) -> means authentication failed
passport.deserializeUser(function (user, done) {
    done(null, user);
});
app.use(session({
    secret: 'lollipop.et',
    resave: false,
    saveUninitialized: true,
    cookie: {httpOnly: true, maxAge: 365 * 24 * 60 * 60 * 1000}
}));
app.use(passport.initialize());
app.use(passport.session());


/**
 * Server-side Routing
 */
var index = require('./routes/index')(passport, db);
app.use('/', index);


/**
 * Errors handling
 */
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

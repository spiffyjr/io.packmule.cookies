var exec = require('cordova/exec');

var Cookies = function() {};

Cookies.get = function(url, callback) {
    exec(function(cookie) {
        callback(cookie);
    }, function(result) {
        console.log('error: ' + result);
    }, "Cookies", "get", [url]);
};

Cookies.set = function(url, value) {
    exec(null, null, "Cookies", "set", [url, value]);
};

module.exports = Cookies;

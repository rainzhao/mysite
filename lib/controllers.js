'use strict';

var fs = require('fs');
var path = require('path');

var addController = function addController(dir, router) {
    var filePath = path.join(__dirname, '/' + dir + '/');
    var files = fs.readdirSync(filePath);

    var js_files = files.filter(function (f) {
        return f.endsWith('.js');
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = js_files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var f = _step.value;

            var mapping = require(__dirname + ('/' + dir + '/') + f);
            addMapping(mapping, router);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

var addMapping = function addMapping(urlparams, router) {
    for (var url in urlparams) {
        if (Object.prototype.hasOwnProperty.call(urlparams, url)) {
            if (url.startsWith("GET /")) {
                var _path = url.substring(4);
                router.get(_path, urlparams[url]);
                console.log(_path);
            } else if (url.startsWith("POST /")) {
                var _path2 = url.substring(5);
                router.post(_path2, urlparams[url]);
                console.log(_path2);
            } else {
                console.log('\u8BF7\u6C42\u7684' + url + ' url\u4E0D\u5408\u6CD5');
            }
        }
    }
};

module.exports = function (dir) {
    var controller_dir = dir || 'controllers',
        router = require('koa-router')();
    addController(controller_dir, router);
    return router.routes();
};
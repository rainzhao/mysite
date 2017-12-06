'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var essayModel = require('../models/essayModel');

var _require = require('../constants/urlparam'),
    essayadd = _require.essayadd;

var saveEssay = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
        var mes, res, saveData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        mes = ctx.request.body;
                        res = {};

                        if (!(mes && mes.content && mes.title)) {
                            _context.next = 9;
                            break;
                        }

                        saveData = new essayModel(mes);
                        _context.next = 6;
                        return saveData.save();

                    case 6:
                        res = _context.sent;
                        _context.next = 10;
                        break;

                    case 9:
                        res = {
                            resultCode: 1001,
                            resultMessage: "参数校验失败"
                        };

                    case 10:

                        ctx.body = _extends({}, res);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function saveEssay(_x) {
        return _ref.apply(this, arguments);
    };
}();

module.exports = _defineProperty({}, essayadd, saveEssay);
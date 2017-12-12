'use strict';

var _module$exports;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var essayModel = require('../models/essayModel');

var _require = require("../constants/urlparam"),
    essay = _require.essay;

var _require2 = require('../constants/urlparam'),
    essayget = _require2.essayget;

var essayList = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return essayModel.find({});

                    case 2:
                        res = _context.sent;

                        ctx.body = _extends({}, res);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function essayList(_x) {
        return _ref.apply(this, arguments);
    };
}();

var essayOne = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx) {
        var mes, res, selectId;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        mes = ctx.request.body;
                        res = {};

                        if (!(mes && mes.id)) {
                            _context2.next = 9;
                            break;
                        }

                        selectId = mes.id;
                        _context2.next = 6;
                        return essayModel.find({ _id: selectId });

                    case 6:
                        res = _context2.sent;
                        _context2.next = 10;
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
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function essayOne(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

module.exports = (_module$exports = {}, _defineProperty(_module$exports, essay, essayList), _defineProperty(_module$exports, essayget, essayOne), _module$exports);
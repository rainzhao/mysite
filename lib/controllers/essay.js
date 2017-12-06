"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//const essayModel = require('../models/essayModel');

var _require = require("../constants/urlparam"),
    essay = _require.essay;

var essayList = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
        var aa;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:

                        //const oneData = {title: 'qqqqqqq', content: 'qweerrtgsdfds'};

                        // const insert = await essayModel.insertMany(data, (error, docs) => {
                        //     console.log(docs);
                        // });

                        //const aaa = new essayModel(oneData);

                        //const res = await aaa.save();
                        aa = ctx.request.body;

                        ctx.response.type = "application/json";
                        ctx.response.body = aa;
                        // ctx.body = {
                        //     insert
                        // }

                    case 3:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function essayList(_x) {
        return _ref.apply(this, arguments);
    };
}();

module.exports = _defineProperty({}, essay, essayList);
"use strict";

var mongoose = require('mongoose');

var connect = function connect(url, conf) {
    var db = mongoose.connect(url, conf);
    db.on("error", function (error) {
        console.log("数据库连接失败：" + error);
    });

    db.on("open", function () {
        console.log("数据库连成功");
    });
};

module.exports = {
    connect: connect
};
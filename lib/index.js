"use strict";

require('babel-polyfill');
var Koa = require("koa");
// const router = require("koa-router")();
var logger = require("koa-logger");
var bodyParser = require("koa-bodyparser");
var mongoose = require("mongoose");
var config = require("./config/config");
var common = require('./common/connectdb');
var app = module.exports = new Koa();
var cors = require('koa-cors');
var addController = require("./controllers");

app.use(cors());
app.use(logger());
app.use(bodyParser({
    onerror: function onerror(err, ctx) {
        ctx.throw('body parse error', 422);
    }
}));

mongoose.promise = global.promise;

common.connect(config.database, config.mongoSettings);

app.use(addController());

//add router middleware
// app.use(router.routes());

app.listen(3000, function () {
    console.log("listen on 3000...");
});
const Koa = require("koa");
const router = require("koa-router")();
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");
const config = require("./config/config");
const app = module.exports = new Koa();
const addController = require("./controllers");


app.use(logger());
app.use(bodyParser());

mongoose.Promise = global.Promise;
mongoose.createConnection(config.database);

app.use(addController());

//add router middleware
app.use(router.routes());

app.listen(3000, () => {
    console.log("listen on 3000...");
});
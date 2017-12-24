require('babel-polyfill');
const Koa = require("koa");
// const router = require("koa-router")();
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");
const config = require("./config/config");
const common = require('./common/connectdb');
const app = module.exports = new Koa();
const cors = require('koa-cors');
const serve = require("koa-static");

const addController = require("./controllers");

app.use(serve(__dirname+ "../../dist/",{ extensions: ['html']}));
app.use(cors());
app.use(logger());
app.use(bodyParser({
    onerror: (err, ctx) => {
        ctx.throw('body parse error', 422);
    }
}));

mongoose.promise = global.promise;

common.connect(config.database, config.mongoSettings);

app.use(addController());


//add router middleware
// app.use(router.routes());

app.listen(3000, () => {
    console.log("listen on 3000...");
});
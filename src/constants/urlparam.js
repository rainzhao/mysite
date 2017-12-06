
const define = require("../common/defineConstant");

define(exports, "index", "GET /index");
define(exports, "error", "GET /");
define(exports, "essay", "POST /essay");
define(exports, "essayadd", "POST /essay/save");

module.exports = exports;
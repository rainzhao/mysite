"use strict";

var define = require("../common/defineConstant");

define(exports, "index", "GET /index");
define(exports, "error", "GET /");
define(exports, "essay", "GET /essay");
define(exports, "essayadd", "POST /essay/save");

module.exports = exports;
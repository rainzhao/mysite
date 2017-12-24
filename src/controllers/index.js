const fs = require('fs');
const {index} = require("../constants/urlparam");
const path = require('path');
const fn_index = async (ctx) => {
    const indexUrl = path.resolve(__dirname + './../../dist/index.html')

    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream(indexUrl);

};

module.exports = {
    [index]: fn_index
};


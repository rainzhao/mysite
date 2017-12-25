const fs = require('fs');
const {index} = require("../constants/urlparam");
const path = require('path');
const fn_index = async (ctx) => {
    const indexUrl = path.resolve(__dirname + './../../dist/index.html')
    console.log(indexUrl)
    ctx.response.type = 'html';
    ctx.response.body = await fs.createReadStream(indexUrl);

};

module.exports = {
    [index]: fn_index
};

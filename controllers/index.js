
const {index} = require("../constants/urlparam");

const fn_index = async (ctx) => {
    ctx.response.body = "hahahah";
    return 123;
};

module.exports = {
    [index]: fn_index
};


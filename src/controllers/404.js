const {error} = require('../constants/urlparam');

let dealUnknown = async (ctx) => {
    ctx.response.body = "404";
};

module.exports = {
    [error]: dealUnknown
};
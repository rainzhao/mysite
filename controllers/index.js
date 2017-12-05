
const {index} = require("../constants/urlparam");

const fn_index = async (ctx) => {

    const mes = {
        name: "rainzhao",
        age: 22
    };

    ctx.response.type = "application/json";
    ctx.response.body = mes;

};

module.exports = {
    [index]: fn_index
};


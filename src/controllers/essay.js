//const essayModel = require('../models/essayModel');

const {essay} = require("../constants/urlparam");

let essayList = async (ctx) => {

    //const oneData = {title: 'qqqqqqq', content: 'qweerrtgsdfds'};

    // const insert = await essayModel.insertMany(data, (error, docs) => {
    //     console.log(docs);
    // });

    //const aaa = new essayModel(oneData);

    //const res = await aaa.save();
    let aa = ctx.request.body;
    ctx.response.type = "application/json";
    ctx.response.body = aa;
    // ctx.body = {
    //     insert
    // }

};

module.exports = {
    [essay]: essayList
};
const essayModel = require('../models/essayModel');

const {essay} = require("../constants/urlparam");

let essayList = async (ctx,next) => {
    console.log(21313123123123)
    await next();
    console.log(ctx);
    const oneData = {title: 'qqqqqqq', content: 'qweerrtgsdfds'};

    // const insert = await essayModel.insertMany(data, (error, docs) => {
    //     console.log(docs);
    // });

    //const aaa = new essayModel(oneData);

    //const res = await aaa.save();

    ctx.body = {
        oneData
    }

    return next;
    // ctx.body = {
    //     insert
    // }

};

module.exports = {
    [essay]: essayList
};
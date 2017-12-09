const essayModel = require('../models/essayModel');

const {essay} = require("../constants/urlparam");

let essayList = async (ctx) => {

    //const oneData = {title: 'qqqqqqq', content: 'qweerrtgsdfds'};
    // const insert = await essayModel.insertMany(data, (error, docs) => {
    //     console.log(docs);
    // });
    
    const res = await essayModel.find({});

    ctx.body = {
        ...res
    }
    //const res = await aaa.save();

    // ctx.body = {
    //     insert
    // }

};

module.exports = {
    [essay]: essayList
};
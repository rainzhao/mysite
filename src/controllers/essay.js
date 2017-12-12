const essayModel = require('../models/essayModel');

const {essay} = require("../constants/urlparam");
const {essayget} = require('../constants/urlparam');

let essayList = async (ctx) => {
    //const oneData = {title: 'qqqqqqq', content: 'qweerrtgsdfds'};
    // const insert = await essayModel.insertMany(data, (error, docs) => {
    //     console.log(docs);
    // });
    const res = await essayModel.find({});
    ctx.body = {
        ...res
    }
};

let essayOne = async (ctx) => {
    let mes = ctx.request.body;
    let res = {};
    if(mes && mes.id){
        let selectId = mes.id;
        res = await essayModel.find({_id: selectId});
    }else{
        res = {
            resultCode: 1001,
            resultMessage: "参数校验失败"
        }
    }
    ctx.body = {
        ...res
    }
}

module.exports = {
    [essay]: essayList,
    [essayget]: essayOne
};
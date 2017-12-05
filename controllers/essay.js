const essayModel = require('../models/essayModel');

const {essay} = require("../constants/urlparam");

let essayList = async (ctx) => {
    let data = [{
        title: '111111',
        content: 'neineineienie'
    },{
        title: '2222',
        content: 'neineineienie'
    },{
        title: '3333',
        content: 'neineineienie'
    },{
        title: '4444',
        content: 'neineineienie'
    }];

    //const oneData = {title: 'qqqqqqq', content: 'qweerrtgsdfds'};

    const insert = await essayModel.insertMany(data, (error, docs) => {
        console.log(docs);
    });

    //const aaa = new essayModel(oneData);

    //const res = await aaa.save();

    ctx.body = {
        insert
    }

};

module.exports = {
    [essay]: essayList
};
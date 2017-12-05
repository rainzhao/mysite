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

    const oneData = {title: 'qqqqqqq', content: 'qweerrtgsdfds'};

    /*const insert = essayModel.insertMany(data, (error, docs) => {
        console.log(docs);
    });*/

    const aaa = new essayModel(oneData);

    await aaa.save((err) => {
        debugger
    }).then(res => {
        debugger
    }).catch(function(err){
        console.log(err);
        console.log(213123);
        ctx.body = oneData
    });

};

module.exports = {
    [essay]: essayList
};
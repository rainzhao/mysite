const essayModel = require('../models/essayModel');
const {essayadd} = require('../constants/urlparam');

const saveEssay = async (ctx) => {
    let mes = ctx.request.body;
    let res = {};
    if(mes && mes.content && mes.title){
        let saveData = new essayModel(mes);
        res = await saveData.save();
    }else{
        res = {
            resultCode: 1001,
            resultMessage: "参数校验失败"
        }
    }

    ctx.body = {
        ...res
    }
};

module.exports = {
    [essayadd]: saveEssay
};
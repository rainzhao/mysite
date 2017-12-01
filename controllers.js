
const fs = require("fs");

let addController = (dir,router) => {
    let files = fs.readdirSync(__dirname + `/${dir}/`);

    let js_files = files.filter((f) => {
        return f.endsWith('.js');
    });
    for(let f of js_files){
        let mapping = require(__dirname + `/${dir}/` + f);
        addMapping(mapping,router);
    }
};

let addMapping = (urlparams,router) => {
    for(let url in urlparams){
        if(Object.prototype.hasOwnProperty.call(urlparams,url)){
            if(url.startsWith("GET /")){
                router.get(url.substring(4), urlparams[url]);
            }else if(url.startsWith("POST /")){
                router.post(url.substring(4), urlparams[url]);
            }else{
                console.log(`请求的${url} url不合法`);
            }
        }
    }
};


module.exports = (dir) => {
    let controller_dir = dir || 'controllers',
        router = require('koa-router')();
    addController(controller_dir,router);
    return router.routes();
};

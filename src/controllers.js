
const fs = require('fs');
const path = require('path');


let addController = (dir,router) => {
    let filePath = path.join(__dirname, `/${dir}/`);
    let files = fs.readdirSync(filePath);

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
                let path = url.substring(4);
                router.get(path, urlparams[url]);
            }else if(url.startsWith("POST /")){
                let path = url.substring(5);
                router.post(path, urlparams[url]);
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

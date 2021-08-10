const config = require('config');

const Router = require("@koa/router");
const router = new Router({
  prefix: config.get('prefix')
});

// 

const glob = require("glob");
const path = require("path");
const fs = require("fs");

const resolve = (p) => {
  return path.resolve("./", p);
};


/**
 * 动态获取文件夹路径
 * 
 */
const filenames = glob.sync("**/*.js", {
  cwd: resolve("mocks"),
});



// 方法列表 检测文件名 
const methodsList = ["get", "post", "put", "delete", "options"];

// 动态生成路由
filenames.forEach((filename) => {
  filename = filename.replace('/_','/:')
 

  let router_path = path.dirname('/' + filename);
  let router_method = path.basename(filename, ".js");

  if (methodsList.includes(router_method)) {
    
    router[router_method](router_path, async (ctx, next) => {
      console.log(router_path)
      const fileRes = require(path.join(process.cwd(), 'mocks', router_path.replace(':','_'), router_method));
     
      if (typeof fileRes === 'function') {
        ctx.body = fileRes(ctx)
      } else if (typeof fileRes === 'object') {
        ctx.body = fileRes
      } else {
        ctx.body = '配置错误'
      }
      next()
    });
  }
});




exports.router = router;

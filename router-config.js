// const config = require('config');

const Router = require("@koa/router");
const router = new Router();

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
  let router_path = path.dirname('/'+filename);
  let router_method = path.basename(filename, ".js");
  if (methodsList.includes(router_method)) {
    router[router_method]( router_path, async (ctx, next) => {
     ctx.body = require(path.join(process.cwd(),'mocks',router_path,router_method));
    });
  }
});




exports.router = router;

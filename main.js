const Koa = require("koa");
const app = new Koa();

//https://www.npmjs.com/package/config
const config = require("config");
const restc = require('restc').koa2()


const staticServe = require('koa-static');
const path = require('path')
const staticPath = path.join(__dirname,'assets')


const {
  router
} = require('./router-config')

// 路由
app
  .use(restc)
  .use(staticServe(staticPath))
  .use(router.routes())
  .use(router.allowedMethods())
  // 静态资源服务器

    const port = config.get("port");

    if (!module.parent) {
      app.listen(port, () => {
        console.log(`start in port ${port}`);
      });
    }
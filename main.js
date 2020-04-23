const Koa = require("koa");
const app = new Koa();

//https://www.npmjs.com/package/config
const config = require("config");
const restc = require('restc').koa2()

const { router } = require('./router-config')

// 路由
app
  .use(restc)
  .use(router.routes())
  .use(router.allowedMethods())






const port = config.get("port");

if (!module.parent) {
  app.listen(port, () => {
    console.log(`start in port ${port}`);
  });
}





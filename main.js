const Koa = require("koa");
// koa封装的websocket这是官网（很简单有时间去看一下https://www.npmjs.com/package/koa-websocket）
const websockify = require('koa-websocket')
const app = websockify(new Koa());

//https://www.npmjs.com/package/config
const config = require("config");
const restc = require('restc').koa2()


const staticServe = require('koa-static');
const path = require('path')
const staticPath = path.join(__dirname,'assets')


const {
  router
} = require('./router-config')


app.ws.use(function (ctx, next) {
  ctx.websocket.send("连接成功");
  return next(ctx)
})

/**
 * 客户端连接代码
 * 
 *    const wsUrl =  `${wsProt}://${url.hostname}:${port}/ws/console`;
    console.log(wsUrl,'wsUrl')
    const c = new W3CWebSocket(
     wsUrl
    );
 */

app.ws.use(require('koa-route').all('/ws/console', function (ctx) {
  /**接收消息*/
  ctx.websocket.on('message', function (message) {
      console.log(message);
      // 返回给前端的数据
      let data = JSON.stringify({
          id: Math.ceil(Math.random()*1000),
          time: parseInt(new Date()/1000)
      })
      ctx.websocket.send(data);
  })
}));

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
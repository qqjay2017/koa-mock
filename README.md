# 简易mock平台

v0.0.1

| *版本号* | *说明* | *创建人* |
| -------- | -------- | ------ |
| 0.0.1    | 初始化说明 | huang |

根据文件夹路径自动生成url

根据js文件名定义请求方式,如`get.js`就是get方式

支持mockjs语法



## 启动


> 无法自动刷新改动,需要重启服务

`npm run start`


## nodemon方式启动

> 检测改动自动重启

`npm i nodemon -g`
`npm run dev`



## 演示地址

### get    展示部分mock语法


`localhost:7300/mock`


> 该接口数据对应`mocks\mock\get.js`的数据


### post    返回写死的数据

`localhost:7300/test/test1`

> 该接口数据对应`mocks\test\test1\post.js`的数据

### 使用案例

#### 目的:添加一个/user/login的post数据

 - 1. 在mocks下面新建的 /user/login
 - 2. /user/login下面新建post.js
 - 3. post.js填充数据
  

  ```javascript
    const  Mock = require('mockjs');

    module.exports = Mock.mock({
        code:200,
        methods:'post',
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'result|8-10': [{
            id: '@increment',
            // 随机时间戳  "timestamp": 1358389770829,
            timestamp: +Mock.Random.date('T'),
            // 随机名字
            author: '@first',
            reviewer: '@first',
            // 随机英文串
            title: '@title(5, 10)',
            // 
            content_short: 'mock data',
            // 随机小数  43.83
            forecast: '@float(0, 100, 2, 2)',
            // 随机整数
            importance: '@integer(1, 3)',
            // 数组里面的一种 "type": "CN",
            'type|1': ['CN', 'US', 'JP', 'EU'],
            // "status": "draft",
            'status|1': ['published', 'draft'],
            // 随机时间     "display_time": "2012-08-07 22:04:51",
            display_time: '@datetime',

            comment_disabled: true,
            pageviews: '@integer(300, 5000)',
            
            platforms: ['a-platform']
        }]
    })
  ```



   - 4. 重启服务
   - 5. 请求localhost:7300/user/login,方法为post

## TODO

使用注解生成swagger



## docker打包

`$ docker build -t mock-serve .      `
`$ docker save -o mock-serve.tar mock-serve`
`$ scp ./mock-serve.tar root@101.32.10.202:/home/app/mock-serve `
`$ docker run -itd -p 3001:3001 mock-serve   `
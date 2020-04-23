const  Mock = require('mockjs')


module.exports = Mock.mock({
    code:0,
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

/**
 * 新增数据源
 */

module.exports = {
    code: 200,
    msg: 'ok',
    data: {
        result: [{
                a: 'aaaaaaaaa',
                b: 'bbbbbbbbb'
            },
            {
                a: '1111111111',
                b: '111111111111'
            }
        ],
        tableKey: [{
                enKey: 'a',
                chnKey: '字段a'
            },
            {
                enKey: 'b',
                chnKey: '字段b'
            }
        ],
        page: {
            total: 100,
            size: 10,
            current: 1,
            pages: 10
        }
    }
};
const  Mock = require('mockjs')

module.exports = (ctx) => {
  const id = ctx.params.id;
 return Mock.mock( {
    data: {
      id: id,
      userId: "8be94b60-176b-432b-8bc8-087a354cf252",
      target: 1,
      readFlag: 2,
      type: '@integer(1, 2)',
      transferType: '@integer(1, 13)',
      applyTime: "1629943940041",
      purchaseTime: "1629943940041",
      excavationTime: "1629943940041",
      unlockTime: "1629943940041",
      endTime: "1629943940041",
      applyProgress: null,
      result: null,
      orderStatus: 4,
      rechargeStatus: null,
      address: 'fdhdfgdftre456fgh547',
      orderId: "39290498233401344",
      assetType: null,
      amount: 998.36,
      reason: 'reason',
      createdAt: "2021-08-26T02:12:20.042Z",
      updatedAt: "2021-08-26T02:12:20.042Z",
    },
  })
  
};

const Mock = require("mockjs");
module.exports = Mock.mock({
  page: "@integer(1, 3)",

  perPage: "@integer(1, 3)",

  allIncome: "@integer(1, 3)",

  availableBalance: "@integer(1, 3)",

  curSavePower: "@integer(1, 3)",

  isHaveNewMessage: true,

  isHaveNewNotice: true,
  "productList|8-10": [
    {
      id: "@increment",
      name: "@first",
      lastNum: "@integer(0, 30)",
      price: "@integer(10, 30)",
      technicalFee: "@integer(10, 30)", //技术费比例,要/100
      period: 1,
      startTimeType: 1,
      publisherName: "publisherName发行方name",
      yearIncomeRate: "@integer(10, 30)",
      savePower: 5,
      num:'@integer(100, 3000)'
    },
  ],
});

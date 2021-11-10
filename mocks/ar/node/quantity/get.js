module.exports = (ctx) => {
  const page = ctx.params.page;
  const size = ctx.params.size;

  return {
    "code": 10200, 
    "msg": {
      "data": {
        "\u5206\u7ec41": 2, 
        "\u672a\u5206\u7ec4": 1, 
        "\u6d4b\u8bd5001": 3, 
        "\u6d4b\u8bd5002": 3
      }, 
      "total": 9
    }
  }
};

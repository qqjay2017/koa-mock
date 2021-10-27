module.exports = (ctx) => {
  const page = ctx.params.page;
  const size = ctx.params.size;

  return {
    code: 10200,
    msg: {
      total: 9,
      undistributed: 2,
      "\u5206\u7ec41": 4,
      "\u5206\u7ec42": 3,
      "\u5206\u7ec44": 0,
    },
  };
};

module.exports = (ctx) => {
  const page = ctx.params.page;
  const size = ctx.params.size;

  return {
    code: 10200,
    msg: {
      data: [
        {
          avg_integrity: 82.8,
          block_path: "/data/ar/block1",
          hashrate: 9.0,
          head_ip: "172.31.0.31",
          head_name: "fa163e9f8f67",
          id: 3,
          name: "\u5206\u7ec41",
          nodes_total: 4,
        },
        {
          avg_integrity: 84.2,
          block_path: "data/ar/block1",
          hashrate: 39.0,
          head_ip: "172.31.0.35",
          head_name: "fa163e273c0a",
          id: 4,
          name: "\u5206\u7ec42",
          nodes_total: 3,
        },
        {
          avg_integrity: 0,
          block_path: "/data/ar",
          hashrate: 0,
          head_ip: "Null",
          head_name: "Null",
          id: 6,
          name: "\u5206\u7ec44",
          nodes_total: 0,
        },
      ],
      total: 193,
    },
  };
};

module.exports = (ctx) => {
  const gid = ctx.query.gid;
 
  if (gid === "groups") {
    return {
      "code": 10200, 
      "msg": {
        "data": [
          {
            "critical": 1, 
            "error": 0, 
            "group_name": "\u5206\u7ec41", 
            "passing": 0, 
            "total": 2, 
            "warning": 1
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5001", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5002", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5003", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5004", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5005", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5006", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5007", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5008", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5009", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd50010", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5011", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd50012", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5013", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd50014", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          },
          
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5015", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5016", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5017", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5018", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 
          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u6d4b\u8bd5019", 
            "passing": 3, 
            "total": 3, 
            "warning": 0
          }, 

          {
            "critical": 0, 
            "error": 0, 
            "group_name": "\u672a\u5206\u7ec4", 
            "passing": 1, 
            "total": 1, 
            "warning": 0
          }
        ]
      }
    }
  }else{
    return {
      "code": 10200, 
      "msg": {
        "data": {
          "critical": 1, 
          "error": 0, 
          "passing": 7, 
          "total": 9, 
          "warning": 1
        }
      }
    }
  }

};

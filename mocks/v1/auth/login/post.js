module.exports = (ctx) => {
  const phone = ctx.params.phone;
  if (phone === "18150935594") {
    return {
      isNewAccount: true,
    };
  } else {
    return {
      data: {
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjdiN2Y5ZDcyLWQ2YWUtNDk2MS05MmU4LWM0ZGI5MDgzZjA2YiIsInR5cGUiOiJ1c2VyIiwic2Vzc2lvbklkIjoiZmQzOWRlZGMtZDljMi00YjkyLWJhOWEtMjhlNDJiZWE2Y2VlIn0sImlhdCI6MTYyODU4NzgyNSwiZXhwIjoxNjI4NTk1MDI1fQ.aWtoPJJTJqLHn7N8Llnb7kgsSA087_hKYozkM0llo-k",
        accessExpiresIn: 7200,
        refreshToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjdiN2Y5ZDcyLWQ2YWUtNDk2MS05MmU4LWM0ZGI5MDgzZjA2YiIsInR5cGUiOiJ1c2VyIiwic2Vzc2lvbklkIjoiNTA0MWRjZWUtMmM1NC00Y2FjLWIzN2EtMjg4ODcyNDliMjUyIn0sImlhdCI6MTYyODU4NzgyNSwiZXhwIjoxNjI4Njc0MjI1fQ.IhSI05xNLaas4z5ayY1KAY1s-qqSbPBRBBhzs6sN914",
        refreshExpiresIn: 86400,
        loggedInUser: {
          userId: "7b7f9d72-d6ae-4961-92e8-c4db9083f06b",
          type: "user",
        },
      },
    };
  }
};

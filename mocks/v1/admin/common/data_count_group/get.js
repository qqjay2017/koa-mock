module.exports = ()=>{
    if(Math.random()<0.5){
        return {
            data:[]
        }
    }else{
         return {
            data: [
              { status: 3, count: Math.floor(Math.random()*1000) },
              { status: 4, count: 4 },
              { status: 2, count: 2 },
            ],
          };
    }
}

module.exports = (ctx)=>{
    const {
        pageSize=10,
        current=1,

    } = ctx.query;
    if(pageSize*current>100){
        return {
            pageSize: pageSize,
        current: current,
        total: 100,
        data: []
        }

    }
    const data = Array(pageSize);
    for (let i = 0; i <pageSize; i++) {
        const id = (current-1)*pageSize+i+1
        data[i] = {
            id:id,
            name: id+'name',
        }
        
    }
    return {
        pageSize: pageSize,
        current: current,
        total: 100,
        data: data
      };
      
}
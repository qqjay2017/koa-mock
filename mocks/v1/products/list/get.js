module.exports = (ctx)=>{
    let {
        pageSize=10,
        current=1,

    } = ctx.query;
    const total = 40
    pageSize = Number(pageSize)
    current = Number(current)
    if(pageSize*current>total){
        return {
            pageSize: pageSize,
        current: current,
        total: total,
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
        total: total,
        data: data
      };
      
}
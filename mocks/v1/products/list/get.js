module.exports = (ctx)=>{
    let {
        pageSize=10,
        current=1,

    } = ctx.query;
    const total = 88
    pageSize = Number(pageSize)
    current = Number(current)
    const data = []
    const last = total - pageSize*current
    if(last<0 ){
       


        for (let i = 0; i <(total&10); i++) {
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
        }

    }
    

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
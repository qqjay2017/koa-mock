module.exports = (ctx)=>{
    let {
        pageSize=10,
        current=1,

    } = ctx.query;
    const total = 33
    pageSize = Number(pageSize)
    current = Number(current)
    const data = []
    const last =  pageSize*current - total
    if(last>0 ){
   
       let count = total%10
       console.log(last,count,'last')

        for (let i = 0; i <count; i++) {
            const id = (current-1)*pageSize+i+1
            data[i] = {
                id:id,
                name: id+'name',
            }
            
        }
        console.log(data,'data')

      
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
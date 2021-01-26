module.exports = (ctx)=>{
    // 访问  /api/demo2?id=1
    /**
     * ctx.query   访问  /api/demo2?id=1
     * 
     */
    console.log( ctx.query)
    return ctx.query
}
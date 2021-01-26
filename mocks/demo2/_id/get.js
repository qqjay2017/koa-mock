module.exports = (ctx)=>{
    // 访问  /api/demo2?id=1
    /**
     * ctx.query   访问  /api/demo2?id=1
     * ctx.params  访问 /api/demo2/2
     */
    const paramID = ctx.params.id
    return {
        paramID
    }
}
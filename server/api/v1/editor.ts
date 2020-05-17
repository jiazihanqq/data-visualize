import Router from 'koa-router'

const router = new Router();

router.post('/v1/editor/chartList',async (ctx, next)=>{
    // ctx.params;
    // ctx.request.query;
    // ctx.request.header;
    // ctx.request.body;
    ctx.body = {};
});

export default router;

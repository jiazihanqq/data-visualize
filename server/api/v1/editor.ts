import Router from 'koa-router'

const router = new Router();

router.get('/v1/editor/chartlist',async (ctx, next)=>{
    ctx.body = {};
});

export default router;

import Router from 'koa-router'

const router = new Router();

router.get('/v1/manager/login',async (ctx, next)=>{
    ctx.body = {};
});

export default router;

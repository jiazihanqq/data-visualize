import Koa from 'koa';
import editor from './api/v1/editor'
import manager from './api/v1/manager'

const app = new Koa();

app.use(editor.routes());
app.use(manager.routes());
app.listen(4000);

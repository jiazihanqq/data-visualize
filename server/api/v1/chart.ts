import Router from "koa-router";
import { ChartCategory } from "../../models/chartCategory";

export const router = new Router({
  prefix: "/v1/chart",
});
router.post("/chartList", async (ctx, next) => {
  const chartList = await ChartCategory.model.findAll();
  ctx.body = [...chartList];
});

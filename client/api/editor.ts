import { axios } from "./index";
import {ChartID} from "../../definations";

type ChartListReq = {
  id: number;
  auth?: boolean;
};
export type ChartInfo = {
  id: number;
  type: ChartID;
  chartMap: string;
  properties: string;
};

export const getChartList = (req?: ChartListReq) => {
  return axios.post<null, ChartInfo[]>("/v1/chart/chartList", req);
};

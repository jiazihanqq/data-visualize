import { axios } from "./";

enum ChartID {
  bar = 1,
  pie,
  map,
}
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

export const getChartList = async (req?: ChartListReq) => {
  return axios.post<null, ChartInfo[]>("/v1/chart/chartList", req);
};

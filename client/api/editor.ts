import { axios } from "../api";

type ChartListReq = {
  id: number;
  auth?: boolean;
};

export type ChartListRes = {

}

export const getChartList = async (req: ChartListReq) => {
  return await axios.post("/editor/getChartList", req);
};

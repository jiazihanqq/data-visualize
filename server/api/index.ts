import Axios from "axios";

const axios = Axios.create({
  // baseURL: serviceHost,
});

export class Api {
  protected ctx: any;
  protected authSuffix: string;
  protected axios = axios;

  constructor(ctx: any, token: string, timestamp: string) {
    this.ctx = ctx;
    this.authSuffix = `?timestamp=${timestamp}&token=${token}`;
  }
}

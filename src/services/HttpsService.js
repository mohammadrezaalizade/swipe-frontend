import axios, { AxiosInstance } from "axios";

class HttpService {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:3000/api/",
      timeout: 1000,
      headers: {},
    });
  }

  get(url, config = null) {
    return this.client.get(url, config);
  }
  post(url, params, config = null) {
    return this.client.post(url, params, config);
  }
  delete(url, config = null) {
    return this.client.delete(url, config);
  }
  put(url, params, config = null) {
    return this.client.put(url, params);
  }
}

export default HttpService;

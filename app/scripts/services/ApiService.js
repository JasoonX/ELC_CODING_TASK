class ApiService {
  async request(requestMethod, config, data) {
    let { API, url, queryParams } = config;

    if (queryParams) {
      url += "?" + new URLSearchParams(queryParams);
    }
    const response = await API[requestMethod](
      `${url}`,
      (data && data.data) || ""
    );

    return response.data;
  }

  get(config, id = "") {
    return this.request("get", config);
  }

  post(config, data) {
    return this.request("post", config, { data });
  }

  put(config, id = "") {
    return this.request("patch", config, { data, id });
  }

  patch(config, id, data) {
    return this.request("patch", config, { data, id });
  }

  delete(config, id = "") {
    return this.request("delete", config);
  }
}

export default new ApiService();

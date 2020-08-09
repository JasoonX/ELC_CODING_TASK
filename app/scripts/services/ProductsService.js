import ProductsAPI from "../API/ProductsAPI";
import ApiService from "./ApiService";

class ProductsService {
  get config() {
    return {
      API: ProductsAPI,
      url: "",
    };
  }

  search(value) {
    return ApiService.get({ ...this.config, url: `/search/${value}` });
  }
}

export default new ProductsService();

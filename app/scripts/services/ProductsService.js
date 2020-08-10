import ApiService from "./ApiService";
import ProductsAPI from "../API/ProductsAPI";
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

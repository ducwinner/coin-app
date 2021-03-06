import axiosClient from "./AxiosApi";
const ProductsApi = {
  getAll(url, params) {
    return axiosClient.get(url, { params });
  },

  get(params) {
    const url = "";
    return axiosClient.get(url, { params });
  },

  add(data) {
    const url = `/`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/${data.id}`;
    return axiosClient.post(url, data);
  },

  remove(id) {
    const url = `/${id}`;
    return axiosClient.delete(url);
  },
};

export default ProductsApi;

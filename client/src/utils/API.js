import http from "../http-common";

class ItemDataService {
  getAll() {
    return http.get("/items");
  }

  get(id) {
    return http.get(`/items/${id}`);
  }

  create(data) {
    return http.post("/items", data);
  }

  update(id, data) {
    return http.put(`/items/${id}`, data);
  }

  delete(id) {
    return http.delete(`/items/${id}`);
  }

  isLoggedin() {
    return http.get('/isAuthenticated');
  }
}

export default new ItemDataService();
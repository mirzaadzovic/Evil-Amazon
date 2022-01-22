import axios from "../axios/axios";

export default class APIService {
  static async getAll(route) {
    console.log(route);
    const response = await axios.get(route).catch((err) => err);
    if (response.status === 200) {
      return response.data;
    }
    throw Error(response);
  }
}

import axios from "../axios/axios";

export default class AuthService {
  static async getLoggedInUser() {
    const request = await axios.get("/auth/user").catch((err) => err);
    if (request.status === 200) return request.data;

    throw Error("Unauthorized");
  }

  static async logIn(email, password) {
    const request = await axios
      .post("/auth/login", { email: email, password: password })
      .catch((err) => err);

    if (request.status === 200) return request.data;

    throw Error("Unauthorized");
  }
}

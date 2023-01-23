import { AuthProvider } from "@pankod/refine-core";
import axios from "axios";
import qs from "qs";

export const TOKEN_KEY = "refine-auth";
const LOGIN_URI = "/login";

export const authProvider: AuthProvider = {
  login: async ({ username, _email, password }) => {
    const response = await axios(LOGIN_URI, {
      method: "POST",
      data: qs.stringify({
        username,
        password
      })
    });

    if (response.status === 200) {
      localStorage.setItem(TOKEN_KEY, username);
      return Promise.resolve();
    }
    return Promise.reject(new Error("Incorrect username or password"));
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return Promise.resolve();
    }

    return Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
  getUserIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return Promise.reject();
    }

    return Promise.resolve({
      id: 1,
    });
  },
};

import { request } from "./WebService";
import Config from "../config";
import store from "../store";

const getUserById = async userId => {
  const result = await request({
    url: `${Config.baseUrl}/users/${userId}`,
    method: "GET",
    bearerToken: store.state.auth.token
  });

  try {
    const obj = await result.json();

    if (!obj) {
      return false;
    }

    return obj.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const deleteUserById = async userId => {
  const result = await request({
    url: `${Config.baseUrl}/users/${userId}`,
    method: "DELETE",
    bearerToken: store.state.auth.token
  });

  try {
    const obj = await result.json();

    if (!obj) {
      return false;
    }

    return obj;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const createUser = async mail => {
  const result = await request({
    url: `${Config.baseUrl}/users/`,
    method: "POST",
    body: {
      mail
    }
  });

  try {
    const obj = await result.json();

    if (!obj) {
      return false;
    }

    return obj.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const getUsers = async () => {
  const result = await request({
    url: `${Config.baseUrl}/users`,
    method: "GET",
    bearerToken: store.state.auth.token
  });

  try {
    const obj = await result.json();

    if (!obj) {
      return false;
    }

    return obj.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export { getUserById, getUsers, deleteUserById, createUser };
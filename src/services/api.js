import axios from "axios";

axios.defaults.baseURL =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";
axios.defaults.headers.common = { Authorization: "Zp9gx0BvQZB7ADLIO1OpsDnm" };

export const apiSignUp = (userData) => {
  return axios
    .post("/auth/sign-up", {
      email: userData.email,
      name: userData.name,
      image: userData.image,
      password: userData.password,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("Error when registering:", err.response.data);
      throw err.response.data;
    });
};

export const apiSignIn = (userData, token) => {
  return axios
    .post("/auth/login", {
      email: userData.email,
      password: userData.password,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("Error when logging in:", err.response.data);
      throw err.response.data;
    });
};

export const apiCreateHabit = (habitData, token) => {
  return axios
    .post(
      "/habits",
      {
        name: habitData.name,
        days: habitData.days,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("Error creating habit:", err.response.data);
      throw err.response.data;
    });
};

export const apiGetHabitsList = (token) => {
  return axios
    .get("/habits", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("Error fetching habits:", err.response.data);
      throw err.response.data;
    });
};

export const apiDeleteHabit = (id, token) => {
  return axios
    .delete(`/habits/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("Error deleting habit:", err.response.data);
      throw err.response.data;
    });
};

import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    baseURL: "https://desolate-garden-82964.herokuapp.com",
  });
};

export const axiosGhAPI = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL:
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",
  });
};

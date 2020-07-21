import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    baseURL: "https://bw-ft-sleep-tracker-1.herokuapp.com",
  });
};

export const axiosGhAPI = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: "https://jobs.github.com/positions.json",
  });
};

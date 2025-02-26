import axios from "axios";

export const getAllUsers = (callback) => {
  axios
    .get(`${import.meta.env.VITE_API_USER}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const postuser = (data) => {
  axios
    .post(`${import.meta.env.VITE_API_USER}`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const deleteuser = (id) => {
  axios
    .delete(`${import.meta.env.VITE_API_USER}${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const updateuser = (id, data) => {
  axios
    .put(`${import.meta.env.VITE_API_USER}${id}`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

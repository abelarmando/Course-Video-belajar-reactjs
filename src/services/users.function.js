import axios from "axios";

export const getAllUsers = (callback) => {
  axios
    .get("https://67a327b631d0d3a6b7827732.mockapi.io/api/course/users")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postuser = (data) => {
  axios
    .post("https://67a327b631d0d3a6b7827732.mockapi.io/api/course/users", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

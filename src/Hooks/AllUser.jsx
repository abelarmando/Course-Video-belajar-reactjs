import { useEffect, useState } from "react";
import { getAllUsers } from "../services/users.function";

function AllUser() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    getAllUsers((data) => {
      setusers(data);
    });
  }, []);

  return users;
}

export default AllUser;

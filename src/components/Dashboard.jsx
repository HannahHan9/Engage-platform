import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const options = {
        method: "GET",
        url: "http://localhost:5000/users",
      };
      try {
        const response = await axios.request(options);
        const sortedUsers = response.data.sort((prev, user) => {
          if (prev.last_name > user.last_name) {
            return 1;
          }
          if (prev.last_name < user.last_name) {
            return -1;
          }
          if (prev.first_name > user.first_name) {
            return 1;
          }
          if (prev.first_name < user.first_name) {
            return -1;
          }
          return 0;
        });
        setUsers(sortedUsers);
      } catch (error) {
        setError(error.response.status);
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, [setUsers, setIsLoading, setError]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error code: {error} Oops, something went wrong..</p>;
  }
  return (
    <>
      <UserList users={users} selected={selected} setSelected={setSelected} />
    </>
  );
};

export default Dashboard;

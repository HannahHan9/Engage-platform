import { useEffect, useState } from "react";
import { getUsers } from "../../api.cjs";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();
      if (!Array.isArray(res)) {
        setError(res);
      } else {
        setUsers(res);
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, [setUsers, setIsLoading]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error code: {error} Oops, something went wrong..</p>;
  }
  return (
    <>
      <h2>List of Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name} <p>You are not authorised</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;

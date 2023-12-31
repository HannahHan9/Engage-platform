import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import sortUsers from "../utilities/sortUsers"

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [selected, setSelected] = useState();
  const [user, setUser] = useState();

  const mobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const fetchUsers = async () => {
      const options = {
        method: "GET",
        url: "https://engage-proxy-server.onrender.com/users",
      };
      try {
        const response = await axios.request(options);
        const sortedUsers = response.data.sort(sortUsers);
        setUsers(sortedUsers);
      } catch (error) {
        setError(error.response.status);
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (selected) {
      setUser(users.find((user) => user.id === selected));
    }
  }, [selected, users]);

  if (isLoading) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center", marginTop: "40vh" }}>
        Loading...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center", marginTop: "40vh" }}>
        Error code: {error} Oops, something went wrong..
      </Typography>
    );
  }
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: mobile ? "auto" : "auto 1fr",
      }}
    >
      {!mobile ? (
        <>
          <UserList
            users={users}
            selected={selected}
            setSelected={setSelected}
          />{" "}
          <UserDetails user={user} setUser={setUser} />
        </>
      ) : !user ? (
        <UserList users={users} selected={selected} setSelected={setSelected} />
      ) : (
        <UserDetails user={user} setUser={setUser} />
      )}
    </Box>
  );
};

export default Dashboard;

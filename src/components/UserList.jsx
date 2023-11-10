import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";


const UserList = ({ users, selected, setSelected }) => {
  return (
    <>
      <h2>All Users</h2>
      <List>
        {users.map((user) => (
          <ListItemButton
            key={user.id}
            selected={selected === user.id}
            onClick={() => {
              setSelected(user.id);
            }}
          >
            {user.last_name.toUpperCase()}, {user.first_name}
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default UserList;

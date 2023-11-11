import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

const UserList = ({ users, selected, setSelected }) => {
  return (
    <Grid xs={12} sm={4} md={3}>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
        align="left"
      >
        All Users
      </Typography>
      <List align="left">
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
    </Grid>
  );
};

export default UserList;

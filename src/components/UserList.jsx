import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

const UserList = ({ users, selected, setSelected }) => {
  return (
    <Grid
      xs={12}
      sm={4}
      md={3}
      container
      sx={{ backgroundColor: "#143556", padding: 2 }}
    >
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        align="center"
        color="#fff"
      >
        <img
          src="https://www.engagesolutionsgroup.com/employee/wp-content/uploads/sites/2/2023/10/engage-footer.svg"
          alt="Engage Colleague"
        />
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
            <Typography color="#fff">
              {user.last_name.toUpperCase()}, {user.first_name}
            </Typography>
          </ListItemButton>
        ))}
      </List>
    </Grid>
  );
};

export default UserList;

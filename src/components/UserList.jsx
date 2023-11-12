import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const UserList = ({ users, selected, setSelected }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#143556",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <img
        src="https://www.engagesolutionsgroup.com/employee/wp-content/uploads/sites/2/2023/10/engage-footer.svg"
        alt="Engage Colleague"
        height={40}
        style={{ float: "left", marginRight: '20px'}}
      />
      <List align="left" style={{ maxHeight: "100vh", overflowY: "auto" }}>
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
    </Box>
  );
};

export default UserList;

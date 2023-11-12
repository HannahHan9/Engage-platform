import { formatDate } from "../utilities/formatDate";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Fragment } from "react";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";

const UserDetails = ({ user, setUser }) => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      <Masonry
        columns={mobile ? 1 : 2}
        spacing={4}
        sx={{ m: 2, width: "auto" }}
      >
        {mobile && (
          <Button
            onClick={() => {
              setUser(null);
            }}
          >
            All Users
          </Button>
        )}

        {!user ? (
          <Typography variant="body1" color={indigo[800]} padding={5}>
            Please select a user
          </Typography>
        ) : (
          <>
            {user.image && (
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#FBBF09",
                }}
              >
                <img src={user.image} width="100%" />
              </Paper>
            )}
            <Paper sx={{ p: 2, backgroundColor: "#EB5A3B", color: "#fff" }}>
              First Name: {user.first_name}
              <br />
              Last Name: {user.last_name}
              <br />
              <br /> <Divider /> <br /> Username: {user.username}
              <br />
              Date of Birth: {formatDate(user.date_of_birth)} <br /> <br />
              <Divider />
              <br />
              Job Title: {user.job_title}
              <br />
              Department: {user.department}
            </Paper>
            {user.bio && (
              <Paper sx={{ p: 2, display: "flex" }}>
                <Typography>{user.bio}</Typography>
              </Paper>
            )}

            <Paper sx={{ p: 2, backgroundColor: "#fd7e14" }}>
              <Typography variant="h6" component="h2">
                Groups
              </Typography>
              <List>
                {user.groups.map((group) => {
                  return (
                    <Fragment key={group.id}>
                      <ListItem>
                        <Typography>{group.title}</Typography>
                      </ListItem>
                      <Divider />
                    </Fragment>
                  );
                })}
              </List>
            </Paper>
            <Paper sx={{ p: 2, backgroundColor: "#FBBF09" }}>
              <List>
                {user.attributes.map((attribute) => {
                  return (
                    <Fragment key={attribute.id}>
                      <ListItem>
                        <Typography>
                          {attribute.title}: {attribute.value}
                        </Typography>
                      </ListItem>
                      <Divider />
                    </Fragment>
                  );
                })}
              </List>
            </Paper>
          </>
        )}
      </Masonry>
    </Box>
  );
};

export default UserDetails;

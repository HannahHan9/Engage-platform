import { formatDate } from "../utilities/formatDate";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Fragment } from "react";

const UserDetails = ({ user, setUser }) => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Grid container spacing={1} xs={12} sm={8} md={9}>
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
        <Typography variant="body1" color={indigo[800]}>
          Please select a user
        </Typography>
      ) : (
        <>
          <Grid xs={12} sm={4} md={3}>
            <Paper>
              {user.image && <img src={user.image} />}
              {user.bio && <Typography>{user.bio}</Typography>}
            </Paper>
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <Paper>
              ID: {user.id} Reference: {user.reference}
              Username: {user.username} First Name: {user.first_name} Last Name:
              {user.last_name} Email: {user.email} Job Title: {user.job_title}
              Department: {user.department} Manager: {user.manager} Date of
              Birth: {formatDate(user.date_of_birth)}
            </Paper>
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <Paper>
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
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <Paper>
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
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default UserDetails;

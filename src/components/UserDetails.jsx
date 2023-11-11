import { formatDate } from "../utilities/formatDate";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

const UserDetails = ({ user, setUser }) => {
  const imageSize = {
    width: "150px",
    height: "150px",
    align: "center",
  };

  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Grid xs={12} sm={8} md={9}>
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
          <h2>Personal Information</h2>
          <List>
            <Card key={user.id}>
              {user.image && <img src={user.image} style={imageSize} />}
              {user.bio} ID: {user.id} Reference: {user.reference}
              Username: {user.username} First Name: {user.first_name} Last Name:
              {user.last_name} Email: {user.email} Job Title: {user.job_title}
              Department: {user.department} Manager: {user.manager} Date of
              Birth: {formatDate(user.date_of_birth)}
            </Card>
          </List>
        </>
      )}
    </Grid>
  );
};

export default UserDetails;

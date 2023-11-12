const sortUsers = (prev, user) => {
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
};

export default sortUsers;

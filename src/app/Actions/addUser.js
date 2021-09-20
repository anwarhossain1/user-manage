export const addUser = (newUser) => (dispatch) => {
  dispatch({
    type: "ADD_USER_REQUEST",
  });
  console.log(newUser);
};

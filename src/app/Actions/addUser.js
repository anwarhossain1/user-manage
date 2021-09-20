export const addUser = (newUser) => (dispatch, getState) => {
  dispatch({
    type: "ADD_USER_REQUEST",
  });

  //
  // const users = JSON.parse(localStorage.getItem("Users"));
  localStorage.setItem(
    "Users",
    JSON.stringify(getState().addUserReducer.users)
  );
  dispatch({
    type: "ADD_USER_SUCCESS",
    payload: newUser,
  });

  console.log(newUser);
};

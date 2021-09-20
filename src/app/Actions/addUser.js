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

export const deleteUser = (username) => (dispatch, getState) => {
  dispatch({
    type: "DELETE_USER_SUCCESS",
    payload: username,
  });
  localStorage.setItem(
    "Users",
    JSON.stringify(getState().addUserReducer.users)
  );
};

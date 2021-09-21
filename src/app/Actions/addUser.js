export const addUser = (newUser) => (dispatch, getState) => {
  dispatch({
    type: "ADD_USER_REQUEST",
  });

  //
  // const users = JSON.parse(localStorage.getItem("Users"));

  dispatch({
    type: "ADD_USER_SUCCESS",
    payload: newUser,
  });

  console.log(newUser);
  localStorage.setItem(
    "Users",
    JSON.stringify(getState().addUserReducer.users)
  );
};

export const deleteUser = (userId) => (dispatch, getState) => {
  dispatch({
    type: "DELETE_USER_SUCCESS",
    payload: userId,
  });
  localStorage.setItem(
    "Users",
    JSON.stringify(getState().addUserReducer.users)
  );
};

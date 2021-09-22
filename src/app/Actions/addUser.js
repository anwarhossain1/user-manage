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

export const updateUser = (updatedUser) => (dispatch, getState) => {
  dispatch({
    type: "UPDATE_USER_SUCCESS",
    payload: updatedUser,
  });
  console.log(updateUser);
  localStorage.setItem(
    "Users",
    JSON.stringify(getState().addUserReducer.users)
  );

  window.location.href = "/";
};

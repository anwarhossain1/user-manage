export const addUser = (newUser) => (dispatch, getState) => {
  dispatch({
    type: "ADD_USER_REQUEST",
  });

  localStorage.setItem("Users", JSON.stringify(newUser));
  const users = JSON.parse(localStorage.getItem("Users"));

  dispatch({
    type: "ADD_USER_SUCCESS",
    payload: users,
  });

  console.log(newUser);
};

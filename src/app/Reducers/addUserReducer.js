export const addUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER_REQUEST":
      return {};
    default:
      return state;
  }
};

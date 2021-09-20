export const addUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ADD_USER_REQUEST":
      return {
        loading: true,
      };
    case "ADD_USER_SUCCESS":
      return {
        loading: false,
        users: action.payload,
      };
    default:
      return state;
  }
};

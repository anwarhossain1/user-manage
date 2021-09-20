export const addUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ADD_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_USER_SUCCESS":
      return {
        ...state,

        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

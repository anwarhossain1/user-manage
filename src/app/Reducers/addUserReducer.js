export const addUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ADD_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_USER_SUCCESS":
      const alreadyExistUser = state.users.find(
        (item) => item.id === action.payload.id
      );
      if (alreadyExistUser) {
        return {
          ...state,
          users: state.users.map((item) =>
            item._id === action.payload.id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,

          users: [...state.users, action.payload],
        };
      }

    case "DELETE_USER_SUCCESS":
      return {
        ...state,

        users: state.users.filter((item) => {
          return item.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};

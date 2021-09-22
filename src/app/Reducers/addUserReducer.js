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

    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id !== action.payload.id) {
            return user;
          } else {
            console.log(user + 25);
            return {
              ...user,
              id: action.payload.id,
              name: action.payload.name,
              email: action.payload.email,
              phone: action.payload.phone,
              roles: action.payload.roles,
            };
          }
        }),
      };

    default:
      return state;
  }
};

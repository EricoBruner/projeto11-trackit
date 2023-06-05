import { createContext, useReducer } from "react";

export const UserContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "saveUserData":
      return {
        ...state,
        email: action.data.email,
        id: action.data.id,
        image: action.data.image,
        name: action.data.name,
        token: action.data.token,
      };

    case "saveOneHabit":
      return {
        ...state,
        habits: [
          ...state.habits,
          {
            id: action.data.id,
            name: action.data.name,
            days: action.data.days,
          },
        ],
      };

    case "saveAllHabits":
      return {
        ...state,
        habits: action.data,
      };

    case "saveAllHabitsToday":
      return {
        ...state,
        habitsToday: action.data,
      };

    default:
      throw new Error();
  }
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    id: -1,
    image: "",
    name: "",
    token: "",
    habits: [],
    habitsToday: [],
  });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

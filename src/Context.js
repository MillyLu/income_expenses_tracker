import { createContext, useReducer } from "react";

const initialState = {
  operations: [],
};

export const BalanceContext = createContext(initialState);

function BalanceReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return { ...state, operations: [action.payload, ...state.operations] };
    }
    case "DELETE": {
      return {
        ...state,
        operations: state.operations.filter(
          (operation) => operation.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
}

export function BalanceProvider({ children }) {
  const [state, dispatch] = useReducer(BalanceReducer, initialState);

  function deleteOperation(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function addOperation(operation) {
    dispatch({
      type: "ADD",
      payload: operation,
    });
  }

  return (
    <BalanceContext.Provider
      value={{
        operations: state.operations,
        deleteOperation,
        addOperation,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
}

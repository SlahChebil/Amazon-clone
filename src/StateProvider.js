import React, { createContext, useContext, useReducer } from "react";
//Prerpare the data layer
export const StateContext = createContext();

//Wrap our app and provide our datalayer
export const StateProvider =({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull insformation from the datalayer
export const useStateValue = () => useContext(StateContext);
 import { createContext, useReducer } from "react";

 export const CardContext = createContext();

 const initialState = {
    cart: null,
    resto: null,
 }

 const reducer = (_, action) => {
    const { type, payload, restoLoad } = action;

    switch (type) {
        case "ADD_ORDER":
            return {
                cart: payload
            };
            case "VIEW_RESTO":
                return {
                    resto: restoLoad
                };
                default:
                    throw new Error();
    }
 };

 export const CardContextProvider = ({children}) => {
    const [dataCard, dispach] = useReducer(reducer, initialState);

    return (
        <CardContext.Provider>
            {children}
        </CardContext.Provider>
    );
 };
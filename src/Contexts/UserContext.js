import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
    isLogin: false,
    user: {}
};

const reducer = (_, action) => {
    const {type, payload} = action;

    switch (type) {
        case "LOGIN_SUCCESS":
        return {
            isLogin: true,
            user: payload,
        };
        case "LOGIN_ADMIN":
            return {
                isLoginAdmin: true,
                user: payload,
            };
        case "LOGOUT":
            return {
                isLogin: false,
                user: {},
            };
        default:
            throw new Error();
    }
};

export const UserContextProvider = ({children}) => {
    const [dataUser, dispatch] = useReducer(reducer, initialState);


    return (
        <UserContext.Provider value = {[dataUser, dispatch]}>
            {children}
        </UserContext.Provider>
    );
};
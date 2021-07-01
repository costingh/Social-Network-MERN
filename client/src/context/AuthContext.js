import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: {
        coverPicture: "",
        email: "signuptest@gmail.com",
        followers: [],
        followings: [],
        isAdmin: false,
        profilePicture: "",
        username: "signuptest",
        _id: "60ddf84b5f598b0ef402fef0",
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
        value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}
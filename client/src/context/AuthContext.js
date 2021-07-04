import { createContext, useEffect, useReducer } from "react";
import AuthReducer from './AuthReducer';

/* 
{
        coverPicture: "",
        email: "signuptest@gmail.com",
        followers: [],
        followings: [],
        isAdmin: false,
        profilePicture: "",
        username: "signuptest",
        _id: "60ddf84b5f598b0ef402fef0",
    }
    
*/
const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
  };
  
  
  export const AuthContext = createContext(INITIAL_STATE);
  
  export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
    
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          isFetching: state.isFetching,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
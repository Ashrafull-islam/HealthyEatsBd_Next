"use client"; // Ensure it's a client component
import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const login=(userData)=>{setUser(userData)};
    const logout=()=>{setUser(null)};
    return(
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    )
};
export const useAuth = () => useContext(UserContext);
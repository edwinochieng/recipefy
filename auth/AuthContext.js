import React, { useEffect, useState, createContext, useContext } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(AuthContext);
};
export default AuthContext;

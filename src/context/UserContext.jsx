import { createContext, useState } from "react";
import { v4 } from "uuid";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUser = (newUser) => {
    newUser.id = v4();

    localStorage.setItem("user", JSON.stringfy(newUser));

    setUser(newUser);
  };
  return (
    <userContext.Provider value={{ user, signUser }}>
      {children}
    </userContext.Provider>
  );
};

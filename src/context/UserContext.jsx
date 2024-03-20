import { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);

  const signUser = (newUser) => {
    newUser.id = v4();

    localStorage.setItem("user", JSON.stringify(newUser));

    setUser(newUser);
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <userContext.Provider value={{ user, signUser, logoutUser }}>
      {children}
    </userContext.Provider>
  );
};

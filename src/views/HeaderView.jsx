import React, { useContext } from "react";
import { userContext } from "../context/UserContext";

const HeaderView = () => {
  const { user, logoutUser } = useContext(userContext);
  return (
    <header>
      <h3>
        <i className="fa-solid fa-coins"></i>
        <span>Coinmania</span>
      </h3>

      {user && (
        <div>
          <p>{user.email}</p>
          <button onClick={logoutUser}>Çıkış Yap</button>
        </div>
      )}
    </header>
  );
};

export default HeaderView;

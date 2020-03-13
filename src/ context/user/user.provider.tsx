import React, { useState } from "react";
import UserContext from "./user.context";

interface Props {}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState({});
  const [userLogged, setUserLogged] = useState(false);


  const connectUser = () => {
    
  }

  return (
    <UserContext.Provider value={{ user, setUser, userLogged, setUserLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

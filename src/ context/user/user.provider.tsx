import React from "react";
import UserContext from "./user.context";

interface Props {}

const UserProvider: React.FC<Props> = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default UserProvider;

import React, { useState } from "react";
import ConnectionContext from "./connection.context";

interface Props {}

const ConnectionProvider: React.FC<Props> = ({ children }) => {
  const [connection, setConnection] = useState<any>(null);
  return (
    <ConnectionContext.Provider value={{ connection, setConnection }}>
      {children}
    </ConnectionContext.Provider>
  );
};

export default ConnectionProvider;

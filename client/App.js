import React from "react";
import { AppNavigator } from "./navigation";
import { UserProvider } from "./content/UserContext";

const App = () => {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
};

export default App;


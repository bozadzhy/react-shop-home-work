import React, { createContext, useState } from "react";

export const NewThemeContext = createContext();

const NewThemeProvider = ({ children }) => {
  const [isTheme, setIsTheme] = useState(
    JSON.parse(localStorage.getItem("isTheme")) || false
  );

  return (
    <NewThemeContext.Provider value={{ isTheme, setIsTheme }}>
      {children}
    </NewThemeContext.Provider>
  );
};
export default NewThemeProvider;

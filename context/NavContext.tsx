import React, { createContext } from "react";

const NavContext = createContext({
  openNav: false,
  setOpenNav: (openNav: boolean) => {},
});

interface NavProviderProps {
  children: React.ReactNode;
}

export const NavProvider = ({ children }: NavProviderProps) => {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <NavContext.Provider value={{ openNav, setOpenNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => React.useContext(NavContext);

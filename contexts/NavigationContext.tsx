'use client'
import React, { createContext, useState, useContext, ReactNode } from "react";

type NavigationItemType = {
  name: string;
  href: string;
  current: boolean;
};

type NavigationContextType = {
  navigation: NavigationItemType[];
  setPage: (page: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [navigation, setNavigation] = useState<NavigationItemType[]>([
    { name: "Dashboard", href: "/", current: false },
    { name: "Servers", href: "/servers", current: false },
    { name: "Users", href: "/users", current: false },
    { name: "Twitter", href: "/twitter", current: false },
  ]);

  const setPage = (page: string) => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((navItem) =>
        navItem.name === page
          ? { ...navItem, current: true }
          : { ...navItem, current: false }
      )
    );
  };

  return (
    <NavigationContext.Provider value={{ navigation, setPage }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext< MyContextType | undefined>(undefined);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

import React, { createContext } from "react";
type User = {
  id: string;
  username: string;
  email: string;
  img_url: string;
};

export const initialState: User = {
  id: "",
  username: "",
  email: "",
  img_url: "",
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<User | undefined>(undefined);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};

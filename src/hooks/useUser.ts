import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export type User = {
  firstName: string;
  lastName: string;
  password: string;
  mobile: string;
};

export const useUser = () => {
  const {getItem} = useLocalStorage()
  const storedUser = getItem('user')
  const parsedUser = storedUser && JSON.parse(storedUser)   
  const [user, setUser] = useState<User | null>(parsedUser);
  const { setItem, removeItem } = useLocalStorage();

  const addUser = (user: User) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    removeItem("user");
  };
  return { user, addUser, removeUser };
};
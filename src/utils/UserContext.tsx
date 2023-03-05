import { createContext } from "react";

export type UserContent = {
  user: any;
  setUser: (user: any) => void;
};

export const UserContext = createContext<UserContent>({
  user: {}, // set a default value
  setUser: () => {
    {
      /* do nothing */
    }
  },
});

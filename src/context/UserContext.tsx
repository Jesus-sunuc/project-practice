import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
  type FC,
} from "react";

// 1. Define the User type
type User = {
  name: string;
  registered: string;
} | null;

// 2. Create a typed context
export const UserContext = createContext<User>(null);

// 3. Define props for the provider
interface UserContextProviderProps {
  children: ReactNode;
}

// 4. Create the provider component
export const UserContextProvider: FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    setUser({
      name: "Jesus Sunuc",
      registered: "22/03/2023",
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

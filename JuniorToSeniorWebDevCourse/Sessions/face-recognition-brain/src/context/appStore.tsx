import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { User } from '../interfaces/auth.interface';

interface Store {
  isProfileOpen: boolean;
  setIsProfileOpen: Dispatch<SetStateAction<boolean>>;
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

export const AppStore = createContext<Store>({
  isProfileOpen: false,
  setIsProfileOpen: () => {},
  user: undefined,
  setUser: () => {},
});
const AppProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <AppStore.Provider value={{ isProfileOpen, setIsProfileOpen, user, setUser }}>
      {children}
    </AppStore.Provider>
  );
};

export default AppProvider;

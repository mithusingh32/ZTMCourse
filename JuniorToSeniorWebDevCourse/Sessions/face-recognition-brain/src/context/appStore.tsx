import {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";

interface Store {
  isProfileOpen: boolean;
  setIsProfileOpen: Dispatch<SetStateAction<boolean>>
}

export const AppStore = createContext<Store>({
  isProfileOpen: false,
  setIsProfileOpen: () => {}
});
const AppProvider = ({children}: { children: JSX.Element | JSX.Element[] }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    console.log(isProfileOpen)
  }, [isProfileOpen])

  return (
    <AppStore.Provider value={{isProfileOpen , setIsProfileOpen}}>
      {children}
    </AppStore.Provider>
  )
}

export default AppProvider;

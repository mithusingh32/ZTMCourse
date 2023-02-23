import React, {Dispatch, SetStateAction} from 'react'
import Logo from '../logo/logo.component';
import { User } from '../../interfaces/auth.interface';
import ProfileIcon from "../profile/profile-icon.component";

const Navigation = (props: {
  onRouteChange: (route: string) => void;
  handleSignOut: (user: User | undefined) => void;
  setIsProfileOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleSignOut = () => {
    props.handleSignOut(undefined);
    props.onRouteChange('signin');
  };
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Logo />
      <ProfileIcon handleSignOut={handleSignOut} />
    </nav>
  );
};

export default Navigation;

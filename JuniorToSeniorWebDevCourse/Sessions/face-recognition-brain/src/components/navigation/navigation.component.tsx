import React from 'react'
import Logo from '../logo/logo.component';
import { User } from '../../interfaces/auth.interface';

const Navigation = (props: {
  onRouteChange: (route: string) => void;
  handleSignOut: (user: User | undefined) => void;
}) => {
  const handleSignOut = () => {
    props.handleSignOut(undefined);
    props.onRouteChange('signin');
  };
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Logo />
      <p className="f3 link dim black underline pa3 pointer" onClick={handleSignOut}>
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;

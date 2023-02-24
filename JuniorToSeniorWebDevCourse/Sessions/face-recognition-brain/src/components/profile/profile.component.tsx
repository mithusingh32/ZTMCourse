import { User } from '../../interfaces/auth.interface';
import { useContext, useEffect } from 'react';
import { AppStore } from '../../context/appStore';
import UpdateInfoForm from './update-user-info.component';
import './profile.css';

const Profile = ({ user }: { user?: User }) => {
  const { isProfileOpen, setIsProfileOpen } = useContext(AppStore);

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key == 'Escape') setIsProfileOpen(false);
  };

  useEffect(() => {
    console.log(isProfileOpen);
    if (isProfileOpen) {
      window.addEventListener('keydown', handleEscapeKey);
    }
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [isProfileOpen]);

  return (
    <article
      className="bg-white br3 pa3 pa4-ns mv3 ba b--black-10"
      style={{ minWidth: '27rem' }}
    >
      <div
        color={'f1'}
        style={{ position: 'absolute', left: '95%', top: '5%', cursor: 'pointer' }}
        onClick={() => {
          setIsProfileOpen(false);
        }}
      >
        <div style={{ width: '100px' }}>X</div>
      </div>
      <div className="tc">
        <h1 className="f2">{user?.name}</h1>
      </div>
      <div className={'f4'}>Images Processed: {user?.entries}</div>
      <div>Email: {user?.email}</div>
      <div>Joined: {user?.joined.toString()}</div>
      <UpdateInfoForm />
    </article>
  );
};

export default Profile;

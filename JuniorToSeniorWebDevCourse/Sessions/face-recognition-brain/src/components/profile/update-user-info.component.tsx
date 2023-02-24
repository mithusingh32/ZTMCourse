import { useState } from 'react';
import {
  validatePassword,
  validateReEntryOfPassword,
} from '../../util/form-validator.utils';

const UpdateInfoForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEntryPassword, setReEntryPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordReEntryError, setPasswordReEntryError] = useState(false);

  const handleUserInfoUpdate = () => {};

  return (
    <form onSubmit={handleUserInfoUpdate} method="get" acceptCharset="utf-8">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
        <div className="mt3">
          <label className="db fw4 lh-copy f6" htmlFor="email-address">
            Email address
          </label>
          <input
            className="pa2 input-reset ba bg-transparent w-100 measure"
            type="email"
            name="email-address"
            id="email-address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt3">
          <label className="db fw4 lh-copy f6" htmlFor="password">
            Password{'  '}
            {passwordError ? <span className="red pt2">{'Weak Password'}</span> : <></>}
          </label>
          <input
            className="b pa2 input-reset ba bg-transparent w-100"
            type="password"
            name="password1"
            id="password1"
            onChange={(e) =>
              validatePassword(e.target.value, setPasswordError, setPassword)
            }
          />
        </div>
        <div className="mt3">
          <label className="db fw4 lh-copy f6" htmlFor="password2">
            Enter Password Again {'  '}
            {passwordReEntryError ? (
              <span className="red pt2">{"Passwords Don't Match"}</span>
            ) : (
              <></>
            )}
          </label>
          <input
            className="b pa2 input-reset ba bg-transparent w-100"
            type="password"
            name="password2"
            id="password2"
            disabled={password == '' || passwordError}
            onChange={(e) => {
              validateReEntryOfPassword(
                password,
                e.target.value,
                setReEntryPassword,
                setPasswordReEntryError,
              );
            }}
          />
        </div>
      </fieldset>
      <div className="mt3">
        <input
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
          type="submit"
          value="update"
        />
      </div>
    </form>
  );
};

export default UpdateInfoForm;

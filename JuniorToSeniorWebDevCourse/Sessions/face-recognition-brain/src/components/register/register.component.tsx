import Logo from '../logo/logo.component';
import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';
import { User } from '../../interfaces/auth.interface';
import { validatePassword } from '../../util/form-validator.utils';

const Register = (props: {
  onRouteChange: (route: string) => void;
  newUser: Dispatch<SetStateAction<User | undefined>>;
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const validateRegPassword = (value: string) => {
    validatePassword(value, setPasswordError, setPassword);
  };

  const handleFormSubmit = (event: SyntheticEvent) => {
    if (!passwordError) {
      event.preventDefault();
      const postData = {
        name,
        email,
        password,
      };
      fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((resp) => resp.json())
        .then((json) => {
          props.newUser(json.user);
          props.onRouteChange('home');
        });
    }
  };

  return (
    <>
      <Logo className="center" />
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-dark-blue">
        <main className="pa4 black-80">
          <form className="measure white" onSubmit={handleFormSubmit}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 center">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={(event) => validateRegPassword(event.target.value)}
                />
                {passwordError ? <div className="red pt2">{'Weak Password'}</div> : <></>}
              </div>
            </fieldset>
            <div>
              <input
                className=" b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </main>
      </article>
    </>
  );
};

export default Register;

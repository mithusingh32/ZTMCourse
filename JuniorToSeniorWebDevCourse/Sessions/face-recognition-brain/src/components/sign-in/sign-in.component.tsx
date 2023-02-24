import Logo from '../logo/logo.component';
import { SyntheticEvent, useContext, useState } from 'react';
import { User } from '../../interfaces/auth.interface';
import { AppStore } from '../../context/appStore';

interface SignInResponse {
  status: string;
  user: User;
}

const SignIn = (props: {
  onRouteChange: (route: string) => void;
}) => {
  const { setUser } = useContext(AppStore);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSignIn = (event: SyntheticEvent) => {
    event.preventDefault();
    const data = { email, password };
    fetch('http://localhost:3000/signin', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((json: SignInResponse) => {
        if (json.status === 'success') {
          setUser(json.user);
          props.onRouteChange('home');
        } else {
          setError(true);
        }
      })
      .catch((e) => {
        console.log('sign in error', e);
      });
  };

  const ErrorMessage = () => {
    if (error) return <p className="red">Email or Password Is Incorrect</p>;

    return <></>;
  };

  return (
    <>
      <Logo className="center" />
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-dark-blue">
        <main className="pa4 black-80">
          <ErrorMessage />
          <form className="measure white" onSubmit={handleSignIn}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
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
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3 ">
              <p
                onClick={() => props.onRouteChange('register')}
                className="f6 link dim black db white"
              >
                Register
              </p>
            </div>
          </form>
        </main>
      </article>
    </>
  );
};

export default SignIn;

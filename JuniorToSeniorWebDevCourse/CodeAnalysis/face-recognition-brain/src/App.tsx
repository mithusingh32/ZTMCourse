import { useEffect, useState } from 'react';
import './App.css';
import 'tachyons';
// @ts-ignore
import Clarifai from 'clarifai';
import ParticlesBg from 'particles-bg';
import Navigation from './components/navigation/navigation.component';
import ImageLinkForm from './components/image-link-form/image-link.form';
import Rank from './components/rank/rank.component';
import FaceRecognition from './components/face-recognition/face-recognition.component';
import { Box, ClarifaiResponse } from './interfaces/clarifai.interface';
import SignIn from './components/sign-in/sign-in.component';
import Register from './components/register/register.component';
import { User } from './interfaces/auth.interface';

const App = () => {
  const [input, setInput] = useState('');
  const [user, setUser] = useState<User>();
  const [boundingBox, setBoundingBox] = useState<Box[]>([]);
  const [route, setRoute] = useState('signin');

  // Reset boundingBox when url changes
  useEffect(() => {
    setBoundingBox([]);
  }, [input]);

  /**
   * Loads the user into the app
   */
  const loadUser = (user: User) => {
    setUser(user);
  };

  /**
   * Calls the Clarrifai end point for detecting faces
   */
  const detectFace = () => {
    if (input && input !== '') {
      if (user) {
        fetch('http://localhost:3000/image', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: user.email, id: user.id, url: input }),
        })
          .then((resp) => resp.json())
          .then((json) => {
            const user = json.user;
            calculateFaceLocation(json.api);
            setUser({ ...user, entries: user.entries });
          });
      }
    }
  };

  /**
   * Calculates the face location in reference to the image
   * @param resp - Response from Clarifai endpoint
   */
  const calculateFaceLocation = (resp: ClarifaiResponse) => {
    if (resp && resp.outputs) {
      // const face = resp.outputs[0].data.regions[0].region_info.bounding_box;
      const faces = resp.outputs[0].data.regions;
      const image = document.getElementById('inputImage');

      // Get Bounding box for each face
      faces.forEach((fc) => {
        const face = fc.region_info.bounding_box;
        if (image) {
          const width = image.clientWidth;
          const height = image.clientHeight;
          const box = {
            leftCol: face.left_col * width,
            topRow: face.top_row * height,
            rightCol: width - face.right_col * width,
            bottomRow: height - face.bottom_row * height,
          };
          // We need to calculate the box we need to create from the % provided by Clarifai
          setBoundingBox((oldState) => [...oldState, box]);
        }
      });
    }
  };

  /**
   * Changes the route we're currenty on
   * @param route
   */
  const onRouteChange = (route: string) => {
    setRoute(route);
  };
  return (
    <div className="App">
      <ParticlesBg bg={true} type={'cobweb'} color="#ffffff" />
      {route === 'home' ? (
        <div className="wrapper">
          <div className={`test ${route === 'home' ? 'test1' : ''}`}>
            <Navigation onRouteChange={onRouteChange} handleSignOut={setUser} />
            <Rank rank={user?.entries} />
            <ImageLinkForm handleInputChange={setInput} detectFace={detectFace} />
            <FaceRecognition image={input} boundingBox={boundingBox} />
          </div>
        </div>
      ) : route === 'signin' ? (
        <SignIn onRouteChange={onRouteChange} onSignIn={loadUser} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;

import './face-recognition.styles.css';
import { Box } from '../../interfaces/clarifai.interface';
import {useEffect, useState} from 'react';

const FaceRecognition = (props: { image: string; boundingBox?: Box }) => {
  const [imageStatus, setImageStatus] = useState<
    'no image' | 'loading' | 'error' | 'loaded'
  >('no image');

  // reset the image state when image url changes
  useEffect(() => {
    setImageStatus('loading')
  }, [props.image]);


  return (
    <div className="center ma">
      <div className="absolute mt2">
        {props.image === '' || props.image === undefined ? (
          <p className="white f4 pa7">no image</p>
        ) : (
          <>
            {imageStatus !== 'error' ? (
              <img
                id="inputImage"
                src={props.image}
                alt="image that is use to detect faces"
                width="500px"
                height="auto"
                style={{ color: 'white' }}
                onError={() => setImageStatus('error')}
                onLoad={() => setImageStatus('loaded')}
              />
            ) : (
              <p className="red f4 pa7">Error Loading Image</p>
            )}
            {props.boundingBox !== undefined ? (
              <div
                className="bounding-box"
                style={{
                  top: props.boundingBox.topRow,
                  right: props.boundingBox.rightCol,
                  bottom: props.boundingBox.bottomRow,
                  left: props.boundingBox.leftCol,
                }}
              ></div>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FaceRecognition;

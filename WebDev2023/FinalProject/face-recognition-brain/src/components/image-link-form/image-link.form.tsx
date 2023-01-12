import './image-ling.styles.css';
import { Dispatch, SetStateAction } from 'react';

const ImageLinkForm = (props: {
  handleInputChange: Dispatch<SetStateAction<string>>;
  detectFace: any;
}) => {
  return (
    <div>
      <p className="white f3">{'This Magic Brain Will Detect Faces'}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={(event) => props.handleInputChange(event.currentTarget.value)}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue"
            onClick={props.detectFace}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

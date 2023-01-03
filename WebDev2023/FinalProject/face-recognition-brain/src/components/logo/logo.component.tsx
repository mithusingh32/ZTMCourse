import Tilt from 'react-parallax-tilt';
import logo from '../../assets/light-bulb.png';
import './logo.styles.css';

const Logo = (props: {className?: string}) => {
  return (
    <div className={`Tilt ma4 mt0 ${props.className}`} style={{ height: '150px', width: '150px' }}>
      <Tilt className="tilt">
        <div style={{ height: '150px', width: '150px' }}>
          <img src={logo} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

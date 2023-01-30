import {CSSProperties} from "react";

const Scroll = ({ children } : {children: JSX.Element}) => {
  const styles: CSSProperties = {
    overflowY: "scroll",
    height: "50vh",
  };

  return <div style={styles}>{children}</div>;
};

export default Scroll;

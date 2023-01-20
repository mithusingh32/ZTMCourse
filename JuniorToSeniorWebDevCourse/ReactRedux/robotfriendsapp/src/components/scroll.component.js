const Scroll = ({ children }) => {
  const styles = {
    overflowY: "scroll",
    height: "50vh",
  };

  return <div style={styles}>{children}</div>;
};

export default Scroll;

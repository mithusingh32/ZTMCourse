const Rank = (props: {rank?: number}) => {
  console.log(props.rank);
  return (
    <div>
      <div className="white f3">You have used this app...</div>
      <div className="white f1">{`${props.rank} times.`}</div>
    </div>
  );
};

export default Rank;

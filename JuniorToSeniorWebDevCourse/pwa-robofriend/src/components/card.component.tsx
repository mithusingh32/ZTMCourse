// You can either use props object as such: Car(props) or you can do what I have done below
// deconstruct the props objects into their variables. This makes it easier to ready when
// not using typescript
const Card = ({
  id,
  name,
  email,
}: {
  id: number;
  name: string;
  email: string;
}) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt={"robot"} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;

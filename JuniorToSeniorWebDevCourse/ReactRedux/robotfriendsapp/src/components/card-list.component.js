import Card from "./card.component";
import { connect } from "react-redux";
const CardList = ({ data, searchFilter }) => {
  const cardArray = data
    .filter((dt) => {
      return (
        dt.name.toLowerCase().includes(searchFilter) ||
        dt.email.toLowerCase().includes(searchFilter)
      );
    })
    .map((rob) => {
      return (
        <Card id={rob.id} name={rob.name} email={rob.email} key={rob.id} />
      );
    });
  return (
    <div>
      {cardArray}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchFilter: state.filter.filter_string,
  };
};
export default connect(mapStateToProps)(CardList);

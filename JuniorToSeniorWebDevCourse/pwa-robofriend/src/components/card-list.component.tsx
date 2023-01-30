import Card from "./card.component.js";
import {connect, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {Data} from "../interfaces/store.interfaces";

const CardList = ({searchFilter}: {searchFilter: string}) => {
  const data = useSelector((state: RootState) => state.data.data);
  const cardArray = data
    .filter((dt: Data) => {
      return (
        dt.name.toLowerCase().includes(searchFilter) ||
        dt.email.toLowerCase().includes(searchFilter)
      );
    })
    .map((rob: Data) => {
      return (
        <Card id={rob.id} name={rob.name} email={rob.email} key={rob.id} />
      );
    });
  return <div>{cardArray}</div>;
};

const mapStateToProps = (state: RootState) => {
  return {
    searchFilter: state.filter.filter_string,
  };
};
export default connect(mapStateToProps)(CardList);

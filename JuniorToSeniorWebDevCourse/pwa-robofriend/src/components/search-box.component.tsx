import { useDispatch } from "react-redux";
import { updateFilter } from "../store/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={"pa2"}>
      <input
        type={"search"}
        placeholder={"search robots.."}
        className={"pa3 ba b--green bg-lightest-blue"}
        onChange={(event) => {
          // We need to you an anonymous function because we are passing
          // an argument to the handleFilter function that is passed
          // in from the App
          dispatch(updateFilter(event.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;

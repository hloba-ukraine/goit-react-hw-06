import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
export default function SearchBox() {
  const selectNameFilter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const onChangeFilter = (event) => {
    const actions = changeFilter(event.target.value);
    dispatch(actions);
  };
  return (
    <div>
      <h3>Find contacts by name </h3>
      <input
        type="text"
        placeholder="...Search"
        value={selectNameFilter}
        onChange={onChangeFilter}
      ></input>
    </div>
  );
}

import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
export default function SearchBox() {
  const selectFilter = useSelector(selectNameFilter);
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
        value={selectFilter}
        onChange={onChangeFilter}
      ></input>
    </div>
  );
}

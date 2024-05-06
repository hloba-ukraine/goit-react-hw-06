import { NavLink } from "react-router-dom";

import { selectUserData } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";

export default function UserMenu({ style }) {
  const dispatch = useDispatch();

  const userData = useSelector(selectUserData);
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <NavLink to="/contacts" className={style}>
        Contacts
      </NavLink>
      <>
        <span>Hello {userData.name}</span>
        <button onClick={onLogout} type="button">
          Logout
        </button>
      </>
    </>
  );
}

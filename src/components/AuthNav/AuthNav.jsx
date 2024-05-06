import { NavLink } from "react-router-dom";

export default function AuthNav({ style }) {
  return (
    <>
      <NavLink to="/login" className={style}>
        Login
      </NavLink>
      <NavLink to="/register" className={style}>
        Registration
      </NavLink>
    </>
  );
}

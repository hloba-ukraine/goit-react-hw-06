import { NavLink } from "react-router-dom";

export default function Navigation({ style }) {
  return (
    <>
      <NavLink to="/" className={style}>
        Home
      </NavLink>
    </>
  );
}

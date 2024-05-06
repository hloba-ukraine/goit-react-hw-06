import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import clsx from "clsx";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";
export default function AppBar() {
  const isSignedIn = useSelector(selectIsSignedIn);
  const addActiveClass = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });
  return (
    <header>
      <nav className={css.nav}>
        <Navigation style={addActiveClass} />
        {isSignedIn ? (
          <UserMenu style={addActiveClass} />
        ) : (
          <AuthNav style={addActiveClass} />
        )}
      </nav>
    </header>
  );
}

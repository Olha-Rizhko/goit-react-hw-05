import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";
import clsx from "clsx";

const createnavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.navigation}>
          <div className={css.pageNav}>
            <NavLink to="/" className={createnavLinkClass}>
              <div>Home</div>
            </NavLink>
            <NavLink to="/movies" className={createnavLinkClass}>
              Movies
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";

import css from "./GoBackBtn.module.css";

export default function GoBackBtn({ to, children }) {
  return (
    <Link to={to} className={css.button}>
      {children}
    </Link>
  );
}

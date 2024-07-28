import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <main>
      <section className={css.section}>
        <div className={css.container}>
          <p className={css.text}>Sorry, page not found.</p>
          <p className={css.text}>
            You can return to the
            <Link to="/" className={css.link}>
              home page
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

import css from "./Error.module.css";

export default function Error() {
  return (
    <main>
      <div className={css.container}>
        <div className={css.errorBox}>
          <p className={css.text}>Oops, something went wrong.</p>
          <p className={css.text}>Please reload this page.</p>
        </div>
      </div>
    </main>
  );
}

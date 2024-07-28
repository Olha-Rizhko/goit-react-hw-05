import toast from "react-hot-toast";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

import css from "./SearchForm.module.css";

const notify = () => toast.error("Please enter your query");

export default function SearchForm({ onSubmit, searchValue }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchValue = e.target.elements.search.value;

    if (searchValue === "") {
      notify();
      return;
    }

    onSubmit(searchValue);

    inputRef.current.style.focus = false;
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        name="search"
        placeholder="Search your movie"
        autoComplete="off"
        defaultValue={searchValue}
        autoFocus
        className={css.search}
      />
      <button type="submit" className={css.button}>
        <RiSearchLine size={24} color="#2a4362" />
      </button>
    </form>
  );
}

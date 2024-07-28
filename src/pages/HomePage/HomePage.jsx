import { useEffect, useState, useRef } from "react";
import { getAllMovies } from "../../tmdb-api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import css from "./HomePage.module.css";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const prevPageRef = useRef();

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const handleFetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await getAllMovies(page);

        setMovies((prevMovies) => {
          if (prevPageRef.current && prevPageRef.current !== page - 1) {
            return [...data.results];
          }
          return [...prevMovies, ...data.results];
        });

        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (prevPageRef.current !== page) {
      handleFetchMovies();
    }
    prevPageRef.current = page;
  }, [page]);

  return (
    <main>
      <section className={css.section}>
        <div className={css.container}>
          {movies.length > 0 && <MovieList movies={movies} />}
          {error && <Error />}
          {loading && <Loader />}
          {page < totalPages && !loading && (
            <LoadMoreBtn onLoadMore={handleLoadMore} />
          )}
        </div>
      </section>
    </main>
  );
}

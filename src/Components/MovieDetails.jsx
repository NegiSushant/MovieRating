import { useEffect, useRef, useState } from "react";
import { useKey } from "../CustomHooks/useKey";
import Loader from "./Loader";
import StarRating from "./StarRating";

const KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const isTop = imdbRating > 8;
  console.log(isTop);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      // runtime: runtime?.split(" ")?.[0], // fix runtime
      userRating,
      countRatingDecision: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useKey("Escape", onCloseMovie);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg h-full">
      {isloading ? (
        <Loader />
      ) : (
        <>
          <header className="flex gap-4 items-start">
            <button
              onClick={onCloseMovie}
              className="text-lg font-bold text-yellow-400 hover:text-yellow-500 transition"
            >
              &larr; Back
            </button>
            <img
              src={poster}
              alt={`Poster of ${title} movie`}
              className="w-48 h-72 object-cover rounded-lg shadow-md"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-sm text-gray-400">
                {released} &bull; {runtime}
              </p>
              <p className="text-sm italic text-gray-500">{genre}</p>
              <p className="text-yellow-400 font-medium">
                ⭐ {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section className="mt-4 space-y-4">
            <div className="flex flex-col gap-2">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                    color="#f1c40f"
                  />
                  {userRating > 0 && (
                    <button
                      onClick={handleAdd}
                      className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
                    >
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p className="text-green-400">
                  You rated this movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>

            <p className="text-sm italic text-gray-300">{plot}</p>
            <p className="text-sm">🎭 Starring: {actors}</p>
            <p className="text-sm">🎬 Directed by: {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

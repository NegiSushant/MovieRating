import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list-none p-0 m-0">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

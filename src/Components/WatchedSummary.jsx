const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="mb-2 text-lg font-semibold text-gray-200">
        Movies you watched
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-wrap">
        <p className="flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-300">
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p className="flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-300">
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p className="flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-300">
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p className="flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-300">
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}

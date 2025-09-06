export default function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li className="grid grid-cols-[4rem_1fr_auto] grid-rows-[auto_auto] gap-x-4 py-3 border-b border-gray-700 relative hover:bg-gray-800 transition-colors">
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        className="w-full h-20 object-cover rounded"
      />

      <h3 className="text-white text-sm sm:text-base font-medium col-span-2">
        {movie.title}
      </h3>

      <div className="flex items-center gap-4 col-span-2">
        <p className="flex items-center gap-1 text-xs sm:text-sm text-yellow-400 font-medium">
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p className="flex items-center gap-1 text-xs sm:text-sm text-yellow-400 font-medium">
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p className="flex items-center gap-1 text-xs sm:text-sm text-gray-400">
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          onClick={() => onDeleteWatched(movie.imdbID)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold hover:bg-red-600 transition-colors"
        >
          ×
        </button>
      </div>
    </li>
  );
}

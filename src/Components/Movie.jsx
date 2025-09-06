export default function Movie({ movie, onSelectMovie }) {
  return (
    <li
      onClick={() => onSelectMovie(movie.imdbID)}
      className="flex items-center gap-4 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="w-32 h-48 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-white text-base sm:text-lg font-medium">
          {movie.Title}
        </h3>
        <p className="text-gray-400 text-sm">
          <span>🗓</span> {movie.Year}
        </p>
      </div>
    </li>
  );
}

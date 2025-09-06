export default function NumResults({ movies }) {
  return (
    <p className="text-base sm:text-lg text-purple-100 whitespace-nowrap flex-shrink-0">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

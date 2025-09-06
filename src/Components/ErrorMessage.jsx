export default function ErrorMessage({ message }) {
  return (
    <p className="text-center text-lg sm:text-2xl p-12 text-red-500">
      {message}
    </p>
  );
}

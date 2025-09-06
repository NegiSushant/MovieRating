export default function NavBar({ children }) {
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-purple-700 rounded-xl gap-4 md:gap-0">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <span className="text-3xl sm:text-4xl">🍿</span>
      <h1 className="text-xl sm:text-2xl font-semibold text-white">
        usePopcorn
      </h1>
    </div>
  );
}

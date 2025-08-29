export default function Navbar({ setLibraryStatus, libraryStatus }) {
  return (
    <nav className="flex flex-col">
      <h1 className="text-5xl py-4 font-semibold">
        Music{" "}
        <span className="bg-neutral-700 px-2 transform-3d text-orange-500  inline-block hover:skew-4 duration-300 ease-linear">
          <span className="hover:translate-z-3.5">Player</span>
        </span>{" "}
        React
      </h1>
      <button
        onClick={() => {
          setLibraryStatus(!libraryStatus);
        }}
      >
        <h4 className="text-2xl mb-4">Library</h4>
      </button>
    </nav>
  );
}

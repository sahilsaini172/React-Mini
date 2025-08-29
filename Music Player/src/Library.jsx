import LibrarySong from "./LibrarySong";

export default function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  setLibraryStatus,
  libraryStatus,
}) {
  return (
    <div className={`${libraryStatus ? "" : "hidden"} flex flex-col p-8 gap-4`}>
      <h2 className="text-white text-center text-3xl">All songs</h2>
      <div className="flex justify-center gap-4 p-4 bg-neutral-800 rounded-2xl">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            isPlaying={isPlaying}
            audioRef={audioRef}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
}

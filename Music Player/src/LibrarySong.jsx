export default function LibrarySong({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  id,
}) {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //active
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if song is playing
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div onClick={songSelectHandler} className="flex flex-col w-1/2">
      <img
        src={song.cover}
        alt={song.name}
        className="rounded-md object-cover aspect-square"
      />
      <div className="flex flex-col items-center text-center">
        <h3 className="text-sm text-orange-400 line-clamp-1">{song.name}</h3>
        <h4 className="text-xs">{song.artist}</h4>
      </div>
    </div>
  );
}

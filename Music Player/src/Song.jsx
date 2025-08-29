export default function Song({ currentSong }) {
  return (
    <div className="flex flex-col justify-center items-center w-1/3 gap-1">
      <img
        src={currentSong.cover}
        alt={currentSong.name}
        className="rounded-lg aspect-square object-cover"
      />
      <h2 className="text-xl mt-2 text-orange-400">{currentSong.name}</h2>
      <h3 className="text-sm">{currentSong.artist}</h3>
    </div>
  );
}

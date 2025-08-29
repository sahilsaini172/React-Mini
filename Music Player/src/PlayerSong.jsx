export default function Player({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  id,
  setSongs,
}) {
  const activeLibraryHandler = (nextSong) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextSong.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSongs);
    console.log("Active song updated from Player");
  };

  // event handler for range slider drag
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  // play or pause audio
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // format time helper
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  // skip track handler for forward and backward
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === "skip-forward") {
      let nextIndex = (currentIndex + 1) % songs.length;
      await setCurrentSong(songs[nextIndex]);
      activeLibraryHandler(songs[nextIndex]);
    }

    if (direction === "skip-back") {
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = songs.length - 1;
      }
      await setCurrentSong(songs[prevIndex]);
      activeLibraryHandler(songs[prevIndex]);
    }

    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex gap- w-full flex-col items-center">
      <div className="flex flex-col items-center text-center">
        <p className="text-sm text-neutral-400 w-full text-left mb-2">
          {getTime(songInfo.currentTime)}
        </p>
        <div className="flex flex-col items-center">
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            className="w-full h-1 text-orange-400 rounded-lg appearance-auto"
          />
          <div className=" p-2 mt-3 animate-track track w-[10px] h-[10px] border-t border-t-orange-500 rounded-full animate-spin"></div>

          <p className="text-right w-full text-sm mt-2">
            {songInfo.duration ? getTime(songInfo.duration) : "00:00"}
          </p>
        </div>
        <div className="flex items-center w-full gap-5">
          <div className="p-2  rounded-full bg-orange-500/25">
            <i
              onClick={() => skipTrackHandler("skip-back")}
              className="fa-solid fa-arrow-left"
            ></i>
          </div>
          {!isPlaying ? (
            <div className="p-4 rounded-full bg-orange-500">
              <i
                onClick={playSongHandler}
                className="fa-solid fa-circle-play"
              ></i>
            </div>
          ) : (
            <div className="p-4 rounded-full bg-orange-500">
              <i onClick={playSongHandler} className="fa-solid fa-pause"></i>
            </div>
          )}
          <div className="p-2 rounded-full bg-orange-500/25">
            <i
              onClick={() => skipTrackHandler("skip-forward")}
              className="fa-solid fa-arrow-right"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

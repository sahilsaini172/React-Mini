import { useState, useEffect } from "react";
export default function Main() {
  const [meme, setMeme] = useState({
    topText: "top text",
    bottomText: "bottom text",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: newMemeUrl,
    }));
  }

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="flex flex-col w-1/2 bg-neutral-800 p-6 gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-lg flex flex-col">
          Top Text
          <input
            onChange={handleChange}
            value={meme.topText}
            type="text"
            name="topText"
            placeholder="One does not simply"
            className="p-2 rounded-lg bg-neutral-700 placeholder:text-neutral-400"
          />
        </label>
        <label htmlFor="" className="text-lg flex flex-col">
          Bottom Text
          <input
            onChange={handleChange}
            value={meme.bottomText}
            type="text"
            name="bottomText"
            placeholder="Walk into Mordor"
            className="p-2 rounded-lg bg-neutral-700 placeholder:text-neutral-400"
          />
        </label>
        <button
          onClick={getMemeImage}
          className="p-3 bg-orange-500 rounded-xl my-2"
        >
          Get a new meme image
        </button>
      </div>
      <div className="flex flex-col">
        <span className="text-stroke-3 relative top-8 text-center font-bold uppercase text-2xl ">
          {meme.topText}
        </span>
        <img src={meme.imageUrl} />
        <span className="text-stroke-3 relative bottom-8 text-center font-bold uppercase text-2xl  ">
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
}

import { useState } from "react";

export default function Joke() {
  const [joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));
  };

  return (
    <div className="flex flex-col gap-4 mt-8">
      <button onClick={fetchApi} className="p-2 bg-orange-400 rounded-lg">
        Click to Generate Joke
      </button>
      <p className={!joke ? "hidden" : undefined}>"{joke}"</p>
    </div>
  );
}

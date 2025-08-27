import { useState } from "react";
import Joke from "./Joke";

function App() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="text-neutral-50 flex flex-col p-8 bg-neutral-800 rounded-2xl text-center w-[90%]">
        <h1 className="text-2xl">Joke Generator with React and Joke API</h1>
        <Joke />
      </div>
    </div>
  );
}

export default App;

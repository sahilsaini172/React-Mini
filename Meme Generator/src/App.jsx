import Header from "./Header";
import Main from "./main";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 flex flex-col justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center rounded-xl overflow-hidden ">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;

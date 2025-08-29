import Translator, {Spinner} from "./translator";

export default function App() {
  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Translator />
      <Spinner/>
    </div>
  );
}

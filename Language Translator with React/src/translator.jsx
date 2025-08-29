import { useState } from "react";
import languageList from "./language.json";

export default function Translator() {
  const [inputFormat, setInputFormat] = useState("en");
  const [outputFormat, setoutputFormat] = useState("hi");
  const [translatedText, setTranslatedText] = useState("translation");
  const [inputText, setInputText] = useState("");

  const handleReverseLanguage = () => {
    const value = inputFormat;
    setInputFormat(outputFormat);
    setoutputFormat(value);
    setInputText("");
    setTranslatedText("Translation");
  };

  const handleRemoveInputText = () => {
    setInputText("");
    setTranslatedText("Translation");
  };

  const handleTranslate = async () => {
    if (!inputText || !inputFormat || !outputFormat) return;
    <Spinner display="block" />;

    const url = ``;
  };

  return <h1>Hi</h1>;
}

export function Spinner(props) {
  return (
    <div
      className={`border-8 border-orange-500/30 border-t-8 border-t-orange-400 rounded-full w-[40px] h-[40px] animate-spin ${props.display} `}
    ></div>
  );
}

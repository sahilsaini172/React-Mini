import { useState } from "react";

export default function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
    chemistry: false,
    biology: true,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOptions, setSelectedOptions] = useState("");
  const [about, setAbout] = useState("");

  return (
    <div>
      <h1>React Forms</h1>
    </div>
  );
}

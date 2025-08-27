import { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    physics: false,
    maths: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      fName,
      lName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFName("");
    setLName("");
    setEmail("");
    setContact("");
    setAbout("");
    setGender("male");
    setSubjects({ english: true, physics: false, maths: false });
    setResume("");
    setUrl("");
    setSelectedOption("");
  };
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 p-10 flex flex-col justify-center items-center ">
      <fieldset className="p-8 rounded-2xl bg-neutral-800 flex flex-col items-center">
        <h1 className="text-3xl mb-4">React Form</h1>
        <form
          action="#"
          method="get"
          className="flex flex-col text-lg *:placeholder:text-base gap-1"
        >
          <label htmlFor="fname" className="mt-2">
            First Name*
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            placeholder="Enter First Name"
            required
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400 px-2 py-1 rounded-lg"
          />
          <label className="mt-2" htmlFor="lname">
            Last Name*
          </label>
          <input
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400 px-2 py-1 rounded-lg"
            type="text"
            name="lname"
            id="lname"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <label className="mt-2" htmlFor="email">
            Email*
          </label>
          <input
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400 px-2 py-1 rounded-lg"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <label className="mt-2" htmlFor="Contact">
            Phone Number*
          </label>
          <input
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400 px-2 py-1 rounded-lg"
            type="tel"
            name="Contact"
            id="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Phone Number"
            required
          />
          <label className="mt-2" htmlFor="gender">
            Gender*
          </label>
          <input
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400 px-2 py-1 rounded-lg"
            type="radio"
            name="gender"
            id="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400  rounded-lg"
            type="radio"
            name="gender"
            id="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400  rounded-lg"
            type="radio"
            name="gender"
            id="gender"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          <span>Other</span>
          <label className="mt-2" htmlFor="subject">
            Your Subjects
          </label>
          <input
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400  rounded-lg"
            type="checkbox"
            name="subject"
            id="english"
            checked={subjects.english === true}
            onChange={(e) => handleSubjectChange("english")}
          />
          English
          <input
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400  rounded-lg"
            type="checkbox"
            name="subject"
            id="maths"
            checked={subjects.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Maths
          <input
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400  rounded-lg"
            type="checkbox"
            name="subject"
            id="physics"
            checked={subjects.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          />
          Physics
          <label className="mt-2" htmlFor="resume">
            Upload Resume*
          </label>
          <input
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400  rounded-lg"
            type="file"
            name="resume"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Upload Your Resume"
            required
          />
          <label className="mt-2" htmlFor="url">
            Your Portfolio link*
          </label>
          <input
            className="bg-neutral-700 text-neutral-50 placeholder:text-neutral-400 rounded-lg"
            type="url"
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <label className="mt-2" htmlFor="skills">
            Add Skills
          </label>
          <select
            name="skills"
            id="skills"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled selected={selectedOption === ""}>
              Select Skill
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>

              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>
          <label htmlFor="about">About*</label>
          <textarea
            name="about"
            id="about"
            cols={30}
            rows={10}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Tell us about yourself"
            required
          ></textarea>
          <button type="reset" value="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" value="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;

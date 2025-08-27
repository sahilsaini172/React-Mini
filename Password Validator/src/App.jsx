import { useState } from "react";
import validator from "validator";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Strong Password");
    } else {
      setErrorMessage("Password Not Strong Enough");
    }
  };

  return (
    <div className="flex flex-col text-neutral-50 min-h-screen justify-center items-center">
      <div className="flex flex-col p-8 bg-neutral-800 rounded-2xl gap-4">
        <h1 className="text-2xl text-center">Password Validator</h1>
        <main>
          <label htmlFor="password">Enter Password: </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="*******"
            className="p-2 bg-neutral-700 rounded-lg ml-2 text-neutral-200"
            onChange={(e) => validate(e.target.value)}
          />
          {errorMessage === "" ? null : (
            <p
              className={`mt-4 text-center font-semibold ${
                errorMessage == "Strong Password"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {errorMessage}
            </p>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;

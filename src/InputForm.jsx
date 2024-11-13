import LabelInput from "./LabelInput";
import { useState } from "react";

function InputForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const updateFirstName = (name) => {
    setFirstname(name);
  };

  return (
    <div className="form-group">
      <LabelInput name="FirstName : " />
      <input
        type="text"
        className="form-input"
        value={firstname}
        onChange={(e) => updateFirstName(e.target.value)}
        placeholder="Enter your first name"
      />
      <LabelInput name="LastName : " />{" "}
      <input
        type="text"
        className="form-input"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        placeholder="Enter your last name"
      />
      <LabelInput name="Email : " />
      <input
        type="email"
        className="form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
    </div>
  );
}
export default InputForm;

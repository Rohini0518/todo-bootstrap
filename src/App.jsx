import InputForm from "./Inputform";
import PasswordVerification from "./assets/PasswordVerification";
import "./App.css";

function App() {
  return (
    <div className="form-container">
      <h2>SignUp Form</h2>
      <InputForm />
      <PasswordVerification />
    </div>
  );
}

export default App;

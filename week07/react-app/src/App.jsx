import { useState } from "react";
import FormComponent from "./components/FormComponent";
import Display from "./components/Display";

function App() {
  const [studentData, setStudentData] = useState(null);

  function handleFormSubmit(data) {
    setStudentData(data);
  }

  return (
    <div className="container">
      <h1>React Experiment 7</h1>

      <FormComponent onSubmit={handleFormSubmit} />

      {studentData && <Display data={studentData} />}
    </div>
  );
}

export default App;
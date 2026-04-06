import { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import Display from "./components/Display";

function App() {
  const [studentData, setStudentData] = useState(null);

  function handleFormSubmit(data) {
    setStudentData(data);
  }

  return (
    <div className="page-shell">
      <div className="content-grid">
        <section className="hero-card">
          <div className="hero-badge">React 7</div>
          <h1>Premium React Forms</h1>
          <p>
            Build with components, props, state, events and modern UI polish in a
            sleek 3D interface.
          </p>
        </section>

        <main className="workspace">
          <section className="form-surface">
            <FormComponent onSubmit={handleFormSubmit} />
          </section>

          <section className="preview-surface">
            {studentData ? (
              <Display data={studentData} />
            ) : (
              <div className="empty-state">
                <div className="empty-icon">📄</div>
                <h2>No student data yet</h2>
                <p>Complete the form to preview student details in a 3D dashboard card.</p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

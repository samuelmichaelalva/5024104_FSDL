import { useState } from "react";

function FormComponent({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    subjects: []
  });

  const subjectOptions = ["HTML", "CSS", "JavaScript", "React"];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckbox(e) {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      subjects: checked
        ? [...prev.subjects, value]
        : prev.subjects.filter((subject) => subject !== value)
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Please fill in the name and email fields.");
      return;
    }
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <div className="form-heading">
        <span className="form-title">Student Enrollment</span>
        <p className="form-subtitle">
          Use the form below to capture student details and subjects.
        </p>
      </div>

      <div className="field-row">
        <label className="field-label">
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter student name"
            className="field-input"
          />
        </label>

        <label className="field-label">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter student email"
            className="field-input"
          />
        </label>
      </div>

      <label className="field-label">
        Course
        <input
          type="text"
          name="course"
          value={form.course}
          onChange={handleChange}
          placeholder="Enter course name"
          className="field-input"
        />
      </label>

      <div className="field-label checkbox-group">
        <span>Select subjects</span>
        <div className="checkbox-grid">
          {subjectOptions.map((sub) => (
            <label key={sub} className="checkbox-chip">
              <input
                type="checkbox"
                value={sub}
                checked={form.subjects.includes(sub)}
                onChange={handleCheckbox}
              />
              {sub}
            </label>
          ))}
        </div>
      </div>

      <div className="button-row">
        <button type="submit" className="primary-button">
          Submit Student
        </button>
      </div>
    </form>
  );
}

export default FormComponent;

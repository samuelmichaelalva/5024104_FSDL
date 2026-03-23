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
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCheckbox(e) {
    const value = e.target.value;

    if (e.target.checked) {
      setForm({ ...form, subjects: [...form.subjects, value] });
    } else {
      setForm({
        ...form,
        subjects: form.subjects.filter((s) => s !== value)
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Fill all fields");
      return;
    }

    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h2>Student Form</h2>

      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="course" placeholder="Course" onChange={handleChange} />

      <h4>Select Subjects:</h4>

      {subjectOptions.map((sub, index) => (
        <label key={index}>
          <input type="checkbox" value={sub} onChange={handleCheckbox} />
          {sub}
        </label>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
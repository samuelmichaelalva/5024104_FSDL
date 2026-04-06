import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddStudent({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: '',
    grade: 'A',
    subjects: [],
    notes: ''
  });
  const nameRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setForm({
      ...form,
      subjects: checked
        ? [...form.subjects, value]
        : form.subjects.filter(s => s !== value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    navigate('/students');
  };

  return (
    <div className="add-student">
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input ref={nameRef} type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Course:
          <input type="text" name="course" value={form.course} onChange={handleChange} required />
        </label>
        <label>
          Grade:
          <select name="grade" value={form.grade} onChange={handleChange}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
        </label>
        <div className="subjects">
          <p>Subjects:</p>
          {['Math', 'Physics', 'Chemistry', 'Biology', 'Computer Science'].map(subject => (
            <label key={subject}>
              <input type="checkbox" value={subject} onChange={handleCheckbox} />
              {subject}
            </label>
          ))}
        </div>
        <label>
          Notes:
          <textarea name="notes" value={form.notes} onChange={handleChange}></textarea>
        </label>
        <button type="submit" className="btn">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
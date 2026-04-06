import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function StudentDetail({ students, onUpdate, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    const found = students.find(s => s.id === parseInt(id));
    if (found) {
      setStudent(found);
      setForm(found);
    }
  }, [id, students]);

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

  const handleSave = () => {
    onUpdate(form);
    setStudent(form);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(student.id);
    navigate('/students');
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div className="student-detail">
      <h1>{isEditing ? 'Edit Student' : 'Student Details'}</h1>
      {isEditing ? (
        <form className="form">
          <label>
            Name:
            <input type="text" name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </label>
          <label>
            Course:
            <input type="text" name="course" value={form.course} onChange={handleChange} />
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
                <input type="checkbox" value={subject} checked={form.subjects.includes(subject)} onChange={handleCheckbox} />
                {subject}
              </label>
            ))}
          </div>
          <label>
            Notes:
            <textarea name="notes" value={form.notes} onChange={handleChange}></textarea>
          </label>
          <div className="actions">
            <button type="button" onClick={handleSave} className="btn">Save</button>
            <button type="button" onClick={() => setIsEditing(false)} className="btn">Cancel</button>
          </div>
        </form>
      ) : (
        <div className="detail">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Grade:</strong> {student.grade}</p>
          <p><strong>Subjects:</strong> {student.subjects.join(', ')}</p>
          <p><strong>Notes:</strong> {student.notes}</p>
          <div className="actions">
            <button onClick={() => setIsEditing(true)} className="btn">Edit</button>
            <button onClick={handleDelete} className="btn danger">Delete</button>
            <button onClick={() => navigate('/students')} className="btn">Back to List</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDetail;
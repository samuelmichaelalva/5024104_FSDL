import { Link } from 'react-router-dom';

function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>{student.email}</p>
      <p>Course: {student.course}</p>
      <p>Grade: {student.grade}</p>
      <div className="actions">
        <Link to={`/student/${student.id}`} className="btn small">View</Link>
        <button onClick={() => onDelete(student.id)} className="btn small danger">Delete</button>
      </div>
    </div>
  );
}

export default StudentCard;
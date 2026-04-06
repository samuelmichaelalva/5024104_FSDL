import { Link } from 'react-router-dom';
import StudentCard from '../components/StudentCard';

function StudentsList({ students, onDelete }) {
  return (
    <div className="students-list">
      <h1>Students List</h1>
      <div className="students-grid">
        {students.map(student => (
          <StudentCard key={student.id} student={student} onDelete={onDelete} />
        ))}
      </div>
      {students.length === 0 && <p>No students found.</p>}
    </div>
  );
}

export default StudentsList;
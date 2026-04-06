import { Link } from 'react-router-dom';

function Home({ students }) {
  return (
    <div className="home">
      <h1>Welcome to Student Management</h1>
      <p>Manage your students efficiently with React hooks, routers, refs, and keys.</p>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>
        <div className="stat-card">
          <h3>Average Grade</h3>
          <p>{students.length > 0 ? (students.reduce((sum, s) => sum + (s.grade === 'A' ? 4 : s.grade === 'B' ? 3 : s.grade === 'C' ? 2 : 1), 0) / students.length).toFixed(1) : 0}</p>
        </div>
      </div>
      <div className="actions">
        <Link to="/students" className="btn">View All Students</Link>
        <Link to="/add-student" className="btn primary">Add New Student</Link>
      </div>
    </div>
  );
}

export default Home;
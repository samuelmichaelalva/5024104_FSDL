import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import StudentsList from './pages/StudentsList';
import AddStudent from './pages/AddStudent';
import StudentDetail from './pages/StudentDetail';
import './App.css';

const initialStudents = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    course: 'Computer Science',
    grade: 'A',
    subjects: ['Math', 'Physics'],
    notes: 'Excellent student.'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    course: 'Engineering',
    grade: 'B',
    subjects: ['Chemistry', 'Biology'],
    notes: 'Needs improvement in attendance.'
  }
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate loading from localStorage or API
    const saved = localStorage.getItem('students');
    if (saved) {
      setStudents(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    const newStudent = { ...student, id: Date.now() };
    setStudents([...students, newStudent]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map(s => s.id === updatedStudent.id ? updatedStudent : s));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home students={students} />} />
          <Route path="/students" element={<StudentsList students={filteredStudents} onDelete={deleteStudent} />} />
          <Route path="/add-student" element={<AddStudent onAdd={addStudent} />} />
          <Route path="/student/:id" element={<StudentDetail students={students} onUpdate={updateStudent} onDelete={deleteStudent} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

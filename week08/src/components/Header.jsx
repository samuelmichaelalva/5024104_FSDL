import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Header({ searchTerm, setSearchTerm }) {
  const searchRef = useRef();

  const handleSearch = () => {
    setSearchTerm(searchRef.current.value);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">Student Dashboard</Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/add-student">Add Student</Link>
        </nav>
        <div className="search">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search students..."
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
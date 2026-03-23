function Display({ data }) {
  return (
    <div className="card">
      <h2>Student Details</h2>

      <p><b>Name:</b> {data.name}</p>
      <p><b>Email:</b> {data.email}</p>
      <p><b>Course:</b> {data.course}</p>

      <h4>Subjects:</h4>
      <ul>
        {data.subjects.map((sub, index) => (
          <li key={index}>{sub}</li>
        ))}
      </ul>
    </div>
  );
}

export default Display;
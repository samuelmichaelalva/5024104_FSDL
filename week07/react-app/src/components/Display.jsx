function Display({ data }) {
  return (
    <div className="display-card">
      <div className="display-header">
        <span className="display-pill">Live preview</span>
        <h2>Student Summary</h2>
      </div>

      <div className="detail-grid">
        <div className="detail-item">
          <span className="detail-label">Name</span>
          <strong>{data.name}</strong>
        </div>
        <div className="detail-item">
          <span className="detail-label">Email</span>
          <strong>{data.email}</strong>
        </div>
        <div className="detail-item">
          <span className="detail-label">Course</span>
          <strong>{data.course || "Not specified"}</strong>
        </div>
      </div>

      <div className="subject-section">
        <h3>Subjects</h3>
        <div className="subject-pill-row">
          {data.subjects.length > 0 ? (
            data.subjects.map((subject, index) => (
              <span key={index} className="subject-pill">
                {subject}
              </span>
            ))
          ) : (
            <span className="subject-empty">No subjects selected</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Display;

import React from "react";

const StudentCard = ({ student, setStu }) => {
  const cardStyle = {
    maxWidth: "320px",
    margin: "24px",
    padding: "20px",
    borderRadius: "14px",
    backgroundColor: "#f9fafb",
    boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    color: "#1f2937",
    border: "1px",
  };

  const headingStyle = {
    margin: "0 0 14px",
    fontSize: "1.65rem",
  };

  const subheadingStyle = {
    margin: "0 0 12px",
    fontSize: "1.05rem",
    color: "#374151",
  };

  const labelStyle = {
    fontWeight: "600",
  };

  const badgeStyle = {
    marginLeft: "10px",
    padding: "2px 8px",
    backgroundColor: "#e2e8f0",
    borderRadius: "999px",
    fontSize: "0.9rem",
  };

  return (
    <div
      style={cardStyle}
      onClick={(e) => {
        setStu(student);
      }}
    >
      <h1 style={headingStyle}>{student.name}</h1>
      <h2 style={subheadingStyle}>
        <span style={labelStyle}>Roll No :</span> {student.rollNumber}
        <span style={badgeStyle}>{student.section}</span>
      </h2>
      <p style={{ margin: "0 0 10px", color: "#4b5563" }}>
        <span style={labelStyle}>Age:</span> {student.age}
        <span style={badgeStyle}>{student.gender}</span>
      </p>
      <p style={{ margin: 0, color: "#4b5563" }}>
        <span style={labelStyle}>Subject:</span> {student.subjects.join(" , ")}
      </p>
    </div>
  );
};

export default StudentCard;

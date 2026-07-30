import React from "react";

const StudentDetail = ({ student }) => {
  return (
    <div>
      <h1>Student Detail</h1>
      <section>
        <h2>Basic Information</h2>
        <p>
          <strong>ID:</strong> {student.id}
        </p>
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Roll Number:</strong> {student.rollNumber}
        </p>
        <p>
          <strong>Class:</strong> {student.class}
        </p>
        <p>
          <strong>Section:</strong> {student.section}
        </p>
        <p>
          <strong>Age:</strong> {student.age}
        </p>
        <p>
          <strong>Gender:</strong> {student.gender}
        </p>
        <p>
          <strong>Admission Date:</strong> {student.admissionDate}
        </p>
        <p>
          <strong>Status:</strong> {student.isActive ? "Active" : "Inactive"}
        </p>
      </section>
      <section>
        <h2>Contact Information</h2>
        <p>
          <strong>Phone:</strong> {student.contact.phone}
        </p>
        <p>
          <strong>Email:</strong> {student.contact.email}
        </p>
        <p>
          <strong>Address:</strong> {student.contact.address}
        </p>
      </section>
      <section>
        <h2>Guardian Information</h2>
        <p>
          <strong>Name:</strong> {student.guardian.name}
        </p>
        <p>
          <strong>Relation:</strong> {student.guardian.relation}
        </p>
        <p>
          <strong>Phone:</strong> {student.guardian.phone}
        </p>
      </section>
      <section>
        <h2>Academic Details</h2>
        <p>
          <strong>Attendance:</strong> {student.attendance}%
        </p>
        <p>
          <strong>Fees Status:</strong> {student.feesStatus}
        </p>
        <p>
          <strong>Subjects:</strong>
        </p>
        <ul>
          {student.subjects.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StudentDetail;

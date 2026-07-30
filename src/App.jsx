import React, { useState } from "react";
import { Route, Routes } from "react-router";
import StudentCard from "./components/StudentCard";
import students from "./data/data";
import StudentDetail from "./pages/StudentDetail";

const App = () => {
  const [getStudent, setStudent] = useState([...students]);
  const [stu, setStu] = useState();
  console.log(stu);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {getStudent.map((student) => (
              <StudentCard student={student} key={student.id} setStu={setStu} />
            ))}
          </div>
        }
      />

      <Route path="/:name" element={<StudentDetail student={stu} />} />
    </Routes>
  );
};

export default App;

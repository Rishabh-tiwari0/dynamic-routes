import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import StudentCard from "./components/StudentCard";
import Students from "./data/data";
import StudentDetail from "./pages/StudentDetail";
import { useStudentContext } from "./ContextAPI/StudentContext";
import Component1 from "./components/Component1";

const App = () => {
  const { students, setStudents } = useStudentContext();

  useEffect(() => {
    setStudents([...Students]);
  }, []);

  // return (

  //   <Routes>
  //     <Route
  //       path="/"
  //       element={
  //         <div
  //           style={{
  //             display: "flex",
  //             flexWrap: "wrap",
  //             justifyContent: "center",
  //             cursor: "pointer",
  //           }}
  //         >
  //           {students.map((student) => (
  //             <StudentCard student={student} key={student.id} />
  //           ))}
  //         </div>
  //       }
  //     />

  //     <Route path="/name" element={<StudentDetail />} />
  //   </Routes>
  // );
  return <Component1 />;
};

export default App;

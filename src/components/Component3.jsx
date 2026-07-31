import React from "react";
import { useStudentContext } from "../ContextAPI/StudentContext";

const Component3 = () => {
  const { students, setStudents } = useStudentContext();
  return (
    <div>
      Component3
      {students.map((stu) => (
        <div>{stu.name}</div>
      ))}
    </div>
  );
};

export default Component3;

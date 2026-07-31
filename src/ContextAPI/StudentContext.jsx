import { createContext, useContext, useState } from "react";

export const StudentContext = createContext();

export const StudentContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  return (
    <StudentContext.Provider
      value={{ students, setStudents, selectedStudent, setSelectedStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};
export const useStudentContext = () => useContext(StudentContext);

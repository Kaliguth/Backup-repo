import React, { createContext, useState, useLayoutEffect } from "react";

export const AppContext = createContext([null]);

const defaultStudentsAr = [
  { name: "Einav", score: 93, id: 305343550 },
  { name: "Kali", score: 85, id: 120234500 },
  { name: "Lemi", score: 89, id: 111222333 },
];

export default function Context({ children }) {
  const [students_ar, setStudentsAr] = useState(defaultStudentsAr);

  useLayoutEffect(() => {
    if (localStorage.getItem("students_ar")) {
    }
    setStudentsAr(JSON.parse(localStorage.getItem("students_ar")));
  }, []);

  const resetList = () => {
    if (
      window.confirm(
        "This will restore the default list to the local storage.\nAre you sure?"
      )
    ) {
      setStudentsAr(defaultStudentsAr);
    }
    localStorage.setItem("students_ar", JSON.stringify(defaultStudentsAr));
  };

  const removeStudent = (_id) => {
    const filter_ar = students_ar.filter((item) => {
      return item.id !== _id;
    });
    setStudentsAr(filter_ar);
    localStorage.setItem("students_ar", JSON.stringify(filter_ar));
  };

    const addStudent = (newStudent) => {
      setStudentsAr([...students_ar, newStudent]);
      localStorage.setItem(
        "students_ar",
        JSON.stringify([...students_ar, newStudent])
      );
    };

  const globalVal = {
    students_ar,
    removeStudent,
    resetList,
    addStudent,
  };

  return (
    <AppContext.Provider value={globalVal}>{children}</AppContext.Provider>
  );
}

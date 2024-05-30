import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import StudentItem from "./StudentItem";

export default function StudentList() {
  const { students_ar, resetList } = useContext(AppContext);
  console.table(students_ar);

  return (
    <div className="container mt-5">
      <hr />
      <h3>
        <b>
          <u>Student list</u>
        </b>
      </h3>
      <div className="row">
        {students_ar.map((item) => {
          return <StudentItem key={item.id} student={item} />;
        })}
      </div>
      <button
        onClick={() => {
          resetList();
        }}
        className="btn btn-warning m-4"
      >
        Reset list to default
      </button>
      <hr />
    </div>
  );
}

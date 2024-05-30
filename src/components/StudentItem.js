import React, { useContext } from "react";
import { AppContext } from "../context/Context";

export default function StudentItem({ student }) {
  const { removeStudent } = useContext(AppContext);

  return (
    <div className="container col-md-8 border p-2 my-2 shadow-sm bg-info">
      <button
        onClick={() => {
          removeStudent(student.id);
        }}
        className="float-end bg-danger"
      >
        <b>X</b>
      </button>
      <h5>
        {student.id} - {student.name} <br />
        Grade: {student.score}
      </h5>
    </div>
  );
}

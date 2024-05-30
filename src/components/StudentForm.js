import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/Context";

export default function StudentForm() {
  const { addStudent } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newStudent = {
      name: data.name,
      score: data.score,
      id: Date.now(),
    };

    addStudent(newStudent);
    console.log(data.name + " added to the list");
    reset();
  };

  return (
    <div className="container">
      <h3>
        <b>
          <u>Add a student</u>
        </b>
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="container col-md-5">
        <label>Name:</label>
        <input
          {...register("name", { required: true })}
          type="text"
          className="form-control"
        />
        {errors.name && <h6 className="text-danger">* Enter a name</h6>}
        <label>Grade:</label>
        <input
          {...register("score", {
            required: true,
            min: 0,
            max: 100,
          })}
          type="number"
          defaultValue={0}
          min={0}
          max={100}
          className="form-control"
        />
        {errors.score && (
          <h6 className="text-danger">
            {errors.score.type === "min" || errors.score.type === "max"
              ? "* Grade must be between between 0 and 100"
              : "* Enter a grade"}
          </h6>
        )}
        <button type="submit" className="btn btn-success mt-4">
          Add
        </button>
        <button
          onClick={() => reset()}
          type="button"
          className="btn btn-warning mt-4 ms-4"
        >
          Clear all fields
        </button>
      </form>
    </div>
  );
}

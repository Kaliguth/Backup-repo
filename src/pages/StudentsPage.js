import React from 'react'
import StudentForm from '../components/StudentForm'
import StudentList from '../components/StudentList'

export default function StudentsPage() {
  return (
    <div>
      <StudentList/>
      <StudentForm/>
    </div>
  )
}

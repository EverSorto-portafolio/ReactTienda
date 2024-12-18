import {Routes, Route } from "react-router"
import { Login } from "./login"
import { DashBoard } from "./Dashboard"
import { StudentNew } from "./NewStudent"
import { StudenList } from "./StudentList"
import { StudentEdit } from "./StudentEdit"

export function App() {
  return(
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<DashBoard/>}  />
      <Route path="/student" element={<StudentNew/>}  />
      <Route path="/student/:studentId"  element={<StudentEdit/>}/>
    </Routes>
  )
}


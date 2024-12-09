import {Routes, Route } from "react-router"
import { Login } from "./login"
import { DashBoard } from "./Dashboard"
import { StudentNew } from "./NewStudent"
export function App() {
  return(
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<DashBoard/>}  />
      <Route path="/student" element={<StudentNew/>}  />
    </Routes>
  )
}


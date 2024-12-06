import {Routes, Route } from "react-router"
import { Login } from "./login"
import { DashBoard } from "./Dashboard"
export function App() {
  return(
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<DashBoard/>}  />
    </Routes>
  )
}


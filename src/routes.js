import { BrowserRouter, Route, Routes } from "react-router-dom"
import Todos from "./pages/todos"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/#/active" element={<Todos />} />
        <Route path="/#/completed" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

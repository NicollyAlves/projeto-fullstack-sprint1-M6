import { Routes, Route, Navigate } from "react-router-dom"
import { LoginRegister } from "../components/LoginRegister/Login"
import DashBoard from "../components/Dashboard/DashBoard"

export const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginRegister/>}/>
            <Route path="*" element={<Navigate replace to="/"/>}/>

            <Route path="/contacts" element={<DashBoard/>}/>
        </Routes>
    )
}
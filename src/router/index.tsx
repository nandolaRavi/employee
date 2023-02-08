import { Routes, Route, Navigate } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import EmplooyePgae from "../pages/employees/EmployeePage";
import Employeesform from '../pages/employees/Employeesform';

const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<EmplooyePgae />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}
export default AppRoute
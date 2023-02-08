import { Route, Routes } from "react-router-dom"
import Employeesform from "./Employeesform"
import EmployeesList from "./EmployeesList"

const EmplooyePgae = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<EmployeesList />} />
                <Route path='add' element={<Employeesform />} />
                <Route path='edit/:id' element={<Employeesform />} />
            </Routes>
        </>
    )
}
export default EmplooyePgae
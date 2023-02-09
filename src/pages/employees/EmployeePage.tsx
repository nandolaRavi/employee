import { Route, Routes } from "react-router-dom"
import Employeesform from "./Employeesform"
import EmployeesList from "./EmployeesList"

const EmplooyePgae = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<EmployeesList />} />
                <Route path='emp/:id?' element={<Employeesform />} />
            </Routes>
        </>
    )
}
export default EmplooyePgae
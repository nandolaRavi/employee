import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrPersonlRecord, setUpdateBankDetails, setUpdateEducationalDetails, setUpdateExperienceDetails } from "../../redux/slice/EmployeeSlice";
import Pagination from "../Pagination";

const EmployeesList = () => {
    const { PersonalDetails, BankDetails, EducationalDetails, ExperienceDetails } = useSelector((state: any) => state.employee);
    const [resData, setResData] = useState(PersonalDetails);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    let PageSize = 10;
    const dishpatch = useDispatch();
    const navigate = useNavigate();


    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return PersonalDetails.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);


    const handleEdit = (id: string) => {
        debugger
        let target = PersonalDetails.find((item: any) => { return id == item.id })
        let bankObj = BankDetails.find((item: any) => { return id == item.empId });;
        let EducationalObj = EducationalDetails.find((item: any) => { return id == item.empId });
        let ExperienceObj = ExperienceDetails.find((item: any) => { return id == item.empId });
        dishpatch(setCurrPersonlRecord(target));
        dishpatch(setUpdateBankDetails(bankObj));
        dishpatch(setUpdateEducationalDetails(EducationalObj));
        dishpatch(setUpdateExperienceDetails(ExperienceObj))
        navigate('/emp/' + id);
    };

    const handleDeleteRecord = useCallback((id: string) => {
        // dishpatch(setDeleteRecord(id))
    }, [dishpatch]);

    const handleSerach = (event: any) => {
        const query = event.target.value;
        setSearchQuery(query)
        const searchList = PersonalDetails.filter((item: any) => {
            return item.first_name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setResData(searchList)
    }
    return (
        <div>
            <div className="m-4">
                <Card className="pt-5 px-3">
                    <div>
                        <input type="text" onChange={(e) => {
                            handleSerach(e)
                        }} className="w-25 form-control" value={searchQuery}
                            placeholder="serach employee" />
                    </div>
                    <div className="text-end">
                        <Button className="text-end p-2" onClick={(() => {
                            navigate('emp')
                        })}>Add+</Button>
                    </div>
                    <hr></hr>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Dob</th>
                                <th>mobile no</th>
                                <th>gender</th>
                                <th>action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                resData?.map((item: any, index: any) => {
                                    return <>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td>{item.dob}</td>
                                            <td>{item.mobile_no}</td>
                                            <td>{item.gender}</td>
                                            <td>
                                                <div>
                                                    <button className="btn btn-info mx-2" onClick={(() => { handleEdit(item.id) })}>edit</button>
                                                    <button className="btn btn-danger" onClick={() => { handleDeleteRecord(item.id) }}>delete</button>

                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                })
                            }


                        </tbody>
                    </Table>

                </Card>
            </div>
        </div>
    );
}
export default EmployeesList
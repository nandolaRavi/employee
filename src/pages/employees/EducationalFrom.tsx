import { useFormik } from "formik";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { setCurrEditBankRecord, setEducationalDetails } from "../../redux/slice/EmployeeSlice";
const id = 0;
const cretaeEducationalDetails = (employeeId: number) => {
    return (
        {
            "id": id,
            "empId": employeeId,
            "school_name": '',
            "passing_year": '',
            "grade": '',
            "result_status": 'pass',
            "school_address": '',
        }
    )
};
const EducationalDetailsVlidation = Yup.object().shape({

    school_name: Yup.string()
        .required("Please select Account_type"),

    passing_year: Yup.string()
        .required("Please enetr Account_type"),

    grade: Yup.string()
        .required("Please enetr grade"),
    school_address: Yup.string()
        .min(10, "Must be at least 10 characters")
        .max(100, "Max limit 30 character")
        .required("Please enter school address detail"),
})

const EducationalFrom = ({ onNext, onBack }: any) => {
    const { BankDetails, newEmpId, currEducationalRecord } = useSelector((state: any) => state.employee);
    const dishpatch = useDispatch()
    const [resData] = useState(currEducationalRecord !== null ? currEducationalRecord : cretaeEducationalDetails(newEmpId));
    const haldeleBanckDeatilsForm = (values: any) => {
        dishpatch(setEducationalDetails(values))
        onNext()
    }
    const formik: any = useFormik({
        initialValues: resData as any,
        validationSchema: EducationalDetailsVlidation,
        onSubmit: haldeleBanckDeatilsForm,

    })
    const haldePreviousForm = () => {
        let target = BankDetails.find((item: any) => {
            return item.empId === newEmpId
        })
        dishpatch(setCurrEditBankRecord(target))
        onBack()

    }
    return (
        <>

            <Card className='w-50 m-auto mt-5'>
                <form onSubmit={(e: any) => {
                    e.preventDefault();
                    formik.handleSubmit(e)
                }} className='form'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <h5 className='mx-3 my-3'>Educational Details</h5>

                        </div>
                        <div className=''>
                            <button className='btn btn-info'>Add +</button>
                        </div>
                    </div>
                    <hr className='p-0 m-0' />

                    <div className="row mx-2">
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">school/uni name</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("school_name")} />
                            {formik.touched.school_name && formik.errors.school_name && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.school_name}</div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">passing year</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("passing_year")} />
                            {formik.touched.passing_year && formik.errors.passing_year && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.passing_year}</div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="row mx-2">
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1"> grade/marks</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("grade")} />
                            {formik.touched.grade && formik.errors.grade && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.grade}</div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">status</label>
                            <select id="cars" name="carlist" form="carform" className="form-control" {...formik.getFieldProps("result_status")}>
                                <option value="pass" selected>Pass</option>
                                <option value="fail">Fail</option>
                            </select>

                        </div>
                    </div>
                    <div className="row mx-2">
                        <div className="col-md-12">
                            <label className="col-form-label required fw-bold fs-6 mx-1">Address</label>
                            <textarea className='form-control mb-1' {...formik.getFieldProps("school_address")}></textarea>
                            {formik.touched.school_address && formik.errors.school_address && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.school_address}</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='d-flex align-items-center  justify-content-end mx-4  my-2'>
                        <div className='mx-2'>
                            <Button variant="secondary" onClick={() => {
                                haldePreviousForm()
                            }} >
                                previous
                            </Button>
                        </div>
                        <div>
                            <Button onClick={(e: any) =>
                                formik.handleSubmit(e)}>
                                Next
                            </Button>
                        </div>
                    </div>
                </form>
            </Card>
        </>
    )
}
export default EducationalFrom
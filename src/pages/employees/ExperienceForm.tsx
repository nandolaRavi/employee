import { useFormik } from "formik";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { setCurrEditBankRecord, setCurrEducationalRecord, setExperienceDetails } from "../../redux/slice/EmployeeSlice";

const cretaeExperienceDatils = (employeeId: number) => {
    return (
        {
            "empId": employeeId,
            "company_name": '',
            "role": '',
            "salary": '',
            "reason_for_leaving": '',
            "joining_date": '',
            "last_day_of_work": '',
        }
    )
};
const ExperienceDetailsVlidation = Yup.object().shape({
    company_name: Yup.string().min(10, "Must be at least 10 characters")
        .max(30, "Max limit 30 character")
        .required("Please enter school compnay name"),
    role: Yup.string()
        .required("Please enter role"),
    salary: Yup.string()
        .required("Please enter salary"),
    reason_for_leaving: Yup.string()
        .required("Please enter leaving reason"),
    joining_date: Yup.string().required("Please select joing date"),
    last_day_of_work: Yup.string().required("Please select last day of work"),
});

const ExperienceForm = ({ onNext, onBack }: any) => {

    const { EducationalDetails, newEmpId, currEducationalRecord } = useSelector((state: any) => state.employee);
    const dishpatch = useDispatch()
    const navigate = useNavigate()
    const [resData] = useState(currEducationalRecord !== null ? currEducationalRecord : cretaeExperienceDatils(newEmpId));
    const haldeleExperienceDeatilsForm = (values: any) => {
        dishpatch(setExperienceDetails(values))
        navigate('/');
    }
    const formik: any = useFormik({
        initialValues: resData as any,
        validationSchema: ExperienceDetailsVlidation,
        onSubmit: haldeleExperienceDeatilsForm,
    });

    const haldePreviousForm = () => {
        let target = EducationalDetails.find((item: any) => {
            return item.empId == newEmpId;
        })
        dishpatch(setCurrEducationalRecord(target));
        onBack();
    };
    
    return (
        <>
            <Card className='w-50 m-auto mt-5'>
                <form onSubmit={(e: any) => {
                    e.preventDefault();
                    formik.handleSubmit(e)
                }} className='form'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <h5 className='mx-3 my-3'>Experience Details</h5>

                        </div>
                        <div className=''>
                            <button type='button' className='btn btn-info'>Add +</button>
                        </div>
                    </div>
                    <hr className='p-0 m-0' />
                    <div className="row mx-2">
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">company name</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("company_name")} />
                            {formik.touched.company_name && formik.errors.company_name && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.company_name}</div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">role</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("role")} />
                            {formik.touched.role && formik.errors.role && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block  text-danger'>{formik.errors.role}</div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="row mx-2">
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">salary</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("salary")} />
                            {formik.touched.salary && formik.errors.salary && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.salary}</div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">reason for leaving the company</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("reason_for_leaving")} />
                            {formik.touched.reason_for_leaving && formik.errors.reason_for_leaving && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.reason_for_leaving}</div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="row mx-2">
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">joining date</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("joining_date")} />
                            {formik.touched.joining_date && formik.errors.joining_date && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.joining_date}</div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">last day of work</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("last_day_of_work")} />
                            {formik.touched.last_day_of_work && formik.errors.last_day_of_work && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.last_day_of_work}</div>
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
                                save
                            </Button>
                        </div>
                    </div>
                </form>
            </Card>
        </>
    )
}

export default ExperienceForm
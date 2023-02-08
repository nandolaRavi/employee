import { useFormik } from 'formik';
import { Button, Card } from 'react-bootstrap';
import EducationalFrom from './EducationalFrom';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { setCurEditRecord, setEmployee } from '../../redux/slice/EmployeeSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
let id = 0;

const initExperience = () => {
    return {
        "company_name": '',
        "role": '',
        "salary": '',
        "reason_for_leaving": '',
        "joining_date": '',
        "last_day_of_work": '',
    }
}
const cretaeEmp = () => {
    id++
    return {
        "id": id,
        "first_name": '',
        "last_name": '',
        "dob": '',
        "mobile_no": '',
        "address": '',
        "gender": 'male',
        'bank_name': '',
        "IFSC_code": '',
        "Pan_no": '',
        "Account_type": '',
        "school_name": '',
        "passing_year": '',
        "grade": '',
        "result_status": 'pass',
        "school_address": '',
        "Experience": [],

    }
}

var data = { ...cretaeEmp(), ...initExperience() }


const addressValidation = Yup.object().shape({
    first_name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Please enter first name"),
    last_name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Please enter last name"),
    dob: Yup.string()
        .min(5, "Must be at least 5 characters")
        .required("Please select dob"),

    address: Yup.string()
        .min(10, "Must be at least 10 characters")
        .max(100, "Max limit 30 character")
        .required("Please enter address detail"),
    bank_name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Please enter Bank name"),
    IFSC_code: Yup.string()
        .min(6, "Must be at least 8 characters")
        .max(6, "Max limit 8 character")
        .required("Please enter IFSC code"),
    Pan_no: Yup.string().required("Please enter Pan_no"),
    Account_type: Yup.string()
        .required("Please select Account_type"),
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
})
const Employeesform = () => {
    const { curEditRecord } = useSelector((state: any) => state.employee);
    const [resData] = useState(!!curEditRecord?.id ? curEditRecord : data);
    const [experience, setExperience] = useState([initExperience()])
    const dishpatch = useDispatch();
    const navigate = useNavigate()

    const haldeleSubmit = (value: any) => {
        if (!curEditRecord?.id) {
            dishpatch(setEmployee(value));
            navigate('/')
        } else {
            dishpatch(setCurEditRecord(value));
            navigate('/')
        }
    };
    const AddExperience = () => {
        setExperience([initExperience()])
    }
    const formik: any = useFormik({
        initialValues: resData as any,
        validationSchema: addressValidation,
        onSubmit: haldeleSubmit,

    })
    return (
        <>
            <Card className='w-50 m-auto mt-5'>
                <form onSubmit={(e: any) => {
                    e.preventDefault();
                    formik.handleSubmit(e)
                }} className='form'>
                    <h5 className='mx-3 my-3'> Personal Details</h5>
                    <hr className='p-0 m-0' />
                    <div className="row mx-2">
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">First Name</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("first_name")} />
                            {formik.touched.first_name && formik.errors.first_name && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.first_name}</div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">Last Name</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("last_name")} />
                            {formik.touched.last_name && formik.errors.last_name && (
                                <div className=''>
                                    <div className='text-danger mt-0'>{formik.errors.last_name}</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="row mx-2">
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">dob</label>
                            <input type="date" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("dob")} />
                            {formik.touched.dob && formik.errors.dob && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.dob}</div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">Mobile No</label>
                            <input type="number" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("mobile_no")} />
                            {/* {formik.touched.mobile_no && formik.errors.mobile_no && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.mobile_no}</div>
                                </div>
                            )} */}
                        </div>
                    </div>
                    <div className="row mx-2">
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">Gender</label>
                            <select id="cars" name="carlist" form="carform" className='form-control' {...formik.getFieldProps("gender")} >
                                <option value="male">Male</option>
                                <option value="female">Female</option>

                            </select>
                        </div>
                    </div>
                    <div className="row mx-2">
                        <div className="col-md-12">
                            <label className="col-form-label required fw-bold fs-6 mx-1">Address</label>
                            <textarea className='form-control mb-2' {...formik.getFieldProps("address")}></textarea>
                            {formik.touched.address && formik.errors.address && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.address}</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <hr className='p-0 m-0' />
                    <h5 className='mx-3 my-3'>Bank Details</h5>
                    <hr className='p-0 m-0' />
                    <div className="row mx-2">
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">Bank name</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("bank_name")} />
                            {formik.touched.bank_name && formik.errors.bank_name && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.bank_name}</div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">IFSC code</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("IFSC_code")} />
                            {formik.touched.IFSC_code && formik.errors.IFSC_code && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.IFSC_code}</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="row mx-2">
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">Pan no</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("Pan_no")} />
                            {formik.touched.Pan_no && formik.errors.Pan_no && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.Pan_no}</div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="col-form-label required fw-bold fs-6 mx-1">Account type</label>
                            <input type="text" id="" className={"form-control form-control-solid mb-2"} {...formik.getFieldProps("Account_type")} />
                            {formik.touched.Account_type && formik.errors.Account_type && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block text-danger'>{formik.errors.Account_type}</div>
                                </div>
                            )}
                        </div>


                    </div>
                    <hr className='p-0 m-0' />
                    <EducationalFrom formik={formik} />
                    <hr className='p-0 m-0' />

                    <div className='d-flex align-items-center'>
                        <div>
                            <h5 className='mx-3 my-3'>Experience Details</h5>

                        </div>
                        <div className=''>
                            <button type='button' onClick={() => { AddExperience() }} className='btn btn-info'>Add +</button>
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
                            <Button variant="secondary">
                                Back
                            </Button>
                        </div>

                        <div>
                            <Button onClick={(e: any) =>
                                formik.handleSubmit(e)}>
                                Save chnage
                            </Button>
                        </div>
                    </div>
                </form>
            </Card>

        </>
    )
}
export default Employeesform
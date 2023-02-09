import { AnyMxRecord } from "dns";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { setEmpId, setPersonalDetails, setUpdatePersonalDetails } from "../../redux/slice/EmployeeSlice";

let id = 0;
const cretaeEmployeePersonalDetils = () => {
    id++
    return (
        {
            "id": id,
            "first_name": '',
            "last_name": '',
            "dob": '',
            "mobile_no": '',
            "address": '',
        }
    )
}
const PersonalDetilsDeatailsVlidation = Yup.object().shape({
    first_name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Please enter first name"),
    last_name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Please enter last name"),
    dob: Yup.string()
        .min(5, "Must be at least 5 characters")
        .required("Please select dob"),
    mobile_no: Yup.string()
        .min(10, "Must be at least 10 number")
        .max(10, "Must be at least 10 number")
        .required("Please enter mobile no"),
    address: Yup.string()
        .min(10, "Must be at least 10 characters")
        .max(100, "Max limit 30 character")
        .required("Please enter address detail"),
})
const PersonalDetailsForm = ({ onNext }: any) => {

    let param = useParams();
    console.log(param)
    const { PersonalDetails, newEmpId, currEditPrsonlRecord } = useSelector((state: any) => state.employee);
    const [currPersonalDetail, setCurrPersonalDetail] = useState('');
    const [resData] = useState(currEditPrsonlRecord !== null ? currEditPrsonlRecord : cretaeEmployeePersonalDetils())
    const dishpatch = useDispatch();
    const haldelepersonalForm = (values: any) => {
        if (!!param.id) {
            
        } else {
            dishpatch(setPersonalDetails(values));
            dishpatch(setEmpId(values.id))
        }
        onNext()
    };

    const formik: any = useFormik({
        initialValues: resData as any,
        validationSchema: PersonalDetilsDeatailsVlidation,
        onSubmit: haldelepersonalForm,
    })

    return (
        <Card className='w-50 m-auto mt-5'>
            <form onSubmit={(e: any) => {
                e.preventDefault();
                formik.handleSubmit(e)
            }} className='form'>
                <h5 className='mx-3 my-3'>Personal Details</h5>
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
                        {formik.touched.mobile_no && formik.errors.mobile_no && (
                            <div className='fv-plugins-message-container'>
                                <div className='fv-help-block text-danger'>{formik.errors.mobile_no}</div>
                            </div>
                        )}
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

                <div className='d-flex align-items-center  justify-content-end mx-4  my-2'>
                    <div className='mx-2'>

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
    )

}
export default PersonalDetailsForm
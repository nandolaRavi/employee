import { useFormik } from "formik";
import { iteratorSymbol } from "immer/dist/internal";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { setBankDetails, setCurrPersonlRecord, setUpdateBankDetails } from "../../redux/slice/EmployeeSlice";

const id = 0;
const cretaeBankDeatails = (employeeId: number) => {
    return (
        {
            "empId": employeeId,
            'bank_name': '',
            "IFSC_code": '',
            "Pan_no": '',
            "Account_type": '',
        }
    )
};
const bankDetailsVlidation = Yup.object().shape({
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
})

const BnakDeatailsForm = ({ onNext, onBack }: any) => {
    const navigate = useNavigate();
    let param = useParams();
    const dishpatch = useDispatch();
    const { PersonalDetails, newEmpId, currEditBankRecord, BankDetails } = useSelector((state: any) => state.employee);
    const [resData] = useState(currEditBankRecord !== null ? currEditBankRecord : cretaeBankDeatails(newEmpId));

    const haldeleBanckDeatilsForm = (value: any) => {
        if (!!param.id) {

        } else {
            dishpatch(setBankDetails(value))
        }
        onNext();

    };

    const haldePreviousForm = () => {
        let target = PersonalDetails?.find((item: any) => { return item.id == newEmpId });
        dishpatch(setCurrPersonlRecord(target))
        onBack()
    }
    const formik: any = useFormik({
        initialValues: resData as any,
        validationSchema: bankDetailsVlidation,
        onSubmit: haldeleBanckDeatilsForm,

    })
    return (
        <>
            <Card className='w-50 m-auto mt-5'>
                <form onSubmit={(e: any) => {
                    e.preventDefault();
                    formik.handleSubmit(e);
                }} className='form'>
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

export default BnakDeatailsForm
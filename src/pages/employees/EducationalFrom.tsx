const EducationalFrom = ({ formik }: any) => {
    return (
        <>
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
                    <select id="cars" name="carlist" form="carform"className="form-control" {...formik.getFieldProps("result_status")}>
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
        </>
    )
}
export default EducationalFrom
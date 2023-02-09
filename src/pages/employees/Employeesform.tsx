import { Formik, useFormik } from 'formik';
import { Button, Card } from 'react-bootstrap';
import EducationalFrom from './EducationalFrom';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PersonalDetailsForm from './PersonalDetailsForm';
import BnakDeatailsForm from './BankDetailsForm';
import ExperienceForm from './ExperienceForm';
import { Step, StepLabel, Stepper, Typography } from '@mui/material';

const Employeesform = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Personal Details', 'Bank Details', 'Educational Details', 'Experience Details'];

    function _renderStepContent(step: any) {
        switch (step) {
            case 0:
                return <PersonalDetailsForm onNext={() => {
                    setActiveStep(1)
                }} />;
            case 1:
                return <BnakDeatailsForm onNext={() => {
                    setActiveStep(2)

                }} onBack={() => {
                    setActiveStep(0)
                }} />;
            case 2:
                return <EducationalFrom
                    onNext={() => {
                        setActiveStep(3)

                    }} onBack={() => {
                        setActiveStep(1)
                    }} />;
            case 3:
                return <ExperienceForm onNext={() => {
                    setActiveStep(1)

                }} onBack={() => {
                    setActiveStep(2)
                }} />;
            default:
                return <div>Not Found</div>;
        }
    }
    return (
        <>
            <div className='w-75 m-auto'>
                <Typography component="h1" variant="h4" align="center">
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep} className={''}>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {_renderStepContent(activeStep)}
                </div>

            </div>


            <Routes>
                <Route path='edit/:id' element={<PersonalDetailsForm />} />
                <Route path='bankDetailsform' element={<BnakDeatailsForm />} />
                <Route path='bankDetailsform/edit :empId' element={<BnakDeatailsForm />} />

                <Route path='educationalFrom' element={<EducationalFrom />} />
                <Route path='educationalFrom/edit :empId' element={<EducationalFrom />} />

                <Route path='experienceForm' element={<ExperienceForm />} />
                <Route path='experienceForm/edit :empId' element={<ExperienceForm />} />

            </Routes>
        </>
    )
}
export default Employeesform
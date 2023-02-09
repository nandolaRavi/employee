import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    PersonalDetails: [],
    BankDetails: [],
    EducationalDetails: [],
    ExperienceDetails: [],
    newEmpId: 0,
    currEditPrsonlRecord: null,
    currEditBankRecord: null,
    currEducationalRecord: null,
    currExperienceRecord: null
}

const updateRecord = (item = [], curEditRecord: any) => {
    if (curEditRecord) {
        return item.map((obj: any) => {
            if (obj.id == curEditRecord) {
                obj = curEditRecord
            }
            return obj;
        })
    }
};

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setPersonalDetails: (state, action) => {
            state.PersonalDetails.push(action.payload);
        },
        setBankDetails: (state, action) => {
            state.BankDetails.push(action.payload);
        },
        setEducationalDetails: (state, action) => {
            state.EducationalDetails.push(action.payload);
        },
        setExperienceDetails: (state, action) => {
            state.ExperienceDetails.push(action.payload);
        },

        setUpdatePersonalDetails: (state, action) => {
            let PersonalDetailsObj = updateRecord(state.PersonalDetails, action.payload)
            state.PersonalDetails = PersonalDetailsObj
        },
        setUpdateBankDetails: (state, action) => {
            let BankDetailsObj = updateRecord(state.BankDetails, action.payload)
            state.BankDetails = BankDetailsObj
        },

        setUpdateEducationalDetails: (state, action) => {
            let EducationalDetailsObj = updateRecord(state.EducationalDetails, action.payload)
            state.EducationalDetails = EducationalDetailsObj
        },
        setUpdateExperienceDetails: (state, action) => {
            let ExperienceDetailsObj = updateRecord(state.ExperienceDetails, action.payload)
            state.ExperienceDetails = ExperienceDetailsObj
        },
        setCurrPersonlRecord: (state, action) => {
            state.currEditPrsonlRecord = action.payload
        },
        setCurrEditBankRecord: (state, action) => {
            state.currEditBankRecord = action.payload
        },
        setCurrEducationalRecord: (state, action) => {
            state.currEducationalRecord = action.payload
        },
        setCurrExperienceRecord: (state, action) => {
            state.currExperienceRecord = action.payload
        },

        setDeleteRecord: (state, action) => {
            state.emplyee = state.emplyee.filter((e: any) => { return e.id !== action.payload })
        },
        setEmpId: (state, action) => {
            state.newEmpId = action.payload
        }
    },
})
export const { setPersonalDetails, setEducationalDetails, setBankDetails, setExperienceDetails, setEmpId, setCurrPersonlRecord,setCurrEditBankRecord,
    setUpdatePersonalDetails, setUpdateBankDetails, setUpdateEducationalDetails, setUpdateExperienceDetails,
    setCurrEducationalRecord,
    setDeleteRecord } = employeeSlice.actions

export default employeeSlice.reducer


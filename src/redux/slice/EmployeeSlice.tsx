import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    emplyee: [],
    curEditRecord: null
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setEmployee: (state, action) => {
            state.emplyee.push(action.payload);
        },
        setDeleteRecord: (state, action) => {
            state.emplyee = state.emplyee.filter((e: any) => { return e.id !== action.payload })
        },
        findEditRecord: (state, action) => {
            if (action.payload !== null) {
                state.curEditRecord = state.emplyee.find((item: any) => { return item.id == action.payload })
            } else {
                state.curEditRecord = action.payload
            }
        },
        setCurEditRecord: (state, action) => {
            if (action.payload) {
                const upd_obj = state.emplyee.map((obj: any) => {
                    if (obj.id == action.payload.id) {
                        obj = action.payload
                    }
                    return obj;
                })
                state.emplyee = upd_obj
            }
        }
    },
})
export const { setEmployee, setDeleteRecord, setCurEditRecord, findEditRecord } = employeeSlice.actions

export default employeeSlice.reducer


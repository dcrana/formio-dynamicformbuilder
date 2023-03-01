import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { far } from 'react-code-blocks'
import { addFormData, createForm, getJSONForm, getUserData } from './dfbCrud'

export const createDynamicForm = createAsyncThunk(
    'dfb/createDynamicForm',
    async (payload, { rejectWithValue }) => {
        // console.log(payload, "in payload");
        try {
            const res = await createForm(payload)
            if (res.status === 201) {
                return res.data
            } else {
                throw new Error(res.message)
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getDynamicFormJSON = createAsyncThunk(
    'dfb/getDynamicFormJSON',
    async (id, { rejectWithValue }) => {
        // console.log(payload, "in payload");
        try {
            const res = await getJSONForm(id)
            if (res.status === 200) {
                const a = {
                    ...res.data.form,
                    jsonForm: JSON.parse(res?.data?.form?.jsonForm),
                }
                return a
            } else {
                throw new Error(res.message)
            }
        } catch (error) {
            console.log('catch', error)
            return rejectWithValue(error.message)
        }
    }
)

export const addNewFormData = createAsyncThunk(
    'dfb/addNewFormData',
    async (payload, { rejectWithValue }) => {
        try {
            const res = await addFormData(payload)
            if (res.status === 201) {
                return res.data
            } else {
                throw new Error(res.message)
            }
        } catch (error) {
            console.log('catch', error)
            return rejectWithValue(error.message)
        }
    }
)

export const getUserFormData = createAsyncThunk(
    'dfb/getUserFormData',
    async (payload, { rejectWithValue }) => {
        try {
            const res = await getUserData(payload)
            console.log('res>>>', res)
            if (res.status === 200) {
                const a = {
                    ...res.data.userData,
                    userData: JSON.parse(res?.data?.userData?.userData),
                }
                return a
            } else {
                throw new Error(res.message)
            }
        } catch (error) {
            console.log('catch', error)
            return rejectWithValue(error.message)
        }
    }
)
const dfbSlice = createSlice({
    name: 'dfb',
    initialState: {
        isLoading: false,
        createdForm: {},
        jsonFormData: {},
        error: '',
        userData: {},
        editUserData: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createDynamicForm.pending, (state, action) => {
                state.isLoading = true
                state.createdForm = {}
                state.error = ''
            })
            .addCase(createDynamicForm.fulfilled, (state, action) => {
                state.createdForm = action.payload
                state.error = ''
                state.isLoading = false
            })
            .addCase(createDynamicForm.rejected, (state, action) => {
                state.error = action.error
                state.isLoading = false
                state.createdForm = {}
            })
            .addCase(getDynamicFormJSON.pending, (state, action) => {
                state.isLoading = true
                state.jsonFormData = {}
                state.error = ''
            })
            .addCase(getDynamicFormJSON.fulfilled, (state, action) => {
                console.log('yes')
                state.isLoading = true
                state.jsonFormData = action.payload
                state.error = ''
            })
            .addCase(getDynamicFormJSON.rejected, (state, action) => {
                console.log('rejected')
                state.isLoading = false
                state.jsonFormData = {}
                state.error = action.error
            })
            .addCase(addNewFormData.pending, (state, action) => {
                state.isLoading = true
                state.userData = {}
                state.error = ''
            })
            .addCase(addNewFormData.fulfilled, (state, action) => {
                state.userData = action.payload
                state.error = ''
                state.isLoading = false
            })
            .addCase(addNewFormData.rejected, (state, action) => {
                state.error = action.error
                state.isLoading = false
                state.createdForm = {}
            })
            .addCase(getUserFormData.pending, (state, action) => {
                state.isLoading = true
                state.editUserData = {}
                state.error = ''
            })
            .addCase(getUserFormData.fulfilled, (state, action) => {
                state.editUserData = action.payload
                state.error = ''
                state.isLoading = false
            })
            .addCase(getUserFormData.rejected, (state, action) => {
                state.error = action.error
                state.isLoading = false
                state.createdForm = {}
            })
    },
})

export default dfbSlice.reducer

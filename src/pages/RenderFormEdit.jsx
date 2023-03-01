import Form from 'react-formio/lib/components/Form';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDynamicFormJSON, getUserFormData } from '../redux/features/dynamicformbuilder/dfbSlice';
const RenderFormEdit = () => {
    const dispatch = useDispatch();
    const { createdForm, jsonFormData, userData, editUserData } = useSelector(state => state.dfb);
    useEffect(() => {
        if (createdForm?.userId) {
            dispatch(getDynamicFormJSON(createdForm?.formId))
        }
        if (userData?.userId) {
            dispatch(getUserFormData(userData?.userId))
        }
    }, [])
    return (
        <div>
            {
                jsonFormData?.jsonForm ?
                    <Form form={jsonFormData?.jsonForm} submission={editUserData?.userData ? editUserData?.userData : {}} onSubmit={(data) => console.log(data)} /> :
                    <div className='text-center py-3'>Not found any form</div>
            }
        </div>
    )
}
export default RenderFormEdit
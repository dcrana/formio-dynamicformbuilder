import Form from 'react-formio/lib/components/Form';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewFormData, getDynamicFormJSON } from '../redux/features/dynamicformbuilder/dfbSlice';
const RenderForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { createdForm, jsonFormData } = useSelector(state => state.dfb);
    useEffect(() => {
        if (createdForm?.formId) {
            dispatch(getDynamicFormJSON(createdForm?.formId))
        }
    }, [])

    const handleSubmit = (formData) => {
        console.log('filled form data>>', formData);
        const payload = {
            dept: jsonFormData?.dept,
            subDept: jsonFormData?.subDept,
            jsonFormData: JSON.stringify(formData),
            form_id: createdForm?.formId
        }
        dispatch(addNewFormData(payload)).then((e) => {
            if (e.type === 'dfb/addNewFormData/fulfilled') {
                navigate('/renderformedit');
            }
        })
    }

    return (
        <div>
            {
                jsonFormData?.jsonForm ?
                    <Form form={jsonFormData?.jsonForm} /* submission={prefilledData ? prefilledData : {}} */ onSubmit={(data) => handleSubmit(data)} /> :
                    <div className='text-center py-3'>Not found any form</div>
            }
        </div>
    )
}
export default RenderForm;
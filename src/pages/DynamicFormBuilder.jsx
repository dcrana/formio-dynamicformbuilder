import { FormBuilder } from 'react-formio/lib/components'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { createDynamicForm } from '../redux/features/dynamicformbuilder/dfbSlice';
import { useNavigate } from 'react-router-dom';
const DynamicFormBuilder = () => {
    const [formData, setFormData] = useState({});
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handlePublishForm = (e, jsonData) => {
        e.preventDefault();
        dispatch(createDynamicForm(jsonData)).then((e) => {
            if (e.type === "dfb/createDynamicForm/fulfilled") {
                navigate('/renderform')
            }
        });
    }
    return (
        <div>
            <div>
                <form className='d-flex mt-3 flex-column' onSubmit={(e) => handlePublishForm(e, data)}>
                    <div className='ml-3 d-flex justify-content-between w-25'>
                        <label htmlFor="dept">Department</label>
                        <input type="text" onChange={handleChange} name='dept' required />
                    </div>
                    <div className='ml-3 mt-3 d-flex justify-content-between w-25' >
                        <label htmlFor="subDept">Sub depart ment</label>
                        <input type="text" onChange={handleChange} name='subDept' required />
                    </div>
                    <button type='submit' className='btn btn-primary ml-3 mt-3' style={{ width: "100px" }}>
                        Publish
                    </button>
                </form>
            </div>
            <FormBuilder
                form={{ display: 'form' }}
                onChange={(schema) => {
                    setFormData(schema);
                    setData({ ...data, jsonForm: JSON.stringify(schema) });
                }}
            />
        </div>
    )
}

export default DynamicFormBuilder

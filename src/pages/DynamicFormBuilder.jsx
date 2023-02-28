import { FormBuilder } from 'react-formio/lib/components'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const DynamicFormBuilder = () => {
    const [formData, setFormData] = useState({})
    const preData = localStorage.getItem('schema')

    return (
        <div>
            <FormBuilder
                form={{ display: 'form' }}
                onChange={(schema) => {
                    console.log(schema)
                    // setFormData({ ...formData, schema })
                    setFormData(schema);
                    localStorage.setItem('schema', schema)
                }}
            />
            <Link to="/renderform" state={formData}>
                Go To Form
            </Link>
        </div>
    )
}

export default DynamicFormBuilder

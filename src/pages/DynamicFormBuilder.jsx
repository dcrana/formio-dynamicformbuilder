import { FormBuilder } from "react-formio/lib/components";
import { useState } from "react"
import { Link } from 'react-router-dom'
const DynamicFormBuilder = () => {
    const [formData, setFormData] = useState({});
    return (
        <div>
            <FormBuilder
                form={{ display: "form" }}
                onChange={(schema) => {
                    console.log(schema);
                    setFormData(schema);
                }}
            />
            <Link to='/renderform' state={formData}>Go To Form</Link>
        </div>
    );
}

export default DynamicFormBuilder;

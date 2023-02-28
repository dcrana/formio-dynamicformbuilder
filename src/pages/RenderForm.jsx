import Form from 'react-formio/lib/components/Form';
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const RenderForm = () => {
    const formData = useLocation().state;
    const navigate = useNavigate();
    const storedData = localStorage.getItem("data");
    const [prefilledData, setPreFilledData] = useState(JSON.parse(storedData) || {});
    console.log('data>>>', prefilledData);
    return (
        <div>
            <Form form={formData} submission={prefilledData ? prefilledData : {}} onSubmit={(data) => {
                // console.log('data>>', data);
                localStorage.setItem('data', JSON.stringify(data));
                navigate('/');
            }} />
        </div>
    )
}
export default RenderForm;
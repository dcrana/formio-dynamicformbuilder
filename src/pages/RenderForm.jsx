import Form from 'react-formio/lib/components/Form';
import { useLocation, useNavigate } from 'react-router-dom'
const RenderForm = () => {
    const formData = useLocation().state;
    const navigate = useNavigate();
    return (
        <div>
            <Form form={formData} onSubmit={(data) => {
                console.log('data>>', data);
                navigate('/');
            }} />
        </div>
    )
}
export default RenderForm;
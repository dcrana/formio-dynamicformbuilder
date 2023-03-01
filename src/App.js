import { Route, Routes } from 'react-router-dom'
import DynamicFormBuilder from './pages/DynamicFormBuilder';
import RenderForm from './pages/RenderForm';
import RenderFormEdit from './pages/RenderFormEdit';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DynamicFormBuilder />} />
        <Route path='/renderform' element={<RenderForm />} />
        <Route path='/renderformedit' element={<RenderFormEdit />} />
      </Routes>
    </>
  )
}
export default App;
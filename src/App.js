import { Route, Routes } from 'react-router-dom'
import DynamicFormBuilder from './pages/DynamicFormBuilder';
import RenderForm from './pages/RenderForm';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DynamicFormBuilder />} />
        <Route path='/renderform' element={<RenderForm />} />
      </Routes>
    </>
  )
}
export default App;
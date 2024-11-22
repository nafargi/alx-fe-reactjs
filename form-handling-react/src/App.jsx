import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from "./components/formikForm";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
      <FormikForm />
      <RegistrationForm />
    </>
  )
}

export default App

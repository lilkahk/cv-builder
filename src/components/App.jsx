import './../styles/App.css'
import Cv from './Cv'
import Sidebar from './Sidebar'
import { useState } from 'react';

function App() {

    const [info, setInfo] = useState({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '(123) 456-7890',
      address: 'Waterloo, Canada',
  });

  return (
    <>
      <Sidebar info={info} setInfo={setInfo} />
      <Cv info={info} />
    </>
  )
}

export default App

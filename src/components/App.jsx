import './../styles/App.css'
import Cv from './Cv'
import Sidebar from './Sidebar'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {

  const [info, setInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    address: 'Waterloo, Canada',
  });

  const [educations, setEducations] = useState([{
    id: uuid(),
    date: '08/2022 - Present',
    location: 'Stanford, US',
    school: 'Stanford University',
    major: 'Master of Data Science'
  }, {
    id: uuid(),
    date: '08/2018 - 05/2022',
    location: 'Waterloo, Canada',
    school: 'University of Waterloo',
    major: 'Bachelor of Computer Science'
  }])

  return (
    <>
      <Sidebar 
      info={info} setInfo={setInfo}
      educations={educations} setEducations={setEducations}
      />
      <Cv 
      info={info}
      educations={educations}
      />
    </>
  )
}

export default App

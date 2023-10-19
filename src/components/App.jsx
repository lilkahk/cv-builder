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

  const [educations, setEducations] = useState([
    {
      id: uuid(),
      date: '08/2022 - Present',
      location: 'Stanford, US',
      school: 'Stanford University',
      major: 'Master of Data Science'
    }, 
    {
      id: uuid(),
      date: '08/2018 - 05/2022',
      location: 'Waterloo, Canada',
      school: 'University of Waterloo',
      major: 'Bachelor of Computer Science'
    }])

  const [experiences, setExperiences] = useState([
    {
      id: uuid(),
      date: '08/2021 - present',
      location: 'San Francisco, US',
      company: 'ABC Inc.',
      role: 'UX & UI Designer',
      description: 'Collaborated on user experience and user interface designs for a diverse clientele, spanning self-service applications in telecommunications to mobile games on iOS and Android platforms.'
    },                     
    {
      id: uuid(),
      date: '04/2018 – 010/2020',
      location: 'London, England',
      company: 'London Technologies',
      role: 'Front-End Developper',
      description: 'Created and implemented interactive and responsive web interfaces for a variety of clients, ranging from e-commerce platforms to data visualization dashboards, ensuring seamless user experiences across multiple devices and browsers.'
    },
    {
      id: uuid(),
      date: '04/2016 – 02/2018',
      location: 'Berlin, Germany',
      company: 'German Interactive Labs',
      role: 'UX Research Assistant',
      description: 'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.'
    }
  ])

  const [color, setColor] = useState('#3c499b')

  return (
    <>
      <Sidebar 
      info={info} setInfo={setInfo}
      educations={educations} setEducations={setEducations}
      experiences={experiences} setExperiences={setExperiences}
      color={color} setColor={setColor}
      />
      <Cv 
      info={info}
      educations={educations}
      experiences={experiences}
      color={color}
      />
    </>
  )
}

export default App

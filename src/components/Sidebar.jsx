import { useState } from 'react'
import './../styles/Sidebar.css'
import EducationSide from './EducationSide'
import PersonalSide from './PersonalSide'
import ProfessionalSide from './ProfessionalSide'

export default function Sidebar({ info, setInfo, educations, setEducations,
     experiences, setExperiences, color, setColor }) {

    const [isPersonalActive, setIsPersonalActive] = useState(false)
    const [isEducationActive, setIsEducationActive] = useState(false)
    const [isProfessionalActive, setIsProfessionalActive] = useState(false)

    return (
        <div className="sidebar">
            <ColorPicker color={color} setColor={setColor} />
            <PersonalSide info={info} setInfo={setInfo} isActive={isPersonalActive}
             setIsActive={setIsPersonalActive} setEd={setIsEducationActive}
              setPro={setIsProfessionalActive} />
            <EducationSide educations={educations} setEducations={setEducations}
            isActive={isEducationActive} setIsActive={setIsEducationActive}
            setPer={setIsPersonalActive} setPro={setIsProfessionalActive} />
            <ProfessionalSide experiences={experiences} setExperiences={setExperiences}
            isActive={isProfessionalActive} setIsActive={setIsProfessionalActive}
            setPer={setIsPersonalActive} setEd={setIsEducationActive} />
        </div>
    )
}

function ColorPicker({ color, setColor }) {

    return (
        <div className="color-picker">
            <label htmlFor="color-selector">Change Colour</label>
            <input type="color" id='color-selector' value={color} 
            onChange={(event) => setColor(event.target.value)} />
        </div>
    )
}
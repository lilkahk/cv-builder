import { useState } from 'react'
import './../styles/Sidebar.css'
import EducationSide from './EducationSide'
import PersonalSide from './PersonalSide'
import ProfessionalSide from './ProfessionalSide'

export default function Sidebar({ info, setInfo, educations, setEducations,
     experiences, setExperiences }) {

    const [isPersonalActive, setIsPersonalActive] = useState(false)
    const [isEducationActive, setIsEducationActive] = useState(false)
    const [isProfessionalActive, setIsProfessionalActive] = useState(false)

    return (
        <div className="sidebar">
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
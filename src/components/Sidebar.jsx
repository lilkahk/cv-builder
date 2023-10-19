import { useState } from 'react'
import './../styles/Sidebar.css'
import EducationSide from './EducationSide'
import PersonalSide from './PersonalSide'
import ProfessionalSide from './ProfessionalSide'

export default function Sidebar({ info, setInfo, educations, setEducations,
     experiences, setExperiences }) {

    const [openSection, setOpenSection] = useState(-1)

    return (
        <div className="sidebar">
            <PersonalSide info={info} setInfo={setInfo} open={openSection} setOpen={setOpenSection} />
            <EducationSide educations={educations} setEducations={setEducations}
            open={openSection} setOpen={setOpenSection} />
            <ProfessionalSide experiences={experiences} setExperiences={setExperiences}
            open={openSection} setOpen={setOpenSection} />
        </div>
    )
}
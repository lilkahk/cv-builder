import './../styles/Sidebar.css'
import EducationSide from './EducationSide'
import PersonalSide from './PersonalSide'
import ProfessionalSide from './ProfessionalSide'

export default function Sidebar({info, setInfo, educations, setEducations}) {

    return (
        <div className="sidebar">
            <PersonalSide info={info} setInfo={setInfo} />
            <EducationSide educations={educations} setEducations={setEducations} />
            <ProfessionalSide />
        </div>
    )
}
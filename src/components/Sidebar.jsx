import './../styles/Sidebar.css'
import EducationSide from './EducationSide'
import PersonalSide from './PersonalSide'
import ProfessionalSide from './ProfessionalSide'

export default function Sidebar({info, setInfo}) {

    return (
        <div className="sidebar">
            <PersonalSide info={info} setInfo={setInfo} />
            <EducationSide />
            <ProfessionalSide />
        </div>
    )
}
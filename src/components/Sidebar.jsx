import './../styles/Sidebar.css'
import EducationSide from './EducationSide'
import PersonalSide from './PersonalSide'
import ProfessionalSide from './ProfessionalSide'

export default function Sidebar() {

    return (
        <div className="sidebar">
            <PersonalSide />
            <EducationSide />
            <ProfessionalSide />
        </div>
    )
}
import './../styles/ProfessionalSide.css'
import './../styles/EducationSide.css'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import { mdiMenuUp } from '@mdi/js';
import { useState } from 'react';
import { SideEducationDisplay, AddEducation } from './SideSectionDisplay';

export default function ProfessionalSide({ experiences, setExperiences }) {

    const [isActive, setIsActive] = useState(false);

    const [experienceOpen, setExperienceOpen] = useState(-1);

    const [addExp, setAddExp] = useState(false);

    return (
        <div className="education-side">
            <div className="education-side-title" onClick={() => {
                setIsActive(!isActive)
                setExperienceOpen(-1)
                setAddExp(false)
            }}>
                <h2>Professional</h2>
                {!isActive ? <Icon path={mdiMenuDown} size={1} /> : <Icon path={mdiMenuUp} size={1} />}
            </div>
            {isActive &&
            <div className="select-education">
                {experiences.map((exp, idx) => {
                    return <SideEducationDisplay 
                    key={exp.id} elements={exp} setElements={setExperiences}
                    elementOpen={experienceOpen} setElementOpen={setExperienceOpen}
                    isOpen={experienceOpen === idx} idx={idx}
                    closeAdd={setAddExp} section='experience' />
                })}
                <AddEducation isOpen={addExp} setOpen={setAddExp} section='experience'
                setElements={setExperiences} close={setExperienceOpen} />
            </div>
            }
        </div>
    )
}
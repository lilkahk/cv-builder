import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import { mdiMenuUp } from '@mdi/js';
import { useState } from 'react';
import { SideSectionDisplay, AddElement } from './SideSectionDisplay';
import './../styles/SideSectionDisplay.css';

export default function ProfessionalSide({ experiences, setExperiences, isActive, setIsActive,
    setPer, setEd }) {

    const [experienceOpen, setExperienceOpen] = useState(-1);

    const [addExp, setAddExp] = useState(false);

    return (
        <div className="section-side">
            <div className="section-side-title" onClick={() => {
                setIsActive(!isActive)
                setPer(false)
                setEd(false)
                setExperienceOpen(-1)
                setAddExp(false)
            }}>
                <h2>Professional</h2>
                {!isActive ? <Icon path={mdiMenuDown} size={1} /> : <Icon path={mdiMenuUp} size={1} />}
            </div>
            {isActive &&
            <div className="select-elements">
                {experiences.map((exp, idx) => {
                    return <SideSectionDisplay 
                    key={exp.id} elements={exp} setElements={setExperiences}
                    elementOpen={experienceOpen} setElementOpen={setExperienceOpen}
                    isOpen={experienceOpen === idx} idx={idx}
                    closeAdd={setAddExp} section='experience' />
                })}
                <AddElement isOpen={addExp} setOpen={setAddExp} section='experience'
                setElements={setExperiences} close={setExperienceOpen} />
            </div>
            }
        </div>
    )
}
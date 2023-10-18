import './../styles/EducationSide.css'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import { mdiMenuUp } from '@mdi/js';
import { useState } from 'react';
import { SideEducationDisplay, AddEducation } from './SideSectionDisplay';

export default function EducationSide({educations, setEducations}) {

    const [isActive, setIsActive] = useState(false);

    const [educationOpen, setEducationOpen] = useState(-1);

    const [addOpen, setAddOpen] = useState(false);

    return (
        <div className="education-side">
            <div className="education-side-title" onClick={() => {
                setIsActive(!isActive)
                setEducationOpen(-1)
                setAddOpen(false)
            }}>
                <h2>Education</h2>
                {!isActive ? <Icon path={mdiMenuDown} size={1} /> : <Icon path={mdiMenuUp} size={1} />}
            </div>
            {isActive &&
            <div className="select-education">
                {educations.map((education, index) => {
                    return <SideEducationDisplay 
                    key={education.id} elements={education} setElements={setEducations}
                    elementOpen={educationOpen} setElementOpen={setEducationOpen}
                    isOpen={educationOpen === index} idx={index}
                    closeAdd={setAddOpen} section='education' />
                })}
                <AddEducation isOpen={addOpen} setOpen={setAddOpen}
                setElements={setEducations} close={setEducationOpen}/>
            </div>
            }
        </div>
    )
}
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import { mdiMenuUp } from '@mdi/js';
import { useState } from 'react';
import { SideSectionDisplay, AddElement } from './SideSectionDisplay';
import './../styles/SideSectionDisplay.css'

export default function EducationSide({ educations, setEducations, isActive, setIsActive,
    setPer, setPro }) {

    const [educationOpen, setEducationOpen] = useState(-1);

    const [addOpen, setAddOpen] = useState(false);

    return (
        <div className="section-side">
            <div className="section-side-title" onClick={() => {
                setIsActive(!isActive)
                setPer(false)
                setPro(false)
                setEducationOpen(-1)
                setAddOpen(false)
            }}>
                <h2>Education</h2>
                {!isActive ? <Icon path={mdiMenuDown} size={1} /> : <Icon path={mdiMenuUp} size={1} />}
            </div>
            {isActive &&
            <div className="select-elements">
                {educations.map((education, index) => {
                    return <SideSectionDisplay 
                    key={education.id} elements={education} setElements={setEducations}
                    elementOpen={educationOpen} setElementOpen={setEducationOpen}
                    isOpen={educationOpen === index} idx={index}
                    closeAdd={setAddOpen} section='education' />
                })}
                <AddElement isOpen={addOpen} setOpen={setAddOpen} section='education'
                setElements={setEducations} close={setEducationOpen}/>
            </div>
            }
        </div>
    )
}
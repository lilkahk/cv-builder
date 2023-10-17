import './../styles/EducationSide.css'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import { mdiMenuUp } from '@mdi/js';
import { mdiPlusThick } from '@mdi/js';
import { useState } from 'react';

export default function EducationSide({educations, setEducations}) {

    const [isActive, setIsActive] = useState(false);

    const [educationOpen, setEducationOpen] = useState(-1);

    return (
        <div className="education-side">
            <div className="education-side-title" onClick={() => setIsActive(!isActive)}>
                <h2>Education</h2>
                {!isActive ? <Icon path={mdiMenuDown} size={1} /> : <Icon path={mdiMenuUp} size={1} />}
            </div>
            {isActive &&
            <div className="select-education">
                {educations.map((education, index) => {
                    return <SideEducationDisplay 
                    key={education.id} education={education}
                    setEducationOpen={setEducationOpen} setEducations={setEducations}
                    educationOpen={educationOpen} isOpen={educationOpen === index} idx={index} />
                })}
                <div className="add-education">
                    <h5>Add Education</h5>
                    <Icon path={mdiPlusThick} size={0.55} />
                </div>
            </div>
            }
        </div>
    )
}

// Displays all the educations in the sidebar
function SideEducationDisplay({education, isOpen, idx, setEducationOpen, educationOpen, setEducations}) {

    const handleInput = event => {
        setEducations(prev => {
            const arr = [...prev]
            arr[idx][event.target.name] = event.target.value
            return arr
        })
    }

    return (
        <div className='side-education-display'>
            <h4 onClick={() => {
            return educationOpen === idx ? setEducationOpen(-1) : setEducationOpen(idx)
        }}> {education.school}</h4>
            {isOpen && 
                <div className="education-form">
                    <div className="education-field">
                        <label htmlFor="date">Date</label>
                        <input type="text" id='date' name='date' placeholder='08/2022 - Present' onChange={handleInput} />
                    </div>
                    <div className="education-field">
                        <label htmlFor="location">Location</label>
                        <input type="text" id='location' name='location' placeholder='Waterloo, Canada' onChange={handleInput} />
                    </div>
                    <div className="education-field">
                        <label htmlFor="school">Institution Name</label>
                        <input type="text" id='school' name='school' placeholder='University of Waterloo' onChange={handleInput} />
                    </div>
                    <div className="education-field">
                        <label htmlFor="major">Area of Study</label>
                        <input type="text" id='major' name='major' placeholder='Bachelor of Computer Science' onChange={handleInput} />
                    </div>
                </div>
            }
        </div>
    )
}
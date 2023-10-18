import './../styles/EducationSide.css'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import { mdiMenuUp } from '@mdi/js';
import { mdiPlusThick } from '@mdi/js';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

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
                    key={education.id} education={education}
                    setEducationOpen={setEducationOpen} setEducations={setEducations}
                    educationOpen={educationOpen} isOpen={educationOpen === index}
                    idx={index} closeAdd={setAddOpen} />
                })}
                <AddEducation isOpen={addOpen} setOpen={setAddOpen}
                setEducations={setEducations} close={setEducationOpen}/>
            </div>
            }
        </div>
    )
}

// Displays all the educations in the sidebar
function SideEducationDisplay({education, isOpen, idx, setEducationOpen, educationOpen, setEducations, closeAdd}) {

    const handleInput = event => {
        setEducations(prev => {
            const arr = [...prev]
            arr[idx][event.target.name] = event.target.value
            return arr
        })
    }

    const deleteSection = event => {
        setEducationOpen(-1)
        setEducations(prev => {
            const arr = [...prev]
            arr.splice(idx, 1)
            return arr
        })
    }

    const noh4 = event => {
        if(event.target.tagName === 'DIV') {
            closeAdd(false)
            educationOpen === idx ? setEducationOpen(-1) : setEducationOpen(idx)
        }
    }

    const pointer = event => {
        if (event.target.tagName === 'DIV') {
            event.target.style.cursor = 'pointer'
        }
    }

    return (
        <div className='side-education-display' onClick={noh4} onMouseOver={pointer} >
            <h4 onClick={() => {
                closeAdd(false)
                return educationOpen === idx ? setEducationOpen(-1) : setEducationOpen(idx)}}> 
                {education.school}</h4>
            {isOpen && 
            <>
            <EducationForm handleInput={handleInput} education={education} />
            <div className="delete-section" onClick={deleteSection}>Delete</div>
            </>
            }
        </div>
    )
}

function AddEducation({isOpen, setOpen, setEducations, close}) {

    const confirmEducation = event => {
        // Gather data
        const form = event.target.parentNode.childNodes[1]
        const childs = form.childNodes
        const obj = {
            id: uuid(),
            date: childs[0].childNodes[1].value,
            location: childs[1].childNodes[1].value,
            school: childs[2].childNodes[1].value,
            major: childs[3].childNodes[1].value
        }
        if (obj.school === '') {
            childs[2].classList.add('invalid-school')
            return
        }
        // Update state
        setEducations(prev => {
            const arr = [...prev]
            arr.push(obj)
            return arr
        })
        // Close form
        setOpen(false)
    }

    return (
        <div className="add-education">
            <div className="add-education-title" onClick={() => {
                setOpen(!isOpen)
                close(-1)}}>
                <h5>Add Education</h5>
                <Icon path={mdiPlusThick} size={0.55} />
            </div>
            {isOpen &&
            <>
                <EducationForm add={true} />
                <div className="confirm-add" onClick={confirmEducation} >Confirm</div>
            </>
            }
        </div>
    )
}

function EducationForm({ handleInput = (() => null), education = {}, add = false }) {
    return (
        <div className="education-form">
            <div className="education-field">
                <label htmlFor="date">Date</label>
                <input type="text" id='date' name='date' value={education.date}
                placeholder='08/2022 - Present' onChange={handleInput} />
            </div>
            <div className="education-field">
                <label htmlFor="location">Location</label>
                <input type="text" id='location' name='location' value={education.location}
                placeholder='Waterloo, Canada' onChange={handleInput} />
            </div>
            <div className="education-field">
                <label htmlFor="school" className={add ? 'school-label' : null }>Institution Name</label>
                <input type="text" id='school' name='school' value={education.school}
                placeholder='University of Waterloo' onChange={handleInput} />
            </div>
            <div className="education-field">
                <label htmlFor="major">Area of Study</label>
                <input type="text" id='major' name='major' value={education.major}
                placeholder='Bachelor of Computer Science' onChange={handleInput} />
            </div>
        </div>
    )
}
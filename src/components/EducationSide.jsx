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
                <AddEducation isOpen={addOpen} setOpen={setAddOpen} setEducations={setEducations} />
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

    return (
        <div className='side-education-display'>
            <h4 onClick={() => {
                closeAdd(false)
                return educationOpen === idx ? setEducationOpen(-1) : setEducationOpen(idx)}}> 
                {education.school}</h4>
            {isOpen && <EducationForm handleInput={handleInput} />}
        </div>
    )
}

function AddEducation({isOpen, setOpen, setEducations, close}) {

    const handleInput = event => {
        const parent = event.target.parentNode.parentNode
        const childs = parent.childNodes
        const obj = {
            new: true,
            id: uuid(),
            date: childs[0].childNodes[1].value,
            location: childs[1].childNodes[1].value,
            school: childs[2].childNodes[1].value,
            major: childs[3].childNodes[1].value
        }
        setEducations(prev => {
            const arr = [...prev]
            const last = arr[arr.length - 1]
            if (last.hasOwnProperty('new')) {
                arr[arr.length - 1] = obj
            } else {
                arr.push(obj)
            }
            return arr
        })
    }

    const confirmEducation = event => {
        // Remove new property
        setEducations(prev => {
            const arr = [...prev]
            delete arr[arr.length - 1].new
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
                <EducationForm handleInput={handleInput} />
                <div className="confirm-add" onClick={confirmEducation} >Confirm</div>
            </>
            }
        </div>
    )
}

function EducationForm({handleInput}) {
    return (
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
    )
}
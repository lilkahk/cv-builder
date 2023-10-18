import { v4 as uuid } from 'uuid';
import { mdiPlusThick } from '@mdi/js';
import Icon from '@mdi/react';

export { SideEducationDisplay, AddEducation }

// Displays all the elements in the sidebar
function SideEducationDisplay({elements, setElements, elementOpen,
     setElementOpen, isOpen, idx, closeAdd, section}) {

    const handleInput = event => {
        setElements(prev => {
            const arr = [...prev]
            arr[idx][event.target.name] = event.target.value
            return arr
        })
    }

    const deleteSection = event => {
        setElementOpen(-1)
        setElements(prev => {
            const arr = [...prev]
            arr.splice(idx, 1)
            return arr
        })
    }

    const noh4 = event => {
        if(event.target.tagName === 'DIV') {
            closeAdd(false)
            elementOpen === idx ? setElementOpen(-1) : setElementOpen(idx)
        }
    }

    const pointer = event => {
        if (event.target.tagName === 'DIV') {
            event.target.style.cursor = 'pointer'
        }
    }

    return (
        <div className='side-education-display'onClick={noh4} onMouseOver={pointer} >
            <h4 onClick={() => {
                closeAdd(false)
                return elementOpen === idx ? setElementOpen(-1) : setElementOpen(idx)}}> 
                {elements.school || elements.company}</h4>
            {isOpen && 
            <>
            <EducationForm handleInput={handleInput} elements={elements} section={section} />
            <div className="delete-section" onClick={deleteSection}>Delete</div>
            </>
            }
        </div>
    )
}

function AddEducation({isOpen, setOpen, setElements, close}) {

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
        setElements(prev => {
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

function EducationForm({ handleInput = (() => null), elements = {}, add = false, section }) {
    return (
        <div className="education-form">
            <div className="education-field">
                <label htmlFor="date">Date</label>
                <input type="text" id='date' name='date' value={elements.date}
                placeholder='08/2022 - Present' onChange={handleInput} />
            </div>
            <div className="education-field">
                <label htmlFor="location">Location</label>
                <input type="text" id='location' name='location' value={elements.location}
                placeholder='Waterloo, Canada' onChange={handleInput} />
            </div>
            { section === 'education' &&
                <>
                     <div className="education-field">
                        <label htmlFor="school" className={add ? 'school-label' : null }>Institution Name</label>
                        <input type="text" id='school' name='school' value={elements.school}
                        placeholder='University of Waterloo' onChange={handleInput} />
                    </div>
                    <div className="education-field">
                        <label htmlFor="major">Area of Study</label>
                        <input type="text" id='major' name='major' value={elements.major}
                        placeholder='Bachelor of Computer Science' onChange={handleInput} />
                    </div>
                </>
            }
            { section === 'experience' &&
                <>
                    <div className="education-field">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id='company' name='company' value={elements.company}
                        placeholder='ABC Inc.' onChange={handleInput} />
                    </div>
                    <div className="education-field">
                        <label htmlFor="role">Role</label>
                        <input type="text" id='role' name='role' value={elements.role}
                        placeholder='Front-End Developer' onChange={handleInput} />
                    </div>
                    <div className="education-field">
                        <label htmlFor="description">Description</label>
                        <input type="text" id='description' name='description' value={elements.description}
                        placeholder='Designed the front end of web applications' onChange={handleInput} />
                    </div>
                </>
            }
        </div>
    )
}
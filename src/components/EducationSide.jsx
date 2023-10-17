import './../styles/EducationSide.css'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import { mdiMenuUp } from '@mdi/js';
import { useState } from 'react';

export default function EducationSide() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="education-side">
            <div className="education-side-title" onClick={() => setIsActive(!isActive)}>
                <h2>Education</h2>
                {!isActive ? <Icon path={mdiMenuDown} size={1} /> : <Icon path={mdiMenuUp} size={1} />}
            </div>
            {isActive &&
            <div className="select-education">
                <div>University of Waterloo</div>
                <div className="add-education">Add Education</div>
            </div>
            }
        </div>
    )
}
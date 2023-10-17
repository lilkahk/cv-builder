import './../styles/ProfessionalSide.css'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import { mdiMenuUp } from '@mdi/js';
import { useState } from 'react';

export default function ProfessionalSide() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="professional-side">
            <div className="professional-side-title" onClick={() => setIsActive(!isActive)}>
                <h2>Professional</h2>
                {!isActive ? <Icon path={mdiMenuDown} size={1} /> : <Icon path={mdiMenuUp} size={1} />}
            </div>
            {isActive &&
            <div className="select-professional">
                <div>Umbrella Inc.</div>
                <div>Black Mesa Labs</div>
                <div className="add-professional">Add Experience</div>
            </div>
            }
        </div>
    )
}
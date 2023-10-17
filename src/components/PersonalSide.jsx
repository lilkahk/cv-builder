import './../styles/PersonalSide.css'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import { mdiMenuUp } from '@mdi/js';
import { useState } from 'react';

export default function PersonalSide() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="personal-side">
            <div className="personal-title" onClick={() => setIsActive(!isActive)}>
                <h2>Personal Information</h2>
                {!isActive ? <Icon path={mdiMenuDown} size={1} /> : <Icon path={mdiMenuUp} size={1} />}
            </div>
            {isActive && 
            <div className="personal-form">
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="John Doe"/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="john.doe@example.com"/>
                </div>
                <div className="field">
                    <label htmlFor="tel">Phone</label>
                    <input type="phone" name="phone" id="phone" placeholder="(123) 456-7890"/>
                </div>
                <div className="field">
                    <label htmlFor="addres">Address</label>
                    <input type="text" name="address" id="address" placeholder='Waterloo, Canada'/>
                </div>
            </div>}
        </div>
    )
}
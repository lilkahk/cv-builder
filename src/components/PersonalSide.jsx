import './../styles/PersonalSide.css'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';

export default function PersonalSide() {
    return (
        <div className="personal-side">
            <div className="personal-title">
                <h2>Personal Information</h2>
                <Icon path={mdiMenuDown} size={1} />
            </div>
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
                    <input type="text" name="address" id="address"/>
                </div>
            </div>
        </div>
    )
}
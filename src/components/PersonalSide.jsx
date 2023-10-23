import './../styles/PersonalSide.css'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import { mdiMenuUp } from '@mdi/js';

export default function PersonalSide({ info, setInfo, isActive, setIsActive, setEd, setPro }) {

    const changeField = event => {
        setInfo(prev => {
            const obj = {...prev}
            obj[event.target.name] = event.target.value
            return obj
        })
    }

    return (
        <div className="personal-side" >
            <div className="personal-title" onClick={() => {
                setIsActive(!isActive)
                setEd(false)
                setPro(false)
                isActive
                ? document.querySelector('.personal-side').classList.remove('section-animate')
                : document.querySelector('.personal-side').classList.add('section-animate')
            }}>
                <h2>Personal</h2>
                {!isActive ? <Icon path={mdiMenuDown} size={1} /> : <Icon path={mdiMenuUp} size={1} />}
            </div>
            {isActive && 
            <div className="personal-form elements-animate">
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="John Doe"
                    onChange={changeField} value={info.name} />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="john.doe@example.com"
                    onChange={changeField} value={info.email} />
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" placeholder="(123) 456-7890"
                    onChange={changeField} value={info.phone} />
                </div>
                <div className="field">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder='Waterloo, Canada'
                    onChange={changeField} value={info.address} />
                </div>
            </div>}
        </div>
    )
}
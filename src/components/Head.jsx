import './../styles/Head.css'
import Icon from '@mdi/react';
import { mdiEmailOutline } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

export default function Head() {
    return (
        <div className='cv-head'>
            <h1 className='header-name'>John Doe</h1>
            <div className='socials'>
                <Social text={'abc@example.com'} path={mdiEmailOutline} />
                <Social text={'(123)-456-7890'} path={mdiPhone} />
                <Social text={'Waterloo, Canada'} path={mdiMapMarker} />
            </div>
        </div>
    )
}

function Social({text, path}) {
    return (
        <div className='social'>
            <Icon className='header-icon' path={path} size={1} />
            <p>{text}</p>
        </div>
    )
}
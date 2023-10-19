import './../styles/Head.css'
import Icon from '@mdi/react';
import { mdiEmailOutline } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

export default function Head({ info, color }) {


    console.log('a')

    return (
        <div className='cv-head' style={{backgroundColor: color}} >
            <h1 className='header-name'>{info.name}</h1>
            <div className='socials'>
                <Social text={info.email} path={mdiEmailOutline} />
                <Social text={info.phone} path={mdiPhone} />
                <Social text={info.address} path={mdiMapMarker} />
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
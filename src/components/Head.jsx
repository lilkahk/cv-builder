import './../styles/Head.css'
import Icon from '@mdi/react';
import { mdiEmailOutline } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

export default function Head({ info, color }) {

    const txtColor = hexToRgb(color);

    return (
        <div className='cv-head' style={{backgroundColor: color, color: txtColor}}>
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

function hexToRgb(hex) {
    // Remove the '#'
    hex = hex.replace(/^#/, '');
    // Get r,g,b
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    // Determine the color of the text
    return r + g + b > 600 ? '#000000' : '#ffffff'
}

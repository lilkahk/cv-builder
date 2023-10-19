import './../styles/Cv.css'
import Education from './Education';
import Head from './Head';
import Professional from './Professional';


export default function Cv({ info, educations, experiences, color }) {
    return (
        <div className="cv">
            <Head info={info} color={color} />
            <Education educations={educations} />
            <Professional experiences={experiences} />
        </div>
    )
}
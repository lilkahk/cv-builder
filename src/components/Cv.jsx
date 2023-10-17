import './../styles/Cv.css'
import Education from './Education';
import Head from './Head';
import Professional from './Professional';


export default function Cv({info}) {
    return (
        <div className="cv">
            <Head info={info} />
            <Education />
            <Professional />
        </div>
    )
}
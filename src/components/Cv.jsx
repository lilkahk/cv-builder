import './../styles/Cv.css'
import Education from './Education';
import Head from './Head';
import Professional from './Professional';


export default function Cv() {
    return (
        <div className="cv">
            <Head />
            <Education />
            <Professional />
        </div>
    )
}
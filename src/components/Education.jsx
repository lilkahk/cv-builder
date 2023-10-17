import './../styles/Education.css'

export default function Education() {
    return (
        <div className="education">
            <h2 className="education-title">Education</h2>
            <Content 
                date={'08/2023 - Present'}
                location={'Waterloo, Canada'}
                school={'University of Waterloo'}
                major={'Bachelor of Computer Science'}
            />
        </div>
    )
}

function Content({date, location, school, major}) {
    return (
        <div className="education-description">
             <div className="education-dates-location">
                <div className="education-dates">{date}</div>
                <div className="education-location">{location}</div>
            </div>
            <div className="education-info">
                <div className="school-name">{school}</div>
                <div className="major">{major}</div>
            </div>
        </div>
    )
}
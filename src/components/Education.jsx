import './../styles/Education.css'

export default function Education({educations}) {
    return (
        <div className="education">
            <h2 className="education-title">Education</h2>
            {educations.map(education => {
                return <Content key={education.id}
                        date={education.date}
                        location={education.location}
                        school={education.school}
                        major={education.major}
                        />
            })}
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
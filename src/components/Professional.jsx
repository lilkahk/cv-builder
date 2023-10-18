import './../styles/Professional.css'

export default function Professional({ experiences }) {
    return (
        <div className="professional">
            <h2 className="professional-title">Professional Experience</h2>
            {experiences.map(exp => {
                return <Content key={exp.id} date={exp.date} location={exp.location}
                company={exp.company} role={exp.role} description={exp.description} />
            })}
        </div>
    )
}

function Content({date, location, company, role, description}) {
    return (
        <div className="professional-description">
            <div className="professional-dates-location">
                <div className="professional-dates">{date}</div>
                <div className="professional-location">{location}</div>
            </div>
            <div className="professional-info">
                <div className="company-name">{company}</div>
                <div className="role">{role}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    )
}
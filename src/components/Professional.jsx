import './../styles/Professional.css'

export default function Professional() {
    return (
        <div className="professional">
            <h2 className="professional-title">Professional Experience</h2>
            <Content 
                date={'08/2020 - present'} 
                location={'New York City, US'} 
                name={'Umbrella Inc.'}
                role={'UX & UI Designer'}
                description={'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android'}
            />
            <Content 
                date={'04/2018 – 02/2019'}
                location={'Berlin, Germany'}
                name={'Black Mesa Labs'}
                role={'UX Research Assistant'}
                description={'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.'}
            />
            <Content 
                date={'04/2018 – 02/2019'}
                location={'Berlin, Germany'}
                name={'Black Mesa Labs'}
                role={'UX Research Assistant'}
                description={'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.'}
            />
        </div>
    )
}

function Content({date, location, name, role, description}) {
    return (
        <div className="professional-description">
            <div className="professional-dates-location">
                <div className="professional-dates">{date}</div>
                <div className="professional-location">{location}</div>
            </div>
            <div className="professional-info">
                <div className="company-name">{name}</div>
                <div className="role">{role}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    )
}
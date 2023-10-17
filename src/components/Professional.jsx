import './../styles/Professional.css'

export default function Professional() {
    return (
        <div className="professional">
            <h2 className="professional-title">Professional Experience</h2>
            <Content 
                date={'08/2021 - present'} 
                location={'San Francisco, US'} 
                name={'ABC Inc.'}
                role={'UX & UI Designer'}
                description={'Collaborated on user experience and user interface designs for a diverse clientele, spanning self-service applications in telecommunications to mobile games on iOS and Android platforms.'}
                />
            <Content 
                date={'04/2018 – 010/2020'}
                location={'London, England'}
                name={'London Technologies'}
                role={'Front-End Developper'}
                description={'Created and implemented interactive and responsive web interfaces for a variety of clients, ranging from e-commerce platforms to data visualization dashboards, ensuring seamless user experiences across multiple devices and browsers.'}
                />
            <Content 
                date={'04/2016 – 02/2018'}
                location={'Berlin, Germany'}
                name={'German Interactive Labs'}
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
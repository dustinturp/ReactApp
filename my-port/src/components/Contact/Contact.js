const Contact = () => {
    return (
        <div>
        <div className="section-title-container">
                <h2 className="section-title">Contact Me</h2>
            </div>
            <div className="contact-methods">
                <div className="contact-social">
                    <h3>LinkedIn</h3>
                    <div className="contact-img" id="Linkedin-logo"> <a href="https://www.linkedin.com/in/dustinturp/" target="_blank" rel="noreferrer"> 
                    </a> </div>
                </div> 
                <div className="contact-social">
                <h3>Github</h3>
                <div className="contact-img" id="github-logo"> <a href="https://github.com/dustinturp" target="_blank" rel="noreferrer">
                </a></div>
                </div>
                <div className="contact-social">
                <h3>Meetup</h3>
                <div className="contact-img" id="meetup-logo"> <a href="https://www.meetup.com/members/178933462/" target="_blank" rel="noreferrer">
                    </a></div>
                </div>
            </div>
        </div>
    )
};

export default Contact;
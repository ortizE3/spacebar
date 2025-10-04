import AboutMessage from './AboutMessage/AboutMessage'
import AboutPeople from './AboutPeople/AboutPeople'

function About() {
    return (
        <>
            <AboutMessage />
            <div className='app-container'>
                <AboutPeople />

            </div>
        </>
    )
}

export default About
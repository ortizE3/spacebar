import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import { VideoLinks } from '../../../constants/VideoLinks'

function Juneteenth() {
    return (
        <>
            <ProjectHero videoSrc={VideoLinks.Juneteenth} />
            <div className='app-container'>

                <ProjectDescription
                    projectType={{
                        type: 'Event, Community, Cultural',
                        client: "Capital View Arts",
                        deliverables: "Event Highlight Video"
                    }}
                    projectDescription='We teamed up with Capital View Arts, a local nonprofit that uplifts Black and Brown artists in Austin, to celebrate Juneteenth. Our contribution was a single, vibrant highlight video capturing the essence of the event and the richness of the community’s culture and talent.'
                    deliverablesList={[
                        {
                            title: 'Event Highlight Video',
                            description: 'This 30-second to 1-minute video is a fast-paced, joyful cut set to music, showcasing local artists, live performances, and the community celebrating Juneteenth. It’s a visual tribute to the culture and togetherness of Austin’s Black and Brown artists and residents.'
                        }
                    ]}
                />
            </div>
        </>

    )
}

export default Juneteenth
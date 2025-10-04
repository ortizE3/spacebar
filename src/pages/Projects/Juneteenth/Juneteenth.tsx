import React from 'react'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import ProjectHero from '../../../components/ProjectHero/ProjectHero'

function Juneteenth() {
    return (
        <div className='app-container'>
            <ProjectHero
                dashSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/d9949fea415ebaba7dc224c6cedca798/manifest/video.mpd"
                hlsSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/d9949fea415ebaba7dc224c6cedca798/manifest/video.m3u8"
                title="Capital View Arts – Juneteenth Celebration Video "
                start="Capital View Arts – Juneteenth Celebration Video "
            />
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
    )
}

export default Juneteenth
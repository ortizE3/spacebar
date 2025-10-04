import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'

function GravRitualQuadrant() {
    return (
        <div className='app-container'>
            <ProjectHero
                dashSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/0d787ffbc3b9badc7b4d5f2c1d50ff4c/manifest/video.mpd"
                hlsSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/0d787ffbc3b9badc7b4d5f2c1d50ff4c/manifest/video.m3u8"
                title="GRAV – Find Your Ritual / Quadrant"
                start="GRAV – Find Your Ritual / Quadrant"
            />
            <ProjectDescription
                projectType={{
                    type: 'Lifestyle, Commercial',
                    client: "GRAV",
                    deliverables: "Video"
                }}
                projectDescription='The Quadrant video was created as part of GRAV’s “Find Your Ritual” campaign. The goal was to capture how different lifestyles and personalities converge around GRAV products, emphasizing routine, ritual, and shared experience. The project blended cinematic storytelling with product focus to reflect GRAV’s evolving brand voice.'
                deliverablesList={[
                    {
                        title: 'Video Production',
                        description: 'The video was structured into four narrative scenes, each showcasing different characters with their GRAV products. From lake kayaking to nightlife, the storylines converged in a shared home scene featuring GRAV Quartz Tip Cones and Cannabis Spirit. The video closed with a social, cliffhanger moment — a Gravitron reveal.'
                    }
                ]}
            />
        </div>
    )
}

export default GravRitualQuadrant
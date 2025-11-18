import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import { VideoLinks } from '../../../constants/VideoLinks'

function GravRitualQuadrant() {
    return (
        <>
            <ProjectHero videoSrc={VideoLinks.GravRitualQuadrant} />
            <div className='app-container'>
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
        </>
    )
}

export default GravRitualQuadrant
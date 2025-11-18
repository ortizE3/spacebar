import type { ProjectHeroProps } from '../../models/Props/ProjectHeroProps'
import CloudflareVideo from '../CloudflareVideo/CloudflareVideo'
import './ProjectHero.scss'

function ProjectHero(props: ProjectHeroProps) {
    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div className='hero-image-container'>
                    <CloudflareVideo
                        checkPageLoading
                        videoSrc={props.videoSrc}
                    />
                </div>
            </div >
        </>

    )
}

export default ProjectHero
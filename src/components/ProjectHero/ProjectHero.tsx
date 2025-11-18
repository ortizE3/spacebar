import type { ProjectHeroProps } from '../../models/Props/ProjectHeroProps'
import CloudflareVideo from '../CloudflareVideo/CloudflareVideo'
import HeroImage from '../HeroImage/HeroImage'
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

                {props.src && <HeroImage src={props.src} />}
            </div >

        </>

    )
}

export default ProjectHero
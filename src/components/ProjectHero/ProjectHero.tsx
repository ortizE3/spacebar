import type { ProjectHeroProps } from '../../models/Props/ProjectHeroProps'
import CloudflareVideo from '../CloudflareVideo/CloudflareVideo'
import HeroImage from '../HeroImage/HeroImage'
import './ProjectHero.scss'

function ProjectHero(props: ProjectHeroProps) {
    return (
        <>
            {props.hlsSrc && props.dashSrc &&
                <div className='flex flex-col items-center justify-center'>
                    <div className='hero-image-container'>
                        <CloudflareVideo
                            hlsSrc={props.hlsSrc}
                            dashSrc={props.dashSrc}
                        />
                    </div>

                    {props.src && <HeroImage src={props.src} />}
                </div >
            }

            {props.src &&
                <>
                    <div className='flex items-center justify-center hero-image-container'>
                        {props.src && <HeroImage src={props.src} />}
                    </div>
                </>
            }
        </>

    )
}

export default ProjectHero
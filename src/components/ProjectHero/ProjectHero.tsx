import type { ProjectHeroProps } from '../../models/Props/ProjectHeroProps'
import CloudflareVideo from '../CloudflareVideo/CloudflareVideo'
import HeroImage from '../HeroImage/HeroImage'
import NumLine from '../NumLine/NumLine'
import './ProjectHero.scss'

function ProjectHero(props: ProjectHeroProps) {
    return (
        <>
            {props.hlsSrc && props.dashSrc && <div className='flex flex-col items-center justify-center hero-image-container'>
                <h2 className='uppercase sb-semibold mb-xxxl'>{props.title}</h2>
                <CloudflareVideo
                    hlsSrc={props.hlsSrc}
                    dashSrc={props.dashSrc}
                />
                {props.src && <HeroImage src={props.src} />}
                <NumLine className='w-100 mt-xl mb-lg' start={props.start} end="/overview" />
            </div >
            }

            {props.src &&
                <>
                    <div className='flex items-center justify-center hero-image-container'>
                        <h2 className='uppercase sb-semibold mb-xxxl'>{props.title}</h2>
                        {props.src && <HeroImage src={props.src} />}
                    </div>
                    <NumLine className='w-100 mt-xl mb-lg' start={props.start} end="/overview" />
                </>
            }
        </>

    )
}

export default ProjectHero
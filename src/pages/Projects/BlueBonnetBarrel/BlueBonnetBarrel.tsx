import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import { VideoLinks } from '../../../constants/VideoLinks'

function BlueBonnetBarrel() {
    return (
        <>
            <ProjectHero videoSrc={VideoLinks.BlueBonnetBarrel} />
            <div className='app-container'>
                <ProjectDescription
                    projectType={{
                        type: 'Commercial, Product',
                        client: "Blue Bonnet Barrel Co.",
                        deliverables: "deliverables"
                    }}
                    projectDescription='Blue Bonnet Barrel Co. approached us to create a concise video that captured the core of their business: loading and shipping handcrafted whiskey barrels. The goal was to present their process with a balance of authenticity and polish, highlighting the scale of their operation while keeping it accessible for social and web use.'
                    deliverablesList={[
                        {
                            title: 'Video Production',
                            description: 'We produced a single video deliverable documenting the entire loading process. Using a mix of drone footage and handheld coverage, the video followed the journey from warehouse floor to truck bed, creating a dynamic, music-driven narrative that showcased the company’s efficiency and craftsmanship.'
                        }
                    ]}

                />
            </div>
        </>

    )
}

export default BlueBonnetBarrel
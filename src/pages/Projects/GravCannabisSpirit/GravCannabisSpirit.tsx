import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import { VideoLinks } from '../../../constants/VideoLinks'

function GravCannabisSpirit() {
    return (
        <>
            <ProjectHero videoSrc={VideoLinks.GravCannabisSpirit} />
            <div className='app-container'>
                <ProjectDescription
                    projectType={{
                        type: 'Product, Lifestyle',
                        client: "GRAV",
                        deliverables: "GIFs, Still-Life Photography"
                    }}
                    projectDescription='We collaborated with GRAV to craft a bold visual identity for their Cannabis Spirit launch. The goal was to capture the product in an elevated, design-forward way that spoke to both the sophistication of premium spirits and the playful creativity of cannabis culture. By blending still-life photography with looping cinemagraphs, we created assets tailored for both in-store signage and digital campaigns.'
                    deliverablesList={[
                        {
                            title: 'Cinemagraphs (GIFs)',
                            description: ' To bring motion into the campaign, we produced a series of seamless cinemagraphs — liquid pouring loops and cocktail preparation shots that add energy and depth to digital platforms. These looping visuals give GRAV’s social content a dynamic, eye-catching edge.'
                        },
                        {
                            title: 'Still-Life Photography',
                            description: ' Editorial-style photography was staged around cocktail rituals, with bold backdrops and prop styling to highlight the Cannabis Spirit bottle in everyday and elevated settings.'
                        }
                    ]}
                />
            </div>
        </>

    )
}

export default GravCannabisSpirit
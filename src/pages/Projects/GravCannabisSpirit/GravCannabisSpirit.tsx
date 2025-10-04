import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'

function GravCannabisSpirit() {
    return (
        <div className='app-container'>
            <ProjectHero
                dashSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/07fe8a9d507c0bde85fca921b79469e8/manifest/video.mpd"
                hlsSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/07fe8a9d507c0bde85fca921b79469e8/manifest/video.m3u8" title="GRAV – Cannabis Spirit Photography & Cinemagraphs"
                start="GRAV – Cannabis Spirit"
            />
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
    )
}

export default GravCannabisSpirit
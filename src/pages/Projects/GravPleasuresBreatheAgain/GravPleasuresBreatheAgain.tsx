import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'

function GravPleasuresBreatheAgain() {
    return (
        <>
            <ProjectHero
                dashSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/0fb84d0b0e450e86754a8288bfd741da/manifest/video.mpd"
                hlsSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/0fb84d0b0e450e86754a8288bfd741da/manifest/video.m3u8"
                title="GRAV x Pleasures – Breathe Again Campaign"
                start="GRAV x Pleasures – Breathe Again Campaign"
            />
            <div className='app-container'>

                <ProjectDescription
                    projectType={{
                        type: ' Lifestyle, Product, Commercial',
                        client: "GRAV x Pleasures",
                        deliverables: "Concept Video, Lifestyle Photography"
                    }}
                    projectDescription='For the limited-edition “Breathe Again” collaboration between GRAV and Los Angeles streetwear label Pleasures, we created a bold, cinematic campaign built around transformation and ritual. The goal was to merge Pleasures’ raw, alternative aesthetic with GRAV’s design-forward product identity, delivering a launch piece that stood out from traditional product campaigns.'
                    deliverablesList={[
                        {
                            title: 'Video Production',
                            description: 'The centerpiece of the campaign was a stylized short film inspired by laboratory experimentation. Characters in hazmat suits introduced the Pleasures x GRAV Gravitron as if unveiling a scientific discovery. As the product was used, the narrative bent into surreal visuals — blurring the line between controlled experiment and transcendent experience. The result was a moody, cinematic piece that aligned with Pleasures’ rebellious identity while showcasing the product in a fresh, experimental light.'
                        },
                        {
                            title: 'Lifestyle Photography',
                            description: 'Supporting visuals were captured in both studio and lifestyle contexts, extending the campaign across social media and brand platforms. Editorial-style images reinforced the theme of transformation, making the product the focal point within a dark, scientific-inspired aesthetic.'
                        }
                    ]}
                />
            </div>
        </>

    )
}

export default GravPleasuresBreatheAgain
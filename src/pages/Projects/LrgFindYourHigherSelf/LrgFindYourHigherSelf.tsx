import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import { VideoLinks } from '../../../constants/VideoLinks'

function LrgFindYourHigherSelf() {
    return (
        <>
            <ProjectHero videoSrc={VideoLinks.LrgFindYourHigherSelf} />
            <div className='app-container'>
                <ProjectDescription
                    projectType={{
                        type: 'Lifestyle, Product, Commercial',
                        client: "LRG x GRAV",
                        deliverables: "Lifestyle Photography, Product Photography, Campaign Video"
                    }}
                    projectDescription='For GRAV’s collaboration with Lifted Research Group (LRG), we developed the “Find Your Higher Self” campaign. The goal was to merge LRG’s streetwear culture with GRAV’s glassware innovation, producing visuals that felt authentic to both communities. Shot in raw, outdoor urban environments, the campaign blended product storytelling with a lifestyle edge that matched the collaboration’s cultural roots.'
                    deliverablesList={[
                        {
                            title: 'Campaign Video',
                            description: 'The campaign video tied the elements together with a cinematic rhythm. Slow, deliberate frames highlighted the apparel and glassware, while sharper edits added energy drawn from LRG’s streetwear roots. The result was a cohesive short film that blended fashion and product into a single cultural story.'
                        },
                        {
                            title: 'Lifestyle Photography',
                            description: 'Editorial-style photography featuring models styled in the GRAV x LRG collection. The images highlighted both apparel and the exclusive Wobble Bubbler, presented in relaxed but aspirational settings. The look and feel balanced gritty textures with polished composition to create a campaign-ready series.'
                        }
                    ]}
                />
            </div>
        </>

    )
}

export default LrgFindYourHigherSelf
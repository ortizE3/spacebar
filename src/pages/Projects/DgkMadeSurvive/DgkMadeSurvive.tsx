import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import Carousel from '../../../components/Carousel/Carousel'
import CarouselImage from '../../../components/CarouselImage/CarouselImage'
import HeroImage from '../../../components/HeroImage/HeroImage'
import { VideoLinks } from '../../../constants/VideoLinks'

function DgkMadeSurvive() {
    return (
        <>
            <ProjectHero videoSrc={VideoLinks.DgkMadeSurvive} />
            <div className='app-container'>

                <ProjectDescription
                    projectType={{
                        type: 'Lifestyle, Product, Commercial',
                        client: " DGK x GRAV",
                        deliverables: "Photography, Video"
                    }}
                    projectDescription='Made 2 Survive was the first collaboration between DGK and GRAV, bringing together street resilience and survivalist imagery. The campaign highlighted GRAV’s Milk Carton Bubbler in both urban and wilderness environments, emphasizing its versatility and toughness.'
                    deliverablesList={[
                        {
                            title: 'Video Production',
                            description: ' We developed a split-narrative video weaving between New York City streets and wilderness landscapes. Featuring DGK’s Will Mazzari, the story emphasized survival in any environment, supported by strong sound design and seamless transitions.'
                        },
                        {
                            title: 'Photography',
                            description: 'Still photography reinforced the campaign’s duality, shot at bodegas, skate parks, and outdoor landscapes. These editorial assets were repurposed across social media, retail, and campaign decks.'
                        }
                    ]}
                />
                <Carousel className='mb-xxxl'>
                    <CarouselImage imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/e75c3d41-9b1b-4d30-ef66-20f4813a9900/public' />
                    <CarouselImage imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/b8ceb00e-9bb2-4904-d3e0-62a52af71b00/public' />
                    <CarouselImage imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/c34c0bd1-8da5-4a67-fe09-acca2879b600/public' />
                    <CarouselImage imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/6fe1b831-feb5-4db4-fd9e-f4d363dce000/public' />
                    <CarouselImage imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/f1f930dd-f0ba-4608-7a0a-616339a83200/public' />
                </Carousel>
                <HeroImage src='https://grav.com/cdn/shop/files/dgkmts_hero_bg.jpg?v=1721189572&width=2000' alt="DGK Made 2 Survive campaign hero image" />
            </div>
        </>

    )
}

export default DgkMadeSurvive
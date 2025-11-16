import Carousel from "../../../components/Carousel/Carousel"
import CarouselImage from "../../../components/CarouselImage/CarouselImage"
import HeroImage from "../../../components/HeroImage/HeroImage"
import ProjectDescription from "../../../components/ProjectDescription/ProjectDescription"
import ProjectHero from "../../../components/ProjectHero/ProjectHero"

function DgkBubbleUp() {
    return (
        <div>
            <ProjectHero
                dashSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/730d9e590ea661c092a4dde21bd2348c/manifest/video.mpd"
                hlsSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/730d9e590ea661c092a4dde21bd2348c/manifest/video.m3u8"
            />
            <div className="app-container">

                <ProjectDescription
                    projectType={{
                        type: 'Lifestyle, Product, Commercial',
                        client: " DGK x GRAV",
                        deliverables: "Photography, Video, GIFs"
                    }}
                    projectDescription='For the Bubble Up campaign, DGK and GRAV collaborated on a corner-store-inspired product launch. The campaign needed to capture the skateboarding community’s raw energy while showcasing the Bubble Up slush cup bubbler and apparel capsule.'
                    deliverablesList={[
                        {
                            title: 'Video Production',
                            description: 'We produced two main videos. The first, directed by Joseph Vanoye, was a short cinematic piece inspired by Fun with Dick and Jane, blending humor with a playful corner-store heist scenario. The second was a high-energy edit featuring DGK pro skater Will Mazzari and model Javdee, combining fast cuts and street-style energy to highlight the product in action.'
                        },
                        {
                            title: 'Photography',
                            description: 'Editorial-style images captured the lifestyle aesthetic at a corner store and skate spot, featuring both talent and product. We also created looping GIFs and vertical-format teasers optimized for Instagram and TikTok.'
                        }
                    ]}
                />

                <Carousel className='mb-xxxl'>
                    <CarouselImage imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/fe61ee07-0265-42e2-5a15-d6c72d638b00/public' />
                    <CarouselImage imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/0aa6a157-0ffc-47da-8772-6c3074457800/public' />
                    <CarouselImage imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/2e173816-bd7f-4c7c-c81e-fb11e18fa400/public' />
                    <CarouselImage imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/0cbc0622-2c6d-4786-551f-0dd847d28800/public' />
                </Carousel>
                <HeroImage src='https://grav.com/cdn/shop/files/dgkbubble_header.jpg?v=1721195341&width=2000' alt="DGK Bubble Up campaign hero image" />
            </div>
        </div>
    )
}

export default DgkBubbleUp
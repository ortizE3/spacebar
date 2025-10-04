import CarouselImage from '../../../components/CarouselImage/CarouselImage'
import Carousel from '../../../components/Carousel/Carousel'
import NumLine from '../../../components/NumLine/NumLine'

function WorkPhotography() {
    return (
        <div className='mt-xxxl'>
            <h5 className='uppercase sb-semibold'>
                lifestyle+Product<br />
                photography
            </h5>
            <NumLine start='01' end='/02' />

            <div className='w-80 mb-xl sb-semibold'>We don’t just shoot products—we place them in context, with stories, environments, and textures that make them matter. Every photo is a chance to say something bigger about the brand, the moment, and the culture it lives in.</div>

            <Carousel className='mb-xxxl'>
                <CarouselImage
                    title='MOD Bikes'
                    href="/projects/mod-bikes"
                    description='Studio product shots showcasing bike models and key features.'
                    imageSrc='https://static.wixstatic.com/media/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg/v1/fill/w_451,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg'
                />
                <CarouselImage
                    title='GRAV – Cannabis Spirit Photography & Cinemagraphs'
                    href='/projects/grav-cannabis-spirit'
                    description='Still-life and cinemagraphs with vibrant, custom set design.'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/20536d9b-96c3-45cf-a8a7-7dbb76a80800/public'
                />
                <CarouselImage
                    title='DGK – Bubble Up Campaign'
                    href='/projects/dgk-bubble-up'
                    description='Corner store vibes meet raw lifestyle photography.'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/ea7fc2fa-b94d-4746-0ce6-f74b28bb5100/public'
                />
                <CarouselImage
                    title='LRG – Find Your Higher Self Campaign'
                    href='/projects/lrg-find-your-self'
                    description='Street editorial shoot for hoodie and tee campaign.'
                    imageSrc='https://static.wixstatic.com/media/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg/v1/fill/w_451,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg'
                />
                <CarouselImage
                    title='DGK – Made 2 Survive Campaign'
                    href="/projects/dgk-made-2-survive"
                    description='Urban product shoot on location in New York City.'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/b3f77c23-8e16-433e-3b81-f964605e6a00/public'
                />

            </Carousel>
        </div>
    )
}

export default WorkPhotography
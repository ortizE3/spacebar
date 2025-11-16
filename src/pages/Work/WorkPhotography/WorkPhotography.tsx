import CarouselImage from '../../../components/CarouselImage/CarouselImage'
import Carousel from '../../../components/Carousel/Carousel'
import NumLine from '../../../components/NumLine/NumLine'

import './WorkPhotography.scss'

function WorkPhotography() {
    return (
        <div className='mt-xxxl'>
            <h1 className='uppercase sb-semibold'>
                lifestyle + Product<br />
                photography
            </h1>
            <NumLine start='01' end='/02' />

            <h3 className='work-photography-text mb-xl'>We don’t just shoot products—we place them in context, with stories, environments, and textures that make them matter. Every photo is a chance to say something bigger about the brand, the moment, and the culture it lives in.</h3>

            <Carousel className='mb-xxxl'>
                <CarouselImage
                    title='MOD Bikes'
                    href="/projects/mod-bikes"
                    description='Studio product shots showcasing bike models and key features.'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/4ebef73e-1626-44d7-6d7e-f23a671de900/public'
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
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/b2b0e60c-ee9a-49ae-97d4-40e7a2191600/public'
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
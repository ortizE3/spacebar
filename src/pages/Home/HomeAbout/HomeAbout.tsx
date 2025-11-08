import { useNavigate } from 'react-router-dom'
import sbc from '../../../assets/images/sbc/sbc.png'
import Carousel from '../../../components/Carousel/Carousel'
import CarouselImage from '../../../components/CarouselImage/CarouselImage'
import SpaceBarButton from '../../../components/SpaceBarButton/SpaceBarButton'

import './HomeAbout.scss'

function HomeAbout() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='spacebar-home-about-container flex items-center justify-center mb-xxl'>
                <div>
                    <h6 className='mb-xl spacebar-home-about-text'>We create visuals that tell your story. From the first idea to the final cut, we’re here to bring your brand to life.</h6>
                    <SpaceBarButton className='mb-xl spacebar-home-about-button' onClick={() => navigate('/work')}>see the work</SpaceBarButton>
                </div>
                <div className='spacebar-home-about-img-container'>
                    <img className='spacebar-home-about-img' src={sbc} />
                </div>
            </div>

            <hr className='border-1 w-100 mt-xxxl mb-xxxl' />

            <Carousel className='mb-xxl'>
                <CarouselImage title='DGK – “Bubble Up”' href='/projects/dgk-bubble-up' description='Corner store vibes meet skate energy in a playful, high-style collab for DGK x GRAV.' imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/fe61ee07-0265-42e2-5a15-d6c72d638b00/public' />
                <CarouselImage title='LRG – “Find Your Higher Self”' href='/projects/lrg-find-your-self' description='An ecommerce experience driven by patagonias brand mission' imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/b2b0e60c-ee9a-49ae-97d4-40e7a2191600/public' />
                <CarouselImage title='MOD Bikes' description='Studio product photography showcasing the craftsmanship and design of Austin’s premier e-bike brand.' imageSrc='https://static.wixstatic.com/media/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg/v1/fill/w_451,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg' />
            </Carousel>
            <hr className='border-1 mb-xxxl' />
        </div>
    )
}

export default HomeAbout
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
            <div className='spacebar-home-about-container flex items-center justify-center mt-xxxl mb-xxxl'>
                <div>
                    <h5 className='w-60 mb-xl'>We create visuals that tell your story. From the first idea to the final cut, we’re here to bring your brand to life.</h5>
                    <SpaceBarButton className='mb-xl' onClick={() => navigate('/work')}>see the work</SpaceBarButton>
                </div>
                <div className='spacebar-home-about-img-container'>
                    <img className='spacebar-home-about-img' src={sbc} />
                </div>
            </div>

            <hr className='border-1 w-100 mt-xxxl mb-xxxl' />

            <Carousel className='mb-xxl'>
                <CarouselImage title='DGK' description='An ecommerce experience driven by patagonias brand mission' imageSrc='https://static.wixstatic.com/media/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg/v1/fill/w_451,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg' />
                <CarouselImage title='DGK' description='An ecommerce experience driven by patagonias brand mission' imageSrc='https://static.wixstatic.com/media/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg/v1/fill/w_451,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg' />
                <CarouselImage title='DGK' description='An ecommerce experience driven by patagonias brand mission' imageSrc='https://static.wixstatic.com/media/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg/v1/fill/w_451,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg' />
                <CarouselImage title='DGK' description='An ecommerce experience driven by patagonias brand mission' imageSrc='https://static.wixstatic.com/media/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg/v1/fill/w_451,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg' />
            </Carousel>
            <hr className='border-1 mb-xxxl' />
        </div>
    )
}

export default HomeAbout
import Carousel from '../../../components/Carousel/Carousel'
import CarouselImage from '../../../components/CarouselImage/CarouselImage'
import NumLine from '../../../components/NumLine/NumLine'

import './AboutPeople.scss'

function AboutPeople() {
    return (
        <div className='mt-xxxl'>
            <h1 className='uppercase sb-semibold'>Team & leadership</h1>
            <NumLine start='01' end='/02' />

            <h3 className='mb-xl about-people-message-text'>
                We’re a two-man creative team with complementary skills and a shared vision: produce high-impact content with zero wasted motion. From first call to final cut, we bring strategy, speed, and solid execution to every project.
            </h3>

            <Carousel className='mb-xxxl'>
                <CarouselImage title='jose saldiavar' description='Co-Founder / Creative Director + Video Lead' imageSrc='https://static.wixstatic.com/media/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg/v1/fill/w_451,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg' />
                <CarouselImage title='jesus flores' description='Co-Founder / Client Lead + Photography Lead' imageSrc='https://static.wixstatic.com/media/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg/v1/fill/w_451,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f86d1e_5f7bad2c10c34ce3b1b408d0c48302af~mv2.jpg' />
            </Carousel>
        </div>
    )
}

export default AboutPeople
import { useNavigate } from 'react-router-dom'
import CloudflareVideo from '../../../components/CloudflareVideo/CloudflareVideo'
import SpaceBarButton from '../../../components/SpaceBarButton/SpaceBarButton'
import './HomeSpotlight.scss'
import { VideoLinks } from '../../../constants/VideoLinks'

function HomeSpotlight() {
    const navigate = useNavigate()
    return (
        <>
            <div className='spacebar-spotlight-container mb-xxxl'>
                <div className='spacebar-spotlight-container-img flex justify-center'>
                    <CloudflareVideo videoSrc={VideoLinks.GravPleasuresBreatheAgainVertical} />
                </div>

                <div className='w-80'>
                    <h1 className='sb-semibold uppercase'>At Spacebar Creative, we’re all about authentic stories and bold visuals. Meet the team behind the camera.</h1>
                    <SpaceBarButton className='mb-xxxl' onClick={() => {
                        navigate('/about', { preventScrollReset: true })
                    }}>About us</SpaceBarButton>
                </div>

            </div>
        </>

    )
}

export default HomeSpotlight
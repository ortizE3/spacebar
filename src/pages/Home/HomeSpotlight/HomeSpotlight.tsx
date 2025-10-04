import { useNavigate } from 'react-router-dom'
import CloudflareVideo from '../../../components/CloudflareVideo/CloudflareVideo'
import SpaceBarButton from '../../../components/SpaceBarButton/SpaceBarButton'
import './HomeSpotlight.scss'

function HomeSpotlight() {
    const navigate = useNavigate()
    return (
        <>
            <div className='spacebar-spotlight-container mb-xxxl items-center'>
                <div className='spacebar-spotlight-container-img flex justify-center'>
                    <CloudflareVideo
                        dashSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/f6ad8941e7d0063e6853d489d9148f4c/manifest/video.mpd"
                        hlsSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/f6ad8941e7d0063e6853d489d9148f4c/manifest/video.m3u8"
                    />
                </div>

                <div className='w-80'>
                    <h4 className='sb-semibold uppercase'>At Spacebar Creative, we’re all about authentic stories and bold visuals. Meet the team behind the camera.</h4>
                    <SpaceBarButton className='mb-xxxl' onClick={() => {
                        navigate('/about', { preventScrollReset: true })
                    }}>About us</SpaceBarButton>
                </div>

            </div>
        </>

    )
}

export default HomeSpotlight
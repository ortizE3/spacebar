import CloudflareVideo from '../../../components/CloudflareVideo/CloudflareVideo'
import { VideoLinks } from '../../../constants/VideoLinks'
import './HomeVideo.scss'

function HomeVideo() {
    return (
        <div className='spacebar-home-video-container'>
            <CloudflareVideo checkPageLoading videoSrc={VideoLinks.HomeVideo} />
        </div>
    )
}

export default HomeVideo
import CloudflareVideo from '../../../components/CloudflareVideo/CloudflareVideo'
import './HomeVideo.scss'

function HomeVideo() {
    return (
        <div className='spacebar-home-video-container'>
            <CloudflareVideo
                checkPageLoading
                dashSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/56ed3d04600d6baf9d52013e88e40184/manifest/video.mpd"
                hlsSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/56ed3d04600d6baf9d52013e88e40184/manifest/video.m3u8"
            />

        </div>
    )
}

export default HomeVideo
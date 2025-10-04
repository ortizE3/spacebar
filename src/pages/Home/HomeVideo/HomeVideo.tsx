import CloudflareVideo from '../../../components/CloudflareVideo/CloudflareVideo'
import './HomeVideo.scss'


function HomeVideo() {
    return (
        <div className='spacebar-home-video-container'>
            <CloudflareVideo
                dashSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/730d9e590ea661c092a4dde21bd2348c/manifest/video.mpd"
                hlsSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/730d9e590ea661c092a4dde21bd2348c/manifest/video.m3u8"
            />

        </div>
    )
}

export default HomeVideo
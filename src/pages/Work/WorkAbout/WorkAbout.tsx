import CloudflareVideo from '../../../components/CloudflareVideo/CloudflareVideo'
import './WorkAbout.scss'

function WorkAbout() {
    return (
        <>
            <div className='app-container border-box h-100vh space-gray-background flex flex-col justify-center transparent-background pt-xxxl'>
                <div>

                    <span className='grow-container'>
                        <h2 className='uppercase sb-bold secondary-font-bold grow-text animation-delay-10 m-0 work-about-header-font'>We Make Brands Look Like Culture,</h2>
                    </span>

                    <span className='grow-container'>
                        <h2 className='uppercase sb-bold secondary-font-bold grow-text animation-delay-13 m-0 work-about-header-font'>Not Just Business.</h2>
                    </span>
                </div>

                <h2 className='work-message-text work-about-sub-header-font'>
                    Every frame, photo, and cut we make is designed to hit hard and stick. We don’t just create visuals—we create moments people remember.
                </h2>
            </div>

            <div className='hero-abs-background'>
                <CloudflareVideo
                    checkPageLoading
                    dashSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/ab21920fa2d6d753b74827ba5e60f16c/manifest/video.mpd"
                    hlsSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/ab21920fa2d6d753b74827ba5e60f16c/manifest/video.m3u8"
                />
            </div>

        </>

    )
}

export default WorkAbout
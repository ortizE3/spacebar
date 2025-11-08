import './AboutMessage.scss'

function AboutMessage() {
    return (
        <div className='app-container h-100vh border-box space-gray-background flex flex-col justify-center pt-xxxl'>

            <span className='grow-container'>
                <h1 className='uppercase sb-bold secondary-font-bold grow-text m-0 work-about-header-font'>WE TURN IDEAS</h1>
            </span>

            <span className='grow-container'>
                <h1 className='uppercase sb-bold secondary-font-bold grow-text animation-delay-3 m-0 work-about-header-font'>INTO IMPACT.</h1>
            </span>

            <div className="about-message-text work-about-sub-header-font">
                From branded content to cinematic storytelling, we build visual work that moves your audience—and your business—forward.
            </div>
        </div>
    )
}

export default AboutMessage
import NumLine from "../../../components/NumLine/NumLine"
import './AboutMessage.scss'

function AboutMessage() {
    return (
        <div className='app-container h-100vh border-box space-gray-background flex flex-col justify-center pt-xxxl'>

            <span className='grow-container'>
                <h2 className='uppercase sb-bold secondary-font-bold grow-text m-0'>WE TURN IDEAS</h2>
            </span>

            <span className='grow-container'>
                <h2 className='uppercase sb-bold secondary-font-bold grow-text animation-delay-3 m-0'>INTO IMPACT.</h2>
            </span>

            <div className="about-message-text">
                From branded content to cinematic storytelling, we build visual work that moves your audience—and your business—forward.
            </div>
            <NumLine start='01' end='/01' className='w-100 mt-xxxl mb-xxxl' />
        </div>
    )
}

export default AboutMessage
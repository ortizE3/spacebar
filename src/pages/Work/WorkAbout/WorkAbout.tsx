import NumLine from '../../../components/NumLine/NumLine'
import './WorkAbout.scss'

function WorkAbout() {
    return (
        <div className='app-container border-box h-100vh space-gray-background flex flex-col justify-center pt-xxxl'>
            <div>
                <span className='grow-container'>
                    <h2 className='uppercase sb-bold secondary-font-bold grow-text m-0'>We Make Brands Look Like Culture,</h2>
                </span>

                <span className='grow-container'>
                    <h2 className='uppercase sb-bold secondary-font-bold grow-text animation-delay-3 m-0'>Not Just Business.</h2>
                </span>
            </div>

            <div className='work-message-text'>
                Every frame, photo, and cut we make is designed to hit hard and stick. We don’t just create visuals—we create moments people remember.
            </div>

            <NumLine start='01' end='/01' className='w-100 mt-xxxl mb-xxxl' />
        </div>
    )
}

export default WorkAbout
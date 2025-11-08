import spacebar from '../../assets/images/spacebar/white-spacebar.png'
import './Footer.scss'

function Footer() {
    return (
        <div className='footer-container spacebar-black-background'>
            <img className='footer-img' src={spacebar} />
            <h3 className='mt-xl w-50'>
                <span>
                    We team up with ambitious brands and people who want to stand out. Let’s build something awesome together.&nbsp;
                    <a className='footer-link link-underline' href='mailto:spacebarcreative@gmail.com'>spacebarcreative@gmail.com</a>
                </span>
            </h3>


            {/* <label htmlFor='email-address-stay-in-the-know'>
                <h5 className='uppercase mt-xxxl mb-lg'>stay in the know</h5>
            </label>
            <div className='flex flex-row footer-input-container'>
                <input id='email-address-stay-in-the-know' type="email" className='footer-input' placeholder='Email Address'>
                </input>
                <button className='footer-button border-0'>
                    <img className='footer-arrow-icon' src={rightArrow} />
                </button>
            </div> */}

            {/* <h6 className='uppercase mt-xxl'>Social</h6>
            <div className='flex flex-col mt-lg'>
                <a><p className='spacebar-muted-font  m-0'>Instagram</p></a>
                <a><p className='spacebar-muted-font  m-0'>Twitter</p></a>
                <a><p className='spacebar-muted-font  m-0'>LinkedIn</p></a>
                <a><p className='spacebar-muted-font  m-0'>Facebook</p></a>
            </div> */}
        </div>
    )
}

export default Footer
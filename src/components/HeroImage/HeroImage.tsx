import './HeroImage.scss'

function HeroImage(props: any) {
    return (
        <div className='hero-image-container'>
            <img {...props} />
        </div>
    )
}

export default HeroImage
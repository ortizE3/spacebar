import './HeroImage.scss'

function HeroImage(props: any) {
    const { alt, ...restProps } = props;
    return (
        <div className='hero-image-container'>
            <img {...restProps} alt={alt || 'Hero image'} />
        </div>
    )
}

export default HeroImage
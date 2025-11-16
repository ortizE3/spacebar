import type { CarouselImageProps } from '../../models/Props/CarouselImageProps'
import './CarouselImage.scss'


function CarouselImage(props: CarouselImageProps) {

    function getImage() {
        return (
            <>
                <div>
                    <img src={props.imageSrc} alt={props.title || props.description || 'Carousel image'} />
                </div>
                {props.title && <h2 className='sb-semibold'>{props.title}</h2>}
            </>
        )
    }

    return (
        <div className='spacebar-carousel-image-container uppercase mb-lg'>
            {props.href && <a className='w-100' href={props.href}>
                {getImage()}
            </a>}
            {!props.href &&
                <>
                    {getImage()}
                </>
            }
            {props.description && <h4 className='spacebar-muted-font'>{props.description}</h4>}
        </div>
    )
}

export default CarouselImage
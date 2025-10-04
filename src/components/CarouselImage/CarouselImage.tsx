import type { CarouselImageProps } from '../../models/Props/CarouselImageProps'
import './CarouselImage.scss'


function CarouselImage(props: CarouselImageProps) {

    function getImage() {
        return (
            <>
                <div>
                    <img src={props.imageSrc}></img>
                </div>
                {props.title && <h6 className='sb-semibold'>{props.title}</h6>}
            </>
        )
    }

    return (
        <div className='spacebar-carousel-image-container uppercase mb-xxl'>
            {props.href && <a className='w-100' href={props.href}>
                {getImage()}
            </a>}
            {!props.href &&
                <>
                    {getImage()}
                </>
            }
            {props.description && <p className='p-small'>{props.description}</p>}
        </div>
    )
}

export default CarouselImage
import type { CarouselProps } from "../../models/Props/CarouselProps"

import './Carousel.scss'

function Carousel(props: CarouselProps) {
    return (
        <div className={`spacebar-carousel-container ${props.className ?? ''} spacebar-carousel-scrollbar`}>
            {props.children}
        </div>
    )
}

export default Carousel
import { useInView } from "../../hooks/hooks";
import type { CarouselVideoProps } from "../../models/Props/CarouselVideoProps"
import CloudflareVideo from "../CloudflareVideo/CloudflareVideo"

function CarouselVideo(props: CarouselVideoProps) {

    const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 }, 400);

    return (
        <div className='spacebar-carousel-image-container uppercase' ref={ref}>
            <a href={props.href}>
                <div>
                    <CloudflareVideo {...props.cloudflareVideoProps} inView={isInView} autoPlay={false} />
                </div>
                <h1 className='spacebar-carousel-title sb-semibold'>{props.title}</h1>
            </a>
            <h4 className='spacebar-muted-font  spacebar-carousel-sub'>{props.description}</h4>

        </div>
    )
}

export default CarouselVideo
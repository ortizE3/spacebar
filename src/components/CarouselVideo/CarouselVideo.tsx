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
                <h6 className='sb-semibold'>{props.title}</h6>
            </a>
            <p className='p-small'>{props.description}</p>

        </div>
    )
}

export default CarouselVideo
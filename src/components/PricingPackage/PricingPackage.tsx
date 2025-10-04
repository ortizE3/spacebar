import type { PricingPackageProps } from '../../models/Props/PricingPackageProps'
import SpaceBarButton from '../SpaceBarButton/SpaceBarButton'

function PricingPackage(props: PricingPackageProps) {
    return (
        <div className='mr-xxxl mb-xxl'>
            <h4 className="sb-semibold">${props.price}</h4>
            <hr className='w-10 m-0 border-1' />
            <h5 className="sb-semibold mt-xl uppercase">{props.title}</h5>
            <ul className='ul-no-indent'>
                {props && props.features.map((feature, index) => (
                    <li key={feature + index}>
                        {feature}
                    </li>
                ))}
            </ul>
            <SpaceBarButton>Let's work</SpaceBarButton>
        </div>
    )
}

export default PricingPackage
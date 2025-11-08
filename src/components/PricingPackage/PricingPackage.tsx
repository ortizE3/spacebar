import { useNavigate } from 'react-router-dom';
import type { PricingPackageProps } from '../../models/Props/PricingPackageProps'
import SpaceBarButton from '../SpaceBarButton/SpaceBarButton'

function PricingPackage(props: PricingPackageProps) {

    const navigate = useNavigate();

    return (
        <div className='mr-xxxl mb-xxl'>
            <h1 className="sb-semibold">${props.price}</h1>
            <hr className='w-10 m-0 border-1' />
            <h1 className="word-wrap sb-semibold mt-xl uppercase">{props.title}</h1>
            <ul className='ul-no-indent'>
                {props && props.features.map((feature, index) => (
                    <li key={feature + index}>
                        <h4>{feature}</h4>
                    </li>
                ))}
            </ul>
            <SpaceBarButton onClick={() => { navigate('/work') }}>Let's work</SpaceBarButton>
        </div>
    )
}

export default PricingPackage
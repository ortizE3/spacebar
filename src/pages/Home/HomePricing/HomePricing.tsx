import Carousel from "../../../components/Carousel/Carousel"
import PricingPackage from "../../../components/PricingPackage/PricingPackage"

function HomePricing() {
    return (
        <div>
            <h1 className="sb-semibold uppercase">Popular <br /> Packages</h1>

            <Carousel className="mb-xxxl">
                <PricingPackage price="500" title="Starter Brand Kit" features={[
                    '10 Web-Ready Photos',
                    '2 Vertical Reels',
                    '1-Hour Shoot',
                    'Basic Editing'
                ]} />

                <PricingPackage price="800" title="Social Stack" features={[
                    '15 Lifestyle + Product Photos',
                    '3 Edited Reels',
                    '1.5-Hour Shoot',
                    'Color Grading'
                ]} />

                <PricingPackage price="1200" title="Commercial Mini" features={[
                    '30-sec Lifestyle/Product Video',
                    '5 Supporting Photos',
                    '2-Hour Shoot',
                    'Sound Design'
                ]} />
            </Carousel>

            <hr className='border-1 mt-xl' />

        </div>
    )
}

export default HomePricing
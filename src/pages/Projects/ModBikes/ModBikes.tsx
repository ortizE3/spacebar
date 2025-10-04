import ProjectDescription from "../../../components/ProjectDescription/ProjectDescription"
import ProjectHero from "../../../components/ProjectHero/ProjectHero"

function ModBikes() {
    return (
        <div className='app-container'>
            <ProjectHero
                src='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/49a0340a-d86f-42d1-2a8b-1b3a5d4b8100/public'

                title="MOD Bike – Product Photography "
                start="MOD Bike – Product Photography"
            />
            <ProjectDescription
                projectType={{
                    type: 'Product',
                    client: "MOD Bike",
                    deliverables: "Product Photography"
                }}
                projectDescription='MOD Bike partnered with Spacebar Creative to elevate their brand presence through a complete set of high-end studio product photography. The focus was on capturing the sleek design, premium details, and craftsmanship of MOD’s lineup, ensuring that each image communicated both quality and innovation. These assets were created to strengthen MOD’s online store, marketing campaigns, and promotional materials.'
                deliverablesList={[
                    {
                        title: 'Product Photography',
                        description: 'We produced a full range of studio product shots for MOD’s Berlin, City+, and Groove models. This included clean full-bike images, as well as close-up detail shots highlighting key features such as the frame, saddle, drivetrain, lighting, and accessories. Each image was optimized for modular use across e-commerce, digital ads, and printed sales collateral.'
                    }
                ]}
            />
        </div>
    )
}

export default ModBikes
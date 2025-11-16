import ProjectDescription from "../../../components/ProjectDescription/ProjectDescription"
import ProjectHero from "../../../components/ProjectHero/ProjectHero"

function ModBikes() {
    return (
        <>
            <ProjectHero
                dashSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/0fb84d0b0e450e86754a8288bfd741da/manifest/video.mpd"
                hlsSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/0fb84d0b0e450e86754a8288bfd741da/manifest/video.m3u8"
            />
            <div className='app-container'>

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
        </>

    )
}

export default ModBikes
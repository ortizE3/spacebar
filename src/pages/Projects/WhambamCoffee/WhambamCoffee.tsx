import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'

function WhambamCoffee() {
    return (
        <>
            <ProjectHero
                dashSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/d9949fea415ebaba7dc224c6cedca798/manifest/video.mpd"
                hlsSrc="https://customer-e57j07qb5pp0c67r.cloudflarestream.com/d9949fea415ebaba7dc224c6cedca798/manifest/video.m3u8"
                title="WhamBam Coffee Truck"
                start="WhamBam Coffee Truck – Brand Video "
            />
            <div className='app-container'>

                <ProjectDescription
                    projectType={{
                        type: 'Commercial, Lifestyle',
                        client: "WhamBam Coffee Truck",
                        deliverables: "Brand Video"
                    }}
                    projectDescription='We partnered with WhamBam Coffee Truck to produce a vibrant brand video that showcases the easygoing, fun atmosphere of their mobile coffee shop. The video opens with scenic shots of Austin, then moves into a cheerful scene of a customer enjoying a coffee and a bagel right at the truck. The focus is on the customer experience—capturing moments of laughter, sipping coffee, and enjoying the laid-back vibe.'
                    deliverablesList={[
                        {
                            title: 'Brand Video',
                            description: 'This deliverable is a short and engaging lifestyle piece designed for social media and web use. We kept the editing light and breezy to reflect WhamBam’s friendly, approachable brand. The video showcases the customer’s joy as she enjoys her coffee and sandwich, making WhamBam feel like the perfect local stop for a morning treat or a casual break.'
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default WhambamCoffee
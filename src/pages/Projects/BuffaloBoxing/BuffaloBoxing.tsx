import ProjectDescription from "../../../components/ProjectDescription/ProjectDescription"
import ProjectHero from "../../../components/ProjectHero/ProjectHero"
import { VideoLinks } from "../../../constants/VideoLinks"

function BuffaloBoxing() {
    return (
        <>
            <ProjectHero videoSrc={VideoLinks.BuffaloBoxing} />
            <div className='app-container'>

                <ProjectDescription
                    projectType={{
                        type: 'Sports, Community, Commercial',
                        client: "Buffalo Boxing Gym",
                        deliverables: "Brand Promo Video, Alternate Drone Edit"
                    }}
                    projectDescription='Buffalo Boxing Gym asked us to capture the soul of their gym: a place where discipline, grit, and mentorship build bonds that last beyond the ring. Guided by their slogan “Bonds Born of Sweat,” we created a cinematic short promo that balances raw athleticism with emotional storytelling. The campaign was designed to inspire new members while honoring the tight-knit community already training at the gym.'
                    deliverablesList={[
                        {
                            title: 'Brand Video Video',
                            description: 'The main 30-second cut combines dynamic POV shots, cinematic close-ups, and coach/boxer interaction to highlight the intensity and mentorship that define Buffalo Boxing. Quick edits and music-driven pacing keep the energy high while reinforcing the gym’s identity.'
                        },
                        {
                            title: 'Drone Edit',
                            description: 'An alternate version was created using drone footage to provide a sweeping look at the gym environment. This cut emphasizes space, scale, and atmosphere, offering Buffalo Boxing a versatile asset for use across platforms'
                        }
                    ]}
                />
            </div>
        </>

    )
}

export default BuffaloBoxing
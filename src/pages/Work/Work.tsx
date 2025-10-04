import WorkAbout from "./WorkAbout/WorkAbout"
import WorkPhotography from "./WorkPhotography/WorkPhotography"
import WorkVideo from "./WorkVideo/WorkVideo"

function Work() {
    return (
        <>
            <WorkAbout />
            <div className="app-container">
                <WorkPhotography />
                <WorkVideo />
            </div>
        </>
    )
}

export default Work
import type { ProjectDescriptionProps } from "../../models/Props/ProjectDescriptionProps"
import ProjectType from "../ProjectType/ProjectType"

import './ProjectDescription.scss'

function ProjectDescription(props: ProjectDescriptionProps) {
    return (
        <div className="spacebar-project-description-container mb-xxxl">

            <ProjectType {...props.projectType} />

            <div className="flex flex-col mt-xxl">
                <div>
                    <h2 className="sb-semibold">Project Overview</h2>
                    <h3>{props.projectDescription}</h3>
                </div>

                <div>
                    <h2 className="sb-semibold uppercase">Deliverables</h2>
                    <ul>
                        {
                            props && props.deliverablesList.length > 0 && props.deliverablesList.map((deliverables) => {
                                return (
                                    <li className="mb-xxl" key={deliverables.title}>
                                        <h3 className="sb-semibold">{deliverables.title}</h3>
                                        <h3>{deliverables.description}</h3>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ProjectDescription
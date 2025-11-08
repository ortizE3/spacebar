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
                    {props.projectDescription}
                </div>

                <div>
                    <h2 className="sb-semibold uppercase">Deliverables</h2>
                    <ul>
                        {
                            props && props.deliverablesList.length > 0 && props.deliverablesList.map((deliverables) => {
                                return (
                                    <li className="mb-xxl" key={deliverables.title}>
                                        <div className="sb-semibold">{deliverables.title}</div>
                                        {deliverables.description}
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
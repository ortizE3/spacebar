import type { ProjectDescriptionProps } from "../../models/Props/ProjectDescriptionProps"
import ProjectType from "../ProjectType/ProjectType"

import './ProjectDescription.scss'

function ProjectDescription(props: ProjectDescriptionProps) {
    return (
        <div className="spacebar-project-description-container mb-xxxl">

            <ProjectType {...props.projectType} />

            <div className="flex flex-col mt-xxl">
                <div>
                    <div className="sb-semibold">Project Overview</div>
                    {props.projectDescription}
                </div>

                <div>
                    <h6 className="sb-semibold uppercase">Deliverables</h6>
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
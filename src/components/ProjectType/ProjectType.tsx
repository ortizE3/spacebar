import type { ProjectTypeProps } from '../../models/Props/ProjectDescriptionProps'

function ProjectType(props: ProjectTypeProps) {
    return (
        <h6 className='flex flex-col w-100'>
            <span><span className='sb-semibold'>Type: </span>{props.type}</span>
            <span><span className='sb-semibold'>Client: </span>{props.client}</span>
            <span><span className='sb-semibold'>Deliverables: </span>{props.deliverables}</span>
        </h6>
    )
}

export default ProjectType
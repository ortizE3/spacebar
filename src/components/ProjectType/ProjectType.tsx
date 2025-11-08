import type { ProjectTypeProps } from '../../models/Props/ProjectDescriptionProps'

function ProjectType(props: ProjectTypeProps) {
    return (
        <h3 className='flex flex-col w-100'>
            <span><span className='sb-semibold'>Type: </span>{props.type}</span>
            <span><span className='sb-semibold'>Client: </span>{props.client}</span>
            <span><span className='sb-semibold'>Deliverables: </span>{props.deliverables}</span>
        </h3>
    )
}

export default ProjectType
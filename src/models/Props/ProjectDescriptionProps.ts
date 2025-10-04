export class ProjectDescriptionProps {
    projectType: ProjectTypeProps = new ProjectTypeProps();
    projectDescription: string = ''
    deliverablesList: Deliverables[] = [];
}

export class ProjectTypeProps {
    type: string = '';
    client: string = '';
    deliverables: string = '';
}


class Deliverables {
    title: string = '';
    description: string = ''
}


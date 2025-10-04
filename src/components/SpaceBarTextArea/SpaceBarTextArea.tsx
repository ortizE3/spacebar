import './SpaceBarTextArea.scss'

function SpaceBarTextArea(props: any) {
    return (
        <textarea {...props} className={`spacebar-input ${props?.className ?? ''}`}></textarea>
    )
}

export default SpaceBarTextArea
import './SpaceBarTextArea.scss'

function SpaceBarTextArea(props: any) {
    return (
        <>
            <textarea {...props} className={`spacebar-input ${props?.className ?? ''} ${props.error && 'spacebar-input-error'}`}></textarea>
            <div className={`spacebar-error p-small m-0 ${!props.error && 'visibility-hide'}`}>{props.errorMessage}</div>
        </>
    )
}

export default SpaceBarTextArea
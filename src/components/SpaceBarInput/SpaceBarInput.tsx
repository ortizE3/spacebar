import './SpaceBarInput.scss'


function SpaceBarInput(props: any) {
    return (
        <>
            <input {...props} className={`spacebar-input ${props?.className ?? ''} ${props.error && 'spacebar-input-error'}`}></input>
            <div className={`spacebar-error p-small m-0 ${!props.error && 'visibility-hide'}`}>{props.errorMessage}</div>
        </>
    )
}

export default SpaceBarInput
import './SpaceBarInput.scss'


function SpaceBarInput(props: any) {
    return (
        <input {...props} className={`spacebar-input ${props?.className ?? ''}`}></input>
    )
}

export default SpaceBarInput
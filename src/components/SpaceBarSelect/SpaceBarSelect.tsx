
function SpaceBarSelect(props: any) {
    return (
        <select {...props} className={`spacebar-input ${props?.className ?? ''}`}>
            {props.children}
        </select>
    )
}

export default SpaceBarSelect
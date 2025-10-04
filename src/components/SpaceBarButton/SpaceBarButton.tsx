import type { SpaceBarButtonProps } from '../../models/Props/SpaceBarButtonProps'

import './SpaceBarButton.scss'

function SpaceBarButton(props: SpaceBarButtonProps) {
    return (
        <button className={`spacebar-button ${props.className ?? ''} sb-semibold`} onClick={props.onClick}>{props.children}</button>
    )
}

export default SpaceBarButton
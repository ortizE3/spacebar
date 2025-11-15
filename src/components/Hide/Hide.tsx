import type HideProps from '../../models/Props/HideProps'

import './Hide.scss'

function Hide(props: HideProps) {
    return (
        <div className={`${props.hide ? 'hide' : ''}`}>{props.children}</div>
    )
}

export default Hide
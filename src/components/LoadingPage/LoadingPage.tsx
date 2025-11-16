import { useContext, useEffect } from 'react';
import spacebar from '../../assets/images/spacebar/spacebar.png';
import LoadingPage from '../../context/loading';

import './LoadingPage.scss'

function PageLoadingDrawer() {
    const { loadingPage } = useContext(LoadingPage);

    useEffect(() => {
        document.body.style.overflow = loadingPage ? 'hidden' : 'auto';
    }, [loadingPage]);

    return (
        <>
            <div className={`loading-page-container ${!loadingPage ? 'done-loading' : 'hide'}`} >
                <div className={`loading-page-img-container ${!loadingPage ? 'grow-container' : ''}`}>
                    <img className={`${!loadingPage ? 'shrink-text' : ''}`} src={spacebar} />
                </div>
            </div>
        </>

    )
}

export default PageLoadingDrawer
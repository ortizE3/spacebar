

import { useEffect, useState } from 'react'
import spacebar from '../../assets/images/spacebar/spacebar.png'
import close from '../../assets/images/icons/close.svg';
import sbc from '../../assets/images/sbc/sbc-sc.png'
import './Header.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../../hooks/hooks';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isBlackFont, setIsBlackFont] = useState(false)

    const { width } = useWindowSize();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setIsBlackFont(location.pathname.includes('projects') || location.pathname.includes('work') || location.pathname.includes('about'))
    }, [location])

    useEffect(() => {
        setIsMobile(width < 800)
    }, [width])

    useEffect(() => {
        if (!isMobile)
            setShowMenu(false)
    }, [isMobile])

    useEffect(() => {
        document.body.style.overflow = showMenu ? 'hidden' : 'auto';
    }, [showMenu]);

    var closeMenu = () => {
        setShowMenu(false)
    }

    return (
        <>
            <div className={`spacebar-header-container items-center ${isBlackFont ? 'spacebar-black-font' : 'spacebar-white-font'}`}>
                <div className='header-container flex flex-col border-box'>
                    <div className='flex justify-between items-center'>
                        <button
                            className='no-button'
                            onClick={() => navigate('/')}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    navigate('/');
                                }
                            }}
                            aria-label="Navigate to home page"
                        >
                            <img className='spacebar-header-container-img spacebar-header-container-link' src={spacebar} alt="Spacebar Creative logo" />
                        </button>
                        {!showMenu && isMobile &&
                            <button
                                className='no-button'
                                onClick={() => setShowMenu(!showMenu)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setShowMenu(!showMenu);
                                    }
                                }}
                                aria-label="Open navigation menu"
                                aria-expanded={showMenu}
                            >
                                <h2 className='m-0 spacebar-black-font spacebar-header-mobile-menu-text secondary-font-bold spacebar-header-container-link uppercase'>
                                    menu
                                </h2>
                            </button>
                        }
                        {showMenu && isMobile &&
                            <button
                                className='no-button'
                                onClick={() => setShowMenu(false)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setShowMenu(false);
                                    }
                                }}
                                aria-label="Close navigation menu"
                            >
                                <img className='spacebar-header-container-img' src={close} alt="Close menu" />
                            </button>
                        }
                        {!isMobile &&
                            <div className='w-100 flex justify-center'>
                                <h3 className='flex gap-xxxl uppercase m-0'>
                                    <Link to='/'>Home</Link>
                                    <Link to='/about'>About</Link>
                                    <Link to='/work'>Work</Link>
                                </h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {
                <nav
                    className='header-container flex flex-col border-box h-100vh justify-between spacebar-header-mobile-menu'
                    style={{
                        opacity: showMenu && isMobile ? 1 : 0,
                        zIndex: showMenu && isMobile ? 1000 : -1000
                    }}
                    aria-label="Main navigation"
                    aria-hidden={!showMenu || !isMobile}
                >
                    <div className='mt-xxxl uppercase spacebar-white-font'>
                        <h1><Link onClick={closeMenu} to='/'>Home</Link></h1>
                        <h1><Link onClick={closeMenu} to='/about'>About</Link></h1>
                        <h1><Link onClick={closeMenu} to='/work'>Work</Link></h1>
                    </div>
                    <div>
                        <img className='spacebar-header-container-menu-bottom-img mb-md' src={sbc} alt="Spacebar Creative" />
                    </div>
                </nav>
            }
        </>

    )
}

export default Header
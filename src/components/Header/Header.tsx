

import { useEffect, useState } from 'react'
import spacebar from '../../assets/images/spacebar/spacebar.png'
import close from '../../assets/images/icons/close.svg';
import sbc from '../../assets/images/sbc/sbc-sc.png'
import './Header.scss'
import { useLocation } from 'react-router-dom';
import { useWindowSize } from '../../hooks/hooks';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isBlackFont, setIsBlackFont] = useState(false)

    const { width } = useWindowSize();

    const location = useLocation();

    useEffect(() => {
        setIsBlackFont(location.pathname.includes('projects'))
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


    }, [showMenu])

    return (
        <>
            <div className={`spacebar-header-container items-center ${isBlackFont ? 'spacebar-black-font' : 'spacebar-white-font'}`}>
                <div className='header-container flex flex-col border-box'>
                    <div className='flex justify-between items-center'>
                        <img className='spacebar-header-container-img' src={spacebar}></img>
                        {!showMenu && isMobile &&
                            <div>
                                <a className='spacebar-header-container-link uppercase' onClick={() => {
                                    setShowMenu(!showMenu)
                                }}>menu</a>
                            </div>
                        }
                        {showMenu && isMobile &&
                            <img className='spacebar-header-container-img' src={close} onClick={() => {
                                setShowMenu(false)
                            }}></img>
                        }
                        {!isMobile &&
                            <div className='w-100 flex justify-center'>
                                <p className='flex gap-xxxl uppercase m-0'>
                                    <a href='/'>Home</a>
                                    <a href='/about'>About</a>
                                    <a href='/work'>Work</a>
                                </p>
                            </div>
                        }
                    </div>
                </div>

            </div>


            {
                <menu className='flex flex-col border-box h-100vh justify-between spacebar-header-mobile-menu' style={{
                    opacity: showMenu && isMobile ? 1 : 0,
                    zIndex: showMenu && isMobile ? 1000 : -1000
                }}>
                    <div className='mt-xxxl uppercase spacebar-white-font'>
                        <h1><a href='/'>Home</a></h1>
                        <h1><a href='/about'>About</a></h1>
                        <h1><a href='/work'>Work</a></h1>
                    </div>

                    <div>
                        <img className='spacebar-header-container-menu-bottom-img mb-md' src={sbc} ></img>
                    </div>
                </menu>
            }
        </>

    )
}

export default Header
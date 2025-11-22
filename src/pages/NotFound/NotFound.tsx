function NotFound() {
    return (
        <div className='app-container h-100vh border-box flex flex-col justify-center'>
            <span className='grow-container'>
                <h1 className='uppercase sb-bold secondary-font-bold grow-text m-0 work-about-header-font'>404 :(</h1>
            </span>

            <span className='grow-container mt-xxl'>
                <h2 className='uppercase sb-bold secondary-font-bold grow-text animation-delay-1 m-0 work-about-header-font'>Oops! the page you were</h2>
            </span>

            <span className='grow-container'>
                <h2 className='uppercase sb-bold secondary-font-bold grow-text animation-delay-3 m-0 work-about-header-font'>looking for does not exist</h2>
            </span>
        </div>
    )
}

export default NotFound
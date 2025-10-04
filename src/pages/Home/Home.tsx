import HomeAbout from './HomeAbout/HomeAbout'
import HomePricing from './HomePricing/HomePricing'
import HomeProject from './HomeProject/HomeProject'
import HomeSpotlight from './HomeSpotlight/HomeSpotlight'
import HomeVideo from './HomeVideo/HomeVideo'

function Home() {
    return (
        <>
            <HomeVideo />
            <div className='app-container'>
                <HomeAbout />
                <HomePricing />
                <HomeProject />
                <HomeSpotlight />
            </div>
        </>
    )
}

export default Home
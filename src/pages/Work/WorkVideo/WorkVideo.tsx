import CarouselVideo from '../../../components/CarouselVideo/CarouselVideo'
import Carousel from '../../../components/Carousel/Carousel'
import NumLine from '../../../components/NumLine/NumLine'
import CarouselImage from '../../../components/CarouselImage/CarouselImage'

function WorkVideo() {
    return (
        <div>
            <h1 className='uppercase sb-semibold'>
                Video<br />
                Production
            </h1>
            <NumLine start='02' end='/02' />

            <h2 className='w-80 mb-xl sb-semibold'>We turn concepts into cinematic stories. Every video here is built to grab attention and never let go.</h2>

            <Carousel className='mb-xxxl'>
                <CarouselImage
                    title='DGK – Bubble Up'
                    href='/projects/dgk-bubble-up'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/bb98044b-3042-4e63-43b9-baea20df8100/public'
                    description='Corner store lifestyle vibes and skate energy, shot with Will Mazari.' />
                <CarouselImage
                    title='LRG – Find Your Higher Self'
                    href='/projects/lrg-find-your-self'
                    description='Urban editorial-style promo with fast cuts and moody street scenes.'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/4f5aebf3-b178-4d46-0ea4-c00b95ea2000/public' />
                <CarouselImage
                    title='DGK – Made 2 Survive'
                    href='/projects/dgk-made-2-survive'
                    description='Shot in NYC. Rugged pace, bold tone, high-function product feature.'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/becae240-2995-408b-0ef4-19e7f9b45f00/public' />
                <CarouselImage
                    title='Blue Bonnet Barrel Co.'
                    href='/projects/blue-bonnet-barrel'
                    description='Cinematic short capturing handcrafted whiskey in rural Texas.'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/4d8025ac-11f3-4974-5e10-6dc07fe3af00/public' />
                <CarouselImage
                    title='GRAV – Cannabis Spirit Cocktail Series'
                    href='/projects/grav-cannabis-spirit'
                    description='Playful, punchy drink recipe videos with a bold branded twist.'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/1cddfb13-695e-4b1d-9c65-88002b361000/public'
                />
                <CarouselVideo
                    title='GRAV – Find Your Ritual / Quadrant Video'
                    href="/projects/grav-ritual-quadrant"
                    description='A 4-scene lifestyle narrative showing cannabis across different lives.'
                    cloudflareVideoProps={{
                        dashSrc: "https://customer-e57j07qb5pp0c67r.cloudflarestream.com/0d787ffbc3b9badc7b4d5f2c1d50ff4c/manifest/video.mpd",
                        hlsSrc: "https://customer-e57j07qb5pp0c67r.cloudflarestream.com/0d787ffbc3b9badc7b4d5f2c1d50ff4c/manifest/video.m3u8"
                    }} />
                <CarouselImage
                    title='GRAV x Pleasures – Breathe Again'
                    href="/projects/grav-breathe-again"
                    description='Minimal, ambient, and mood-heavy visuals for a style-driven collab.'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/08ee0d33-bf40-48ee-ed72-29c9a1a43900/public'
                />
                <CarouselImage
                    title='Capital View Arts – Juneteenth Celebration'
                    href="/projects/juneteenth"
                    description='Event recap honoring Austin’s Black creatives, culture, and community.'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/87367d31-f16b-43f0-22de-3a555062d300/public'
                />
                <CarouselImage
                    title='Buffalo Boxing Gym – Bonds Born of Sweat'
                    href="/projects/buffalo-boxing"
                    description='Hard-hitting gym promo—POV shots, drone work, and real moments.'
                    imageSrc='https://imagedelivery.net/l-nGdq_yShSgiYDSPwYs7A/44bcc06f-2987-43f0-007c-5d9525dccd00/public' />
                <CarouselVideo
                    title='WhamBam Coffee Truck – Brand Video'
                    href="/projects/whambam-coffee"
                    description='Fast-paced visuals capturing hustle, grind, and brand personality.'
                    cloudflareVideoProps={{
                        dashSrc: "https://customer-e57j07qb5pp0c67r.cloudflarestream.com/07fe8a9d507c0bde85fca921b79469e8/manifest/video.mpd",
                        hlsSrc: "https://customer-e57j07qb5pp0c67r.cloudflarestream.com/07fe8a9d507c0bde85fca921b79469e8/manifest/video.m3u8"
                    }} />

            </Carousel>
        </div>
    )
}

export default WorkVideo
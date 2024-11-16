import { 
    About,
    Banner,
    ExploreFoods,
    FAQ,
    HeroSection,
    Newsletter,
    SecondHeroSection,
    Testimonials
} from './index'

function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <SecondHeroSection />
            <ExploreFoods />
            <Testimonials />
            <FAQ />
            <Banner />
            <Newsletter />
        </>
    )
}

export default Home
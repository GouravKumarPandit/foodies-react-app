import { Outlet } from 'react-router-dom'
import './App.css'
import { 
    Footer,
    NavBar,
} from './pages/index'

function App() {

    return (
        <div className='main-section'>
            <NavBar />
            <Outlet />
            {/* <HeroSection />
            <About />
            <SecondHeroSection />
            <ExploreFoods />
            <Testimonials />
            <FAQ />
            <Banner />
            <Newsletter /> */}
            <Footer />
        </div>
    )
}

export default App

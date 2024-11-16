// import {CounterBar} as "./"
import CounterBar from "./CounterBar"
import SecondHeroSection from './SecondHeroSection'
import Banner from './Banner'
import Newsletter from './Newsletter'
import { useLocation } from "react-router-dom"

function About() {
    const navigate = useLocation();

    return (
        <>
            <div className="tab-pane" id="aboutUs">
                <CounterBar />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6 mt-3">
                            <img src="Image/WebImg/img-1.png" className="img-fliud rounded" width="100%" height="100%" alt="" />
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className="row">
                                <div className="col">
                                    <h3 className="anch overflow-hidden">We Pride Ourselves On Making Real Food From The Best Ingredients.</h3>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur distinctio sapiente impedit quas dolores quae iure placeat repellendus amet nesciunt.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-danger">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-5 mt-3">
                            <div className="row">
                                <div className="col anch">
                                    <h2 className="overflow-hidden">
                                        We Make Everything By Hand With The Best Possible Ingredients.
                                    </h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor quidem soluta repellat rem, blanditiis facere adipisci quia amet eius, cum aut id iusto voluptas quae. Sed quis ea quam perferendis nemo laborum natus, facilis architecto impedit voluptate expedita porro eligendi soluta? Illum libero minus cum repellat perferendis magni dolores.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p><i className="fa-solid fa-check text-danger"></i>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    <p><i className="fa-solid fa-check text-danger"></i>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                                    <p><i className="fa-solid fa-check text-danger"></i>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus?</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-danger">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 mt-md-5">
                            <img src="Image/WebImg/img-2.png" width="100%" height="100%" className="img-fluid rounded" alt="" />
                        </div>
                    </div>
                </div>
            </div>  

            {
                navigate.pathname.slice(1) && 
                    <>
                        <SecondHeroSection />
                        <Banner />
                        <Newsletter />
                    </>
            }
        </>
    )
}

export default About
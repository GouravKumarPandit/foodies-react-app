import Banner from './Banner'
import Newsletter from './Newsletter'
import { useLocation } from "react-router-dom"

function ExploreFoods() {
    const navigate = useLocation();

    return (
        <>
            <div className="tab-pane" id="exploreFoods">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h2 className='anch text-center overflow-hidden'>Explore The Foods</h2>
                                    <p className="text-center mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa in earum distinctio, itaque rerum eius labore eligendi? Atque odio animi iusto consequatur aperiam voluptatum nam itaque et cumque maiores alias quod doloremque excepturi quibusdam ea sapiente omnis, sequi nisi. Distinctio, nisi iure? Dolores quis iste molestias officia? Id, perspiciatis voluptatum?</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-4 mt-md-0 mt-sm-5">
                                    <div className="card">
                                        <img src="Image/WebImg/img-3.jpg" className="card-img-top card-img" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title overflow-hidden">Rainbow Vegitable Sandwich</h5>
                                            <p className="card-text">Time: 15-20 Minutes | Serves: 1</p>
                                            <div className="btn btn-danger">Order Now</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-md-0 mt-sm-5">
                                    <div className="card">
                                        <img src="Image/WebImg/img-4.jpg" className="card-img-top card-img" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title overflow-hidden">Vegitarian Burger</h5>
                                            <p className="card-text">Time: 20-30 Minutes | Serves: 1</p>
                                            <div className="btn btn-danger">Order Now</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-md-0 mt-sm-5">
                                    <div className="card">
                                        <img src="Image/WebImg/img-5.jpg" className="card-img-top card-img" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title overflow-hidden">Raspberry Stuffed French Cake</h5>
                                            <p className="card-text">Time: 10-15 Minutes | Serves: 1</p>
                                            <div className="btn btn-danger">Order Now</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                navigate.pathname.slice(1) && 
                    <>
                        <Banner />
                        <Newsletter />
                    </>
            }
        </>
    )
}

export default ExploreFoods
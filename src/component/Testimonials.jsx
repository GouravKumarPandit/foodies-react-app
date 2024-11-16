import React from 'react'

function Testimonials() {
    return (
        <div className="tab-pane" id="review">
            <div className="jumbotron-fluid jumboHeight bg-danger mt-5">
                <h3 className="mt-5 w-25 m-auto text-center overflow-hidden">Testimonials</h3>
                <div className="carousel slide mt-5 mb-5" data-ride="carousel" id="myCarousel">
                    {/* <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="blockquote w-75 m-auto d-flex flex-column bg-white rounded">
                                <img src="Image/Review/review-1.jpg" className="img-fluid align-self-center rounded-circle mt-4" width="60px" alt="" />
                                <p className="text-center lead text-black mt-2 w-75 m-auto">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto quisquam eligendi dolores necessitatibus provident voluptatum incidunt laudantium non quasi."</p>
                                <footer className="blockquote-footer text-center text-danger mt-2 mb-5 w-75 m-auto">Gourav Kumar Pandit</footer>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="blockquote w-75 m-auto d-flex flex-column bg-white rounded">
                                <img src="Image/Review/review-2.jpg" className="img-fluid align-self-center rounded-circle mt-4" width="60px" alt="" />
                                <p className="text-center lead text-black mt-2  w-75 m-auto">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto quisquam eligendi dolores necessitatibus provident voluptatum incidunt laudantium non quasi.
                                </p>
                                <footer className="blockquote-footer text-center text-danger mt-2 mb-5  w-75 m-auto
                                ">Aashima Saxena</footer>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="blockquote w-75 m-auto d-flex flex-column bg-white rounded">
                                <img src="Image/Review/review-1.jpg" className="img-fluid align-self-center rounded-circle mt-4" width="60px" alt="" />
                                <p className="text-center lead text-black mt-2  w-75 m-auto
                                ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto quisquam eligendi dolores necessitatibus provident voluptatum incidunt laudantium non quasi.</p>
                                <footer className="blockquote-footer text-center text-danger mt-2 mb-5  w-75 m-auto
                                ">Ashwani Kumar</footer>
                            </div>
                        </div>
                    </div>
                    <a href="#myCarousel" className="carousel-control-prev" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a href="#myCarousel" className="carousel-control-next" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
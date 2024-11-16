import React from 'react'

function Footer() {
    return (
        <div className="container-fluid mt-5 bg-danger">
            <div className="row">
                <div className="col">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="list-inline d-flex justify-content-center footer">
                                <a className="list-inline-item px-3">Register</a>
                                <a className="list-inline-item px-3">Forum</a>
                                <a className="list-inline-item px-3">Affiliate</a>
                                <a className="list-inline-item px-3">FAQ</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="button-group d-flex justify-content-center">
                                <div className="btn btn-danger"><i className="fa-brands fa-facebook"></i></div>
                                <div className="btn btn-danger"><i className="fa-brands fa-twitter"></i></div>
                                <div className="btn btn-danger"><i className="fa-brands fa-youtube"></i></div>
                                <div className="btn btn-danger"><i className="fa-brands fa-linkedin"></i></div>
                                <div className="btn btn-danger"><i className="fa-brands fa-instagram"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <p className="text-danger text-white text-center">
                                &copy; 2024. Foodies. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
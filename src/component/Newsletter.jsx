import React from 'react'

function Newsletter() {
    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row">
                <div className="col d-flex flex-column">
                    <h4 className="w-75 m-auto text-center text-danger overflow-hidden">Hurry Up! Subscribe Our Newsletter And Get 25% Off</h4>
                    <p className="w-50 m-auto text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consequuntur!</p>
                    <div className="form-inline m-auto mt-4 d-sm-flex">
                        <div className="form-group w-sm-75">
                            <label htmlFor="#email" className="sr-only">Email Address Here</label>
                            <input type="email" name="" className="form-control" placeholder="Email Address Here" id="email" />
                        </div>
                        <div className="form-group mt-2 mt-sm-0">
                            <input type="button" value="Subscribe" className="button text-white h-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
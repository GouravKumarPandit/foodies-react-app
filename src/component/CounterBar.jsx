import React from 'react'

function CounterBar() {
    return (
        <div className="jumbotron">
            <div className="row bg-color">
                <div className="col-sm-3 text-center countingHieght"><p className="mt-4 text-light">1287+ <span>SAVINGS</span></p></div>
                <div className="col-sm-3 text-center countingHieght"><p className="mt-4 text-light">2274+ <span>PHOTOS</span></p></div>
                <div className="col-sm-3 text-center countingHieght"><p className="mt-4 text-light">1440+ <span>ROCKETS</span></p></div>
                <div className="col-sm-3 text-center countingHieght"><p className="mt-4 text-light">2174+ <span>GLOBES</span></p></div>          
            </div>
        </div>
    )
}

export default CounterBar
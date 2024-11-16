import Banner from './Banner'
import Newsletter from './Newsletter'
import { useLocation } from "react-router-dom"

function FAQ() {
    const navigate = useLocation();

    return (
        <>
            <div className="tab-pane" id="FAQ">
                <div className="container mt-5 mb-5 bgImg">
                    <div className="row border rounded p-4">
                        <div className="col">
                            <h2 className="text-danger text-center overflow-hidden">Frequently Asked Question</h2>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <h5 className="overflow-hidden">~Is foodies bread really baked fresh each day?</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores officia dolorum sunt tenetur iste dicta ducimus suscipit voluptatibus natus?</p>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="overflow-hidden">~Do you bake breds containing animal fats or products?</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores officia dolorum sunt tenetur iste dicta ducimus suscipit voluptatibus natus?</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <h5 className="overflow-hidden">~Can i order your products online?</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores officia dolorum sunt tenetur iste dicta ducimus suscipit voluptatibus natus?</p>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="overflow-hidden">~When are you opening a shop near me?</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores officia dolorum sunt tenetur iste dicta ducimus suscipit voluptatibus natus?</p>
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

export default FAQ
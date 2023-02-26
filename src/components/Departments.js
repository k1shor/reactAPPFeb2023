import React from 'react'
import { Link } from 'react-router-dom'

const Departments = () => {
    return (
        <>
        <div className='container'>
            <div className="card-group my-4">
                <div className="card">
                    <img src="./category_image/laptops.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><Link to="#">Laptops</Link></h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./category_image/mobile.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><Link to="#">Mobiles</Link></h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./category_image/clothing.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><Link to="#">Clothings</Link></h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./category_image/accessories.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><Link to="#">Accessories</Link></h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Departments
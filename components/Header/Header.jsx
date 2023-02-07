import React from 'react';
import styles from './header.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/imgs/logo.png'
import delivery from '../../assets/imgs/delivery.png'
import pickup from '../../assets/imgs/pickup.png'
import location from '../../assets/imgs/location.png'
import bucket from '../../assets/imgs/bucket.png'
import { useSelector } from 'react-redux/es/exports';



function Header() {

    const counter = useSelector(state=>state)

    const [showLocationBtn, setShowLocationBtn] = useState(true);

    return (
        <nav className={`navbar navbar-light sticky-top ${styles.bgBlack}`}>
            <div className={`container  ${styles.p1}`}>
                <div className="left-navbar">
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="" style={{ width: '120px' }} />
                    </Link>
                    <div className='btn-group' role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className='btn-check' name="btnradio" id="btnradio1" autoComplete="off" defaultChecked  onClick={() => { setShowLocationBtn(true) }} />
                        <label className={`btn btn-outline-primary ${styles.orderBtn}`} htmlFor="btnradio1"><span><img src={delivery} alt="" /></span> DELIVERY</label>

                        <input type="radio" className='btn-check' name="btnradio" id="btnradio2" autoComplete="off"  onClick={() => { setShowLocationBtn(false) }} />
                        <label className={`btn btn-outline-primary ${styles.orderBtn}`} htmlFor="btnradio2"><span><img src={pickup} alt="" style={{ width: '19px' }} /></span>PICKUP</label>

                    </div>

                </div>
                <div className="right-navbar">

                    {
                        showLocationBtn === true ? <button className={`${styles.locationBtn}`}>
                            <span><img src={location} alt="" style={{ width: '30px', marginRight: '4px' }} /></span>
                            Select Location <i className="bi bi-caret-down-fill" style={{ fontSize: '10px', marginLeft: '3px' }}></i>
                        </button> : ''
                    }
                    <button className="btn btn-primary bg-transparent mx-4 position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ border: 'none' }}>
                        <img src={bucket} alt="" style={{ width: '35px' }} />
                        <span className='position-absolute top-50 start-50 translate-middle'>{counter}</span>
                    </button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ backgroundColor: 'black', color: 'white' }}>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel"><span><button className="btn btn-primary bg-transparent me-2" type="button" style={{ border: '2px solid white' }}>0</button></span> Your bucket</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            You havent added any items in your bucket
                        </div>
                    </div>
                    <Link to='/login'><button className={`${styles.registerBtn}`}>Register / Sign in</button></Link>




                </div>
            </div>
        </nav>

    );

}

export default Header;
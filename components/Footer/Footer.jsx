import styles from './Footer.module.css'
import logo from '../../assets/imgs/logo.png'
import downloadBtn1 from '../../assets/imgs/downloadBtn1.png'
import downloadBtn2 from '../../assets/imgs/downloadBtn2.png'
import { Link } from 'react-router-dom'


function Footer({ mediaLogos, footerTags }) {
    return (
        <div className={styles.footer}>

            <div className={`container pt-5`}>
                <div className="row">
                    <div className="col-md-6  d-flex justify-content-end border-end p-0">
                        <Link to='/'><img src={logo} alt="" style={{ width: '170px' }} /></Link>

                    </div>
                    <div className="col-md-6  d-flex justify-content-start ps-4">
                        <div className="mediaSection">
                            <p className='text-white fs-5'>Find us on</p>
                            {
                                mediaLogos.map((mediaLogos => {
                                    return (
                                        <a href={mediaLogos.link} target='blank'><img src={mediaLogos.img} alt="" style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', marginRight: '24px', cursor: 'pointer' }} /></a>

                                    )
                                }))
                            }

                        </div>


                    </div>
                </div>
            </div>

            <div className={`container pt-5`}>
                <div className="row text-white">
                    {
                        footerTags.map((footerTags => {
                            return (
                                <div className="col-md-3">
                                    <h5 className='fw-bold'>{footerTags.title}</h5>
                                    <ul className={`${styles.footerTags}`}>
                                         {footerTags.li}
                                      
                                    </ul>
                                </div>
                            )
                        }))
                    }
                    <div className="col-md-3">
                        <img src={downloadBtn1} alt="" style={{width : '150px', background: 'white', borderRadius: '8px', border : '1px solid white', cursor: 'pointer', marginBottom: '12px'}} />
                    
                        <img src={downloadBtn2} alt="" style={{width : '150px', background: 'white', borderRadius: '8px', border : '1px solid white', cursor: 'pointer'}} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;
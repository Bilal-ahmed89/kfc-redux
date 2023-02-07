import styles from "./Slider.module.css"
import slider1 from '../../assets/imgs/slider1.jpg'
import slider2 from '../../assets/imgs/slider2.jpg'
import slider3 from '../../assets/imgs/slider3.png'


function Slider() {
    return (
        <div className={styles.banner}>
        <div className="container px-0 ps-4 mb-5">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slider3} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Slider;
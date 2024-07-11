import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/Banner/web_banner_3.jpg'
import img2 from '../../assets/Banner/web_banner_2.jpg'
import img3 from '../../assets/Banner/web_banner_1.jpg'

const Banner = () => {
    

    return (
        <div className="mt-10">
            <Carousel autoPlay>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/Banner/Banner-1.jpg'
import img2 from '../../assets/Banner/Banner-3.jpg'
import img3 from '../../assets/Banner/Banner-5.jpg'

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
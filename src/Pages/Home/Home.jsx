import Banner from "./Banner";
import FAQ from "./FAQ";
import Food from "./Food/Food";
import Gallery from "./Gallery/Gallery";
import Review from "./Review/Review";
import RoomTypes from "./RoomTypes";
import Service from "./Service";

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4'>
            <Banner></Banner>
            <Service></Service>
            <RoomTypes></RoomTypes>
            <Gallery></Gallery>
            <Food></Food>
            <Review></Review>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
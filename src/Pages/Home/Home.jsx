import Banner from "./Banner";
import FAQ from "./FAQ";
import Food from "./Food/Food";
import Review from "./Review/Review";
import RoomTypes from "./RoomTypes";
import Service from "./Service";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <RoomTypes></RoomTypes>
            <Food></Food>
            <Review></Review>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
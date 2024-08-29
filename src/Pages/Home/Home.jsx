import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Recipes from "../../components/Recipes/Recipes";
import TinnyBanner from "../../components/TinnyBanner/TinnyBanner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Recipes></Recipes>
            <TinnyBanner></TinnyBanner>
        </div>
    );
};

export default Home;
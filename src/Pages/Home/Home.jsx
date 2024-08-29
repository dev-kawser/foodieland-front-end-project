import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import DeliciousRecipe from "../../components/DeliciousRecipe/DeliciousRecipe";
import Instagram from "../../components/Instagram/Instagram";
import Recipes from "../../components/Recipes/Recipes";
import TinnyBanner from "../../components/TinnyBanner/TinnyBanner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Recipes></Recipes>
            <TinnyBanner></TinnyBanner>
            <Instagram></Instagram>
            <DeliciousRecipe></DeliciousRecipe>
        </div>
    );
};

export default Home;
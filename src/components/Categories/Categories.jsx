import rice from "../../assets/rice.png"
import meat from "../../assets/meat.png"
import choco from "../../assets/choco.png"
import vege from "../../assets/vege.png"
import cake from "../../assets/cake.png"
import bread from "../../assets/bread.png"

const Categories = () => {
    return (
        <div className="max-w-7xl lg:mx-auto mx-2 lg:mt-20 mt-10 text-black">
            <div className="flex items-center lg:justify-between justify-center">
                <h1
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="700"
                    className="lg:text-5xl text-4xl font-semibold">
                    Categories
                </h1>
                <button
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="700"
                    className="common-bg-color font-semibold py-3 px-4 rounded-xl lg:flex hidden hover:-translate-y-1 duration-300 transition-all">
                    View All Categories
                </button>
            </div>
            <div className="lg:mt-10 mt-5 text-center grid place-items-center lg:grid-cols-6 gap-5 lg:gap-10 grid-cols-2">
                <div className="bg-gradient-to-t from-slate-100 to-white p-7 rounded-3xl">
                    <img src={rice} alt="" />
                    <h3 className="text-lg font-semibold pt-7">Breakfast</h3>
                </div>
                <div className="bg-gradient-to-t from-green-100 to-white p-7 rounded-3xl">
                    <img src={vege} alt="" />
                    <h3 className="text-lg font-semibold pt-7">Breakfast</h3>
                </div>
                <div className="bg-gradient-to-t from-red-100 to-white p-7 rounded-3xl">
                    <img src={meat} alt="" />
                    <h3 className="text-lg font-semibold pt-7">Breakfast</h3>
                </div>
                <div className="bg-gradient-to-t from-yellow-100 to-white p-7 rounded-3xl">
                    <img src={cake} alt="" />
                    <h3 className="text-lg font-semibold pt-7">Breakfast</h3>
                </div>
                <div className="bg-gradient-to-t from-slate-50 to-white p-7 rounded-3xl">
                    <img src={bread} alt="" />
                    <h3 className="text-lg font-semibold pt-7">Breakfast</h3>
                </div>
                <div className="bg-gradient-to-t from-pink-100 to-white p-7 rounded-3xl">
                    <img src={choco} alt="" />
                    <h3 className="text-lg font-semibold pt-7">Breakfast</h3>
                </div>
            </div>
            <button className="common-bg-color font-semibold py-3 px-4 rounded-xl lg:hidden flex hover:-translate-y-1 duration-300 transition-all mt-5 mx-auto">
                View All Categories
            </button>
        </div>
    );
};

export default Categories; 
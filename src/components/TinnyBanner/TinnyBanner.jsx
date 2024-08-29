import tinnyBannerImg from "../../assets/tinny-banner-img.png"
import meat from "../../assets/meat.png"
import vege from "../../assets/vege.png"
import onion from "../../assets/onion.png"
import orange from "../../assets/orange.png"

const TinnyBanner = () => {
    return (
        <div className="max-w-7xl lg:mx-auto mx-2 lg:mt-20 mt-10 flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-5">
            <div>
                <h1 className="lg:text-5xl text-4xl font-semibold text-black">
                    Everyone can be a <br />
                    chef in their own kitchen
                </h1>
                <p className="mt-6 max-w-xl">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                </p>
                <button
                    data-aos="fade-in"
                    data-aos-delay="300"
                    data-aos-duration="900"
                    className="mt-12 bg-black text-white px-5 py-2 rounded-lg">
                    Learn More
                </button>
            </div>
            <div className="bg-gradient-to-t from-[#E7FAFE] to-white rounded-b-2xl relative">
                <img src={tinnyBannerImg} alt="" />
                <div className="absolute lg:bottom-20 bottom-7 left-2 lg:-left-5">
                    <img className="lg:size-[50px] size-7" src={orange} alt="" />
                </div>
                <div className="absolute lg:top-14 top-7 left-6 lg:left-10">
                    <img className="lg:size-[80px] size-12" src={meat} alt="" />
                </div>
                <div className="absolute lg:top-24 top-10 right-6 lg:right-10">
                    <img className="lg:size-[80px] size-12" src={vege} alt="" />
                </div>
                <div className="absolute lg:top-36 top-20 right-20 lg:right-48">
                    <img className="lg:size-[50px] size-7" src={onion} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TinnyBanner;
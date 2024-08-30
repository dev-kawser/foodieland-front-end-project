import newsletterimg1 from "../../assets/newsletterimg1.png"
import newsletterimg2 from "../../assets/newsletterimg2.png"

const Newsletter = () => {
    return (
        <div className="max-w-7xl lg:mx-auto px-2 lg:mt-20 mt-10 common-bg-color py-20 text-center rounded-md lg:rounded-[50px] relative">
            <div>
                <h1 className="lg:text-5xl text-4xl font-semibold">
                    Deliciousness to your inbox
                </h1>
                <p className="max-w-xl mx-auto mt-6">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                </p>
                <div className="mt-6">
                    <input className="py-5 px-10 rounded-xl lg:rounded-l-lg" type="text" placeholder="Your email address..." />
                    <button className="mt-5 bg-black text-white px-5 py-5 rounded-xl lg:rounded-none lg:rounded-r-lg">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="lg:block hidden">
                <img className="absolute left-0 bottom-0" src={newsletterimg1} alt="" />
                <img className="absolute right-0 bottom-0" src={newsletterimg2} alt="" />
            </div>
        </div>
    );
};

export default Newsletter;
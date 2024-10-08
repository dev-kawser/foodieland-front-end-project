/* eslint-disable react/no-unknown-property */
import Ovan from "../../assets/Oval.svg"
import instaimg1 from "../../assets/instaimg1.png"
import instaimg2 from "../../assets/instaimg2.png"
import instaimg3 from "../../assets/instaimg3.png"
import instaimg4 from "../../assets/instaimg4.png"
import instalogo from "../../assets/instalogo.svg"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Instagram = () => {
    return (
        <div className="bg-gradient-to-t from-[#E7FAFE] to-white">
            <div className="max-w-7xl lg:mx-auto mx-2 lg:mt-20 mt-10">
                <div className="text-center space-y-5">
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="700"
                        className="lg:text-5xl text-4xl font-semibold">
                        Check out @foodieland on Instagram
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="900"
                        className="lg:max-w-2xl max-w-xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                    </p>
                </div>
                <div className="mt-10 grid lg:grid-cols-4 grid-cols-1 gap-7">
                    <div className="bg-white">
                        <div className="flex items-center justify-between px-3">
                            <div className="flex items-center gap-3">
                                <img className="size-8" src={Ovan} alt="" />
                                <div>
                                    <div className="flex items-center gap-1">
                                        <h4 className="font-semibold">
                                            Foodieland.
                                        </h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 9 8" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.34733 0.373535L5.30024 0.994874L6.43781 0.987355L6.90353 2.02524L7.86457 2.63393L7.69524 3.75885L8.17464 4.79049L7.42401 5.64528L7.26956 6.77233L6.17596 7.0856L5.4367 7.95024L4.34733 7.62254L3.25796 7.95024L2.5187 7.0856L1.4251 6.77233L1.27065 5.64528L0.52002 4.79049L0.999421 3.75885L0.830085 2.63393L1.79113 2.02524L2.25685 0.987355L3.39442 0.994874L4.34733 0.373535ZM5.35949 3.09455L3.83703 4.71099L3.33518 4.17815C3.21805 4.05379 3.02228 4.04793 2.89791 4.16506C2.77355 4.2822 2.76769 4.47797 2.88482 4.60233L3.61185 5.37424C3.73397 5.5039 3.94009 5.5039 4.06221 5.37424L5.80985 3.51873C5.92698 3.39436 5.92112 3.19859 5.79675 3.08146C5.67239 2.96433 5.47662 2.97019 5.35949 3.09455Z" fill="#3897F0" />
                                        </svg>
                                    </div>
                                    <p>Tokyo, Japan</p>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.73336 0.719941C2.37401 0.719941 2.89336 1.23929 2.89336 1.87994C2.89336 2.52059 2.37401 3.03994 1.73336 3.03994C1.09271 3.03994 0.573364 2.52059 0.573364 1.87994C0.573364 1.23929 1.09271 0.719941 1.73336 0.719941ZM5.9867 0.719727C6.62735 0.719727 7.1467 1.23908 7.1467 1.87973C7.1467 2.52038 6.62735 3.03973 5.9867 3.03973C5.34605 3.03973 4.8267 2.52038 4.8267 1.87973C4.8267 1.23908 5.34605 0.719727 5.9867 0.719727ZM10.24 0.719727C10.8807 0.719727 11.4 1.23908 11.4 1.87973C11.4 2.52038 10.8807 3.03973 10.24 3.03973C9.59938 3.03973 9.08003 2.52038 9.08003 1.87973C9.08003 1.23908 9.59938 0.719727 10.24 0.719727Z" fill="#262626" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-2 mx-auto flex items-center justify-center">

                            <Swiper
                                spaceBetween={5}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg1} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg2} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg3} alt="" />
                                </SwiperSlide>
                            </Swiper>

                        </div>
                        <div className="mt-2 flex items-center justify-between px-3">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0081 2.25665L9.5015 1.66459C7.46296 -0.373949 4.21201 -0.235034 2.17347 1.8035C0.134936 3.84204 0.527258 7.7832 2.56579 9.82174C3.39315 10.6491 4.63217 11.7946 6.28285 13.2584L7.67155 14.4801L9.23129 15.834C9.66075 16.2046 10.2953 16.2103 10.7313 15.8474L11.9948 14.788C14.2076 12.918 15.8496 11.445 16.9209 10.3692L17.1989 10.0856L17.4486 9.82174C19.3471 7.77441 19.835 3.79463 17.8439 1.8035L17.6996 1.66459C15.6523 -0.233931 12.5651 -0.326542 10.5739 1.66459L10.0081 2.25665ZM2.99374 2.6236C4.6057 1.01164 7.09948 0.936068 8.65131 2.45503L9.96057 3.98519L11.4126 2.4659C12.9019 0.97698 15.2755 0.998504 16.9109 2.51501L17.0392 2.63889C18.4463 4.0462 18.2069 7.29787 16.598 9.03284L16.3564 9.28814L16.0882 9.56149C15.2002 10.4528 13.884 11.6468 12.1487 13.1339L11.2461 13.9019L9.98924 14.9557L8.43197 13.6039L7.31742 12.6249C5.74693 11.2368 4.5354 10.1266 3.68713 9.29861L3.38606 9.00135C1.70674 7.32202 1.4967 4.12064 2.99374 2.6236Z" fill="#262626" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5467 8.70686C17.5467 4.00876 13.7381 0.200195 9.03999 0.200195C4.34189 0.200195 0.533325 4.00876 0.533325 8.70686C0.533325 13.405 4.34189 17.2135 9.03999 17.2135C10.0654 17.2135 11.474 16.8395 13.2659 16.0913L16.1634 17.2216L16.2493 17.2495C16.6238 17.3477 17.0207 17.1516 17.1649 16.7822C17.2225 16.6344 17.2333 16.4725 17.1958 16.3184L16.3879 12.9958L16.5202 12.6792C17.2045 11.0124 17.5467 9.68828 17.5467 8.70686ZM15.4365 12.2643L15.1699 12.8957L15.8933 15.8709L13.2511 14.8402L12.5295 15.1395C11.0078 15.7536 9.8323 16.0533 9.04 16.0533C4.98255 16.0533 1.69333 12.7641 1.69333 8.70667C1.69333 4.64921 4.98255 1.36 9.04 1.36C13.0975 1.36 16.3867 4.64921 16.3867 8.70667C16.3867 9.5152 16.075 10.7137 15.4365 12.2643Z" fill="#262626" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5748 1.0732L9.31158 15.1893C9.05142 15.6337 8.38425 15.5439 8.25083 15.0465L6.12389 7.11552L6.10635 7.09073C6.09055 7.06337 6.07724 7.03525 6.06634 7.00665L0.250997 1.19032C-0.114383 0.824938 0.144394 0.200195 0.661119 0.200195H17.0743C17.5223 0.200195 17.8011 0.686548 17.5748 1.0732ZM15.4866 2.34366L7.31125 7.0637L9.01164 13.4051L15.4866 2.34366ZM2.06135 1.35997L14.8718 1.35924L6.74999 6.04835L2.06135 1.35997Z" fill="#262626" />
                                </svg>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0522461 0.951852V17.6964C0.0522461 17.8996 0.132235 18.0946 0.274915 18.2393C0.574787 18.5435 1.06442 18.5469 1.36855 18.247L7.97949 11.7285L14.5904 18.247C14.7351 18.3897 14.9302 18.4697 15.1334 18.4697C15.5605 18.4697 15.9067 18.1235 15.9067 17.6964V0.951852C15.9067 0.738302 15.7336 0.565186 15.5201 0.565186H0.438913C0.225363 0.565186 0.0522461 0.738302 0.0522461 0.951852ZM1.21223 16.772V1.72511H14.7467V16.772L8.52244 10.6348C8.22134 10.3379 7.7376 10.3379 7.4365 10.6348L1.21223 16.772Z" fill="#262626" />
                            </svg>
                        </div>
                        <div className="mt-2 px-3 text-sm pb-3">
                            <div className="flex items-center gap-1">
                                <img className="size-5" src={instalogo} alt="" />
                                <p>
                                    Liked by <span className="font-semibold">craig_love</span> and <span className="font-semibold">44,686</span> others
                                </p>
                            </div>
                            <p className="mt-2">
                                <span className="font-semibold">Foodieland.</span> The vegetables dishes need to have certain vitamin for those people
                            </p>
                            <p className="mt-5 text-gray-600">
                                September 19
                            </p>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="flex items-center justify-between px-3">
                            <div className="flex items-center gap-3">
                                <img className="size-8" src={Ovan} alt="" />
                                <div>
                                    <div className="flex items-center gap-1">
                                        <h4 className="font-semibold">
                                            Foodieland.
                                        </h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 9 8" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.34733 0.373535L5.30024 0.994874L6.43781 0.987355L6.90353 2.02524L7.86457 2.63393L7.69524 3.75885L8.17464 4.79049L7.42401 5.64528L7.26956 6.77233L6.17596 7.0856L5.4367 7.95024L4.34733 7.62254L3.25796 7.95024L2.5187 7.0856L1.4251 6.77233L1.27065 5.64528L0.52002 4.79049L0.999421 3.75885L0.830085 2.63393L1.79113 2.02524L2.25685 0.987355L3.39442 0.994874L4.34733 0.373535ZM5.35949 3.09455L3.83703 4.71099L3.33518 4.17815C3.21805 4.05379 3.02228 4.04793 2.89791 4.16506C2.77355 4.2822 2.76769 4.47797 2.88482 4.60233L3.61185 5.37424C3.73397 5.5039 3.94009 5.5039 4.06221 5.37424L5.80985 3.51873C5.92698 3.39436 5.92112 3.19859 5.79675 3.08146C5.67239 2.96433 5.47662 2.97019 5.35949 3.09455Z" fill="#3897F0" />
                                        </svg>
                                    </div>
                                    <p>Tokyo, Japan</p>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.73336 0.719941C2.37401 0.719941 2.89336 1.23929 2.89336 1.87994C2.89336 2.52059 2.37401 3.03994 1.73336 3.03994C1.09271 3.03994 0.573364 2.52059 0.573364 1.87994C0.573364 1.23929 1.09271 0.719941 1.73336 0.719941ZM5.9867 0.719727C6.62735 0.719727 7.1467 1.23908 7.1467 1.87973C7.1467 2.52038 6.62735 3.03973 5.9867 3.03973C5.34605 3.03973 4.8267 2.52038 4.8267 1.87973C4.8267 1.23908 5.34605 0.719727 5.9867 0.719727ZM10.24 0.719727C10.8807 0.719727 11.4 1.23908 11.4 1.87973C11.4 2.52038 10.8807 3.03973 10.24 3.03973C9.59938 3.03973 9.08003 2.52038 9.08003 1.87973C9.08003 1.23908 9.59938 0.719727 10.24 0.719727Z" fill="#262626" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-2 flex items-center justify-center">

                            <Swiper
                                spaceBetween={5}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg2} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg3} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg4} alt="" />
                                </SwiperSlide>
                            </Swiper>

                        </div>
                        <div className="mt-2 flex items-center justify-between px-3">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0081 2.25665L9.5015 1.66459C7.46296 -0.373949 4.21201 -0.235034 2.17347 1.8035C0.134936 3.84204 0.527258 7.7832 2.56579 9.82174C3.39315 10.6491 4.63217 11.7946 6.28285 13.2584L7.67155 14.4801L9.23129 15.834C9.66075 16.2046 10.2953 16.2103 10.7313 15.8474L11.9948 14.788C14.2076 12.918 15.8496 11.445 16.9209 10.3692L17.1989 10.0856L17.4486 9.82174C19.3471 7.77441 19.835 3.79463 17.8439 1.8035L17.6996 1.66459C15.6523 -0.233931 12.5651 -0.326542 10.5739 1.66459L10.0081 2.25665ZM2.99374 2.6236C4.6057 1.01164 7.09948 0.936068 8.65131 2.45503L9.96057 3.98519L11.4126 2.4659C12.9019 0.97698 15.2755 0.998504 16.9109 2.51501L17.0392 2.63889C18.4463 4.0462 18.2069 7.29787 16.598 9.03284L16.3564 9.28814L16.0882 9.56149C15.2002 10.4528 13.884 11.6468 12.1487 13.1339L11.2461 13.9019L9.98924 14.9557L8.43197 13.6039L7.31742 12.6249C5.74693 11.2368 4.5354 10.1266 3.68713 9.29861L3.38606 9.00135C1.70674 7.32202 1.4967 4.12064 2.99374 2.6236Z" fill="#262626" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5467 8.70686C17.5467 4.00876 13.7381 0.200195 9.03999 0.200195C4.34189 0.200195 0.533325 4.00876 0.533325 8.70686C0.533325 13.405 4.34189 17.2135 9.03999 17.2135C10.0654 17.2135 11.474 16.8395 13.2659 16.0913L16.1634 17.2216L16.2493 17.2495C16.6238 17.3477 17.0207 17.1516 17.1649 16.7822C17.2225 16.6344 17.2333 16.4725 17.1958 16.3184L16.3879 12.9958L16.5202 12.6792C17.2045 11.0124 17.5467 9.68828 17.5467 8.70686ZM15.4365 12.2643L15.1699 12.8957L15.8933 15.8709L13.2511 14.8402L12.5295 15.1395C11.0078 15.7536 9.8323 16.0533 9.04 16.0533C4.98255 16.0533 1.69333 12.7641 1.69333 8.70667C1.69333 4.64921 4.98255 1.36 9.04 1.36C13.0975 1.36 16.3867 4.64921 16.3867 8.70667C16.3867 9.5152 16.075 10.7137 15.4365 12.2643Z" fill="#262626" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5748 1.0732L9.31158 15.1893C9.05142 15.6337 8.38425 15.5439 8.25083 15.0465L6.12389 7.11552L6.10635 7.09073C6.09055 7.06337 6.07724 7.03525 6.06634 7.00665L0.250997 1.19032C-0.114383 0.824938 0.144394 0.200195 0.661119 0.200195H17.0743C17.5223 0.200195 17.8011 0.686548 17.5748 1.0732ZM15.4866 2.34366L7.31125 7.0637L9.01164 13.4051L15.4866 2.34366ZM2.06135 1.35997L14.8718 1.35924L6.74999 6.04835L2.06135 1.35997Z" fill="#262626" />
                                </svg>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0522461 0.951852V17.6964C0.0522461 17.8996 0.132235 18.0946 0.274915 18.2393C0.574787 18.5435 1.06442 18.5469 1.36855 18.247L7.97949 11.7285L14.5904 18.247C14.7351 18.3897 14.9302 18.4697 15.1334 18.4697C15.5605 18.4697 15.9067 18.1235 15.9067 17.6964V0.951852C15.9067 0.738302 15.7336 0.565186 15.5201 0.565186H0.438913C0.225363 0.565186 0.0522461 0.738302 0.0522461 0.951852ZM1.21223 16.772V1.72511H14.7467V16.772L8.52244 10.6348C8.22134 10.3379 7.7376 10.3379 7.4365 10.6348L1.21223 16.772Z" fill="#262626" />
                            </svg>
                        </div>
                        <div className="mt-2 px-3 text-sm pb-3">
                            <div className="flex items-center gap-1">
                                <img className="size-5" src={instalogo} alt="" />
                                <p>
                                    Liked by <span className="font-semibold">craig_love</span> and <span className="font-semibold">44,686</span> others
                                </p>
                            </div>
                            <p className="mt-2">
                                <span className="font-semibold">Foodieland.</span> The vegetables dishes need to have certain vitamin for those people
                            </p>
                            <p className="mt-5 text-gray-600">
                                September 19
                            </p>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="flex items-center justify-between px-3">
                            <div className="flex items-center gap-3">
                                <img className="size-8" src={Ovan} alt="" />
                                <div>
                                    <div className="flex items-center gap-1">
                                        <h4 className="font-semibold">
                                            Foodieland.
                                        </h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 9 8" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.34733 0.373535L5.30024 0.994874L6.43781 0.987355L6.90353 2.02524L7.86457 2.63393L7.69524 3.75885L8.17464 4.79049L7.42401 5.64528L7.26956 6.77233L6.17596 7.0856L5.4367 7.95024L4.34733 7.62254L3.25796 7.95024L2.5187 7.0856L1.4251 6.77233L1.27065 5.64528L0.52002 4.79049L0.999421 3.75885L0.830085 2.63393L1.79113 2.02524L2.25685 0.987355L3.39442 0.994874L4.34733 0.373535ZM5.35949 3.09455L3.83703 4.71099L3.33518 4.17815C3.21805 4.05379 3.02228 4.04793 2.89791 4.16506C2.77355 4.2822 2.76769 4.47797 2.88482 4.60233L3.61185 5.37424C3.73397 5.5039 3.94009 5.5039 4.06221 5.37424L5.80985 3.51873C5.92698 3.39436 5.92112 3.19859 5.79675 3.08146C5.67239 2.96433 5.47662 2.97019 5.35949 3.09455Z" fill="#3897F0" />
                                        </svg>
                                    </div>
                                    <p>Tokyo, Japan</p>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.73336 0.719941C2.37401 0.719941 2.89336 1.23929 2.89336 1.87994C2.89336 2.52059 2.37401 3.03994 1.73336 3.03994C1.09271 3.03994 0.573364 2.52059 0.573364 1.87994C0.573364 1.23929 1.09271 0.719941 1.73336 0.719941ZM5.9867 0.719727C6.62735 0.719727 7.1467 1.23908 7.1467 1.87973C7.1467 2.52038 6.62735 3.03973 5.9867 3.03973C5.34605 3.03973 4.8267 2.52038 4.8267 1.87973C4.8267 1.23908 5.34605 0.719727 5.9867 0.719727ZM10.24 0.719727C10.8807 0.719727 11.4 1.23908 11.4 1.87973C11.4 2.52038 10.8807 3.03973 10.24 3.03973C9.59938 3.03973 9.08003 2.52038 9.08003 1.87973C9.08003 1.23908 9.59938 0.719727 10.24 0.719727Z" fill="#262626" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-2 flex items-center justify-center">

                            <Swiper
                                spaceBetween={5}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg3} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg4} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg1} alt="" />
                                </SwiperSlide>
                            </Swiper>

                        </div>
                        <div className="mt-2 flex items-center justify-between px-3">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0081 2.25665L9.5015 1.66459C7.46296 -0.373949 4.21201 -0.235034 2.17347 1.8035C0.134936 3.84204 0.527258 7.7832 2.56579 9.82174C3.39315 10.6491 4.63217 11.7946 6.28285 13.2584L7.67155 14.4801L9.23129 15.834C9.66075 16.2046 10.2953 16.2103 10.7313 15.8474L11.9948 14.788C14.2076 12.918 15.8496 11.445 16.9209 10.3692L17.1989 10.0856L17.4486 9.82174C19.3471 7.77441 19.835 3.79463 17.8439 1.8035L17.6996 1.66459C15.6523 -0.233931 12.5651 -0.326542 10.5739 1.66459L10.0081 2.25665ZM2.99374 2.6236C4.6057 1.01164 7.09948 0.936068 8.65131 2.45503L9.96057 3.98519L11.4126 2.4659C12.9019 0.97698 15.2755 0.998504 16.9109 2.51501L17.0392 2.63889C18.4463 4.0462 18.2069 7.29787 16.598 9.03284L16.3564 9.28814L16.0882 9.56149C15.2002 10.4528 13.884 11.6468 12.1487 13.1339L11.2461 13.9019L9.98924 14.9557L8.43197 13.6039L7.31742 12.6249C5.74693 11.2368 4.5354 10.1266 3.68713 9.29861L3.38606 9.00135C1.70674 7.32202 1.4967 4.12064 2.99374 2.6236Z" fill="#262626" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5467 8.70686C17.5467 4.00876 13.7381 0.200195 9.03999 0.200195C4.34189 0.200195 0.533325 4.00876 0.533325 8.70686C0.533325 13.405 4.34189 17.2135 9.03999 17.2135C10.0654 17.2135 11.474 16.8395 13.2659 16.0913L16.1634 17.2216L16.2493 17.2495C16.6238 17.3477 17.0207 17.1516 17.1649 16.7822C17.2225 16.6344 17.2333 16.4725 17.1958 16.3184L16.3879 12.9958L16.5202 12.6792C17.2045 11.0124 17.5467 9.68828 17.5467 8.70686ZM15.4365 12.2643L15.1699 12.8957L15.8933 15.8709L13.2511 14.8402L12.5295 15.1395C11.0078 15.7536 9.8323 16.0533 9.04 16.0533C4.98255 16.0533 1.69333 12.7641 1.69333 8.70667C1.69333 4.64921 4.98255 1.36 9.04 1.36C13.0975 1.36 16.3867 4.64921 16.3867 8.70667C16.3867 9.5152 16.075 10.7137 15.4365 12.2643Z" fill="#262626" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5748 1.0732L9.31158 15.1893C9.05142 15.6337 8.38425 15.5439 8.25083 15.0465L6.12389 7.11552L6.10635 7.09073C6.09055 7.06337 6.07724 7.03525 6.06634 7.00665L0.250997 1.19032C-0.114383 0.824938 0.144394 0.200195 0.661119 0.200195H17.0743C17.5223 0.200195 17.8011 0.686548 17.5748 1.0732ZM15.4866 2.34366L7.31125 7.0637L9.01164 13.4051L15.4866 2.34366ZM2.06135 1.35997L14.8718 1.35924L6.74999 6.04835L2.06135 1.35997Z" fill="#262626" />
                                </svg>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0522461 0.951852V17.6964C0.0522461 17.8996 0.132235 18.0946 0.274915 18.2393C0.574787 18.5435 1.06442 18.5469 1.36855 18.247L7.97949 11.7285L14.5904 18.247C14.7351 18.3897 14.9302 18.4697 15.1334 18.4697C15.5605 18.4697 15.9067 18.1235 15.9067 17.6964V0.951852C15.9067 0.738302 15.7336 0.565186 15.5201 0.565186H0.438913C0.225363 0.565186 0.0522461 0.738302 0.0522461 0.951852ZM1.21223 16.772V1.72511H14.7467V16.772L8.52244 10.6348C8.22134 10.3379 7.7376 10.3379 7.4365 10.6348L1.21223 16.772Z" fill="#262626" />
                            </svg>
                        </div>
                        <div className="mt-2 px-3 text-sm pb-3">
                            <div className="flex items-center gap-1">
                                <img className="size-5" src={instalogo} alt="" />
                                <p>
                                    Liked by <span className="font-semibold">craig_love</span> and <span className="font-semibold">44,686</span> others
                                </p>
                            </div>
                            <p className="mt-2">
                                <span className="font-semibold">Foodieland.</span> The vegetables dishes need to have certain vitamin for those people
                            </p>
                            <p className="mt-5 text-gray-600">
                                September 19
                            </p>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="flex items-center justify-between px-3">
                            <div className="flex items-center gap-3">
                                <img className="size-8" src={Ovan} alt="" />
                                <div>
                                    <div className="flex items-center gap-1">
                                        <h4 className="font-semibold">
                                            Foodieland.
                                        </h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 9 8" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.34733 0.373535L5.30024 0.994874L6.43781 0.987355L6.90353 2.02524L7.86457 2.63393L7.69524 3.75885L8.17464 4.79049L7.42401 5.64528L7.26956 6.77233L6.17596 7.0856L5.4367 7.95024L4.34733 7.62254L3.25796 7.95024L2.5187 7.0856L1.4251 6.77233L1.27065 5.64528L0.52002 4.79049L0.999421 3.75885L0.830085 2.63393L1.79113 2.02524L2.25685 0.987355L3.39442 0.994874L4.34733 0.373535ZM5.35949 3.09455L3.83703 4.71099L3.33518 4.17815C3.21805 4.05379 3.02228 4.04793 2.89791 4.16506C2.77355 4.2822 2.76769 4.47797 2.88482 4.60233L3.61185 5.37424C3.73397 5.5039 3.94009 5.5039 4.06221 5.37424L5.80985 3.51873C5.92698 3.39436 5.92112 3.19859 5.79675 3.08146C5.67239 2.96433 5.47662 2.97019 5.35949 3.09455Z" fill="#3897F0" />
                                        </svg>
                                    </div>
                                    <p>Tokyo, Japan</p>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.73336 0.719941C2.37401 0.719941 2.89336 1.23929 2.89336 1.87994C2.89336 2.52059 2.37401 3.03994 1.73336 3.03994C1.09271 3.03994 0.573364 2.52059 0.573364 1.87994C0.573364 1.23929 1.09271 0.719941 1.73336 0.719941ZM5.9867 0.719727C6.62735 0.719727 7.1467 1.23908 7.1467 1.87973C7.1467 2.52038 6.62735 3.03973 5.9867 3.03973C5.34605 3.03973 4.8267 2.52038 4.8267 1.87973C4.8267 1.23908 5.34605 0.719727 5.9867 0.719727ZM10.24 0.719727C10.8807 0.719727 11.4 1.23908 11.4 1.87973C11.4 2.52038 10.8807 3.03973 10.24 3.03973C9.59938 3.03973 9.08003 2.52038 9.08003 1.87973C9.08003 1.23908 9.59938 0.719727 10.24 0.719727Z" fill="#262626" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-2 flex items-center justify-center">

                            <Swiper
                                spaceBetween={5}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg4} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg2} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="pb-8 size-full" src={instaimg1} alt="" />
                                </SwiperSlide>
                            </Swiper>

                        </div>
                        <div className="mt-2 flex items-center justify-between px-3">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0081 2.25665L9.5015 1.66459C7.46296 -0.373949 4.21201 -0.235034 2.17347 1.8035C0.134936 3.84204 0.527258 7.7832 2.56579 9.82174C3.39315 10.6491 4.63217 11.7946 6.28285 13.2584L7.67155 14.4801L9.23129 15.834C9.66075 16.2046 10.2953 16.2103 10.7313 15.8474L11.9948 14.788C14.2076 12.918 15.8496 11.445 16.9209 10.3692L17.1989 10.0856L17.4486 9.82174C19.3471 7.77441 19.835 3.79463 17.8439 1.8035L17.6996 1.66459C15.6523 -0.233931 12.5651 -0.326542 10.5739 1.66459L10.0081 2.25665ZM2.99374 2.6236C4.6057 1.01164 7.09948 0.936068 8.65131 2.45503L9.96057 3.98519L11.4126 2.4659C12.9019 0.97698 15.2755 0.998504 16.9109 2.51501L17.0392 2.63889C18.4463 4.0462 18.2069 7.29787 16.598 9.03284L16.3564 9.28814L16.0882 9.56149C15.2002 10.4528 13.884 11.6468 12.1487 13.1339L11.2461 13.9019L9.98924 14.9557L8.43197 13.6039L7.31742 12.6249C5.74693 11.2368 4.5354 10.1266 3.68713 9.29861L3.38606 9.00135C1.70674 7.32202 1.4967 4.12064 2.99374 2.6236Z" fill="#262626" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5467 8.70686C17.5467 4.00876 13.7381 0.200195 9.03999 0.200195C4.34189 0.200195 0.533325 4.00876 0.533325 8.70686C0.533325 13.405 4.34189 17.2135 9.03999 17.2135C10.0654 17.2135 11.474 16.8395 13.2659 16.0913L16.1634 17.2216L16.2493 17.2495C16.6238 17.3477 17.0207 17.1516 17.1649 16.7822C17.2225 16.6344 17.2333 16.4725 17.1958 16.3184L16.3879 12.9958L16.5202 12.6792C17.2045 11.0124 17.5467 9.68828 17.5467 8.70686ZM15.4365 12.2643L15.1699 12.8957L15.8933 15.8709L13.2511 14.8402L12.5295 15.1395C11.0078 15.7536 9.8323 16.0533 9.04 16.0533C4.98255 16.0533 1.69333 12.7641 1.69333 8.70667C1.69333 4.64921 4.98255 1.36 9.04 1.36C13.0975 1.36 16.3867 4.64921 16.3867 8.70667C16.3867 9.5152 16.075 10.7137 15.4365 12.2643Z" fill="#262626" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5748 1.0732L9.31158 15.1893C9.05142 15.6337 8.38425 15.5439 8.25083 15.0465L6.12389 7.11552L6.10635 7.09073C6.09055 7.06337 6.07724 7.03525 6.06634 7.00665L0.250997 1.19032C-0.114383 0.824938 0.144394 0.200195 0.661119 0.200195H17.0743C17.5223 0.200195 17.8011 0.686548 17.5748 1.0732ZM15.4866 2.34366L7.31125 7.0637L9.01164 13.4051L15.4866 2.34366ZM2.06135 1.35997L14.8718 1.35924L6.74999 6.04835L2.06135 1.35997Z" fill="#262626" />
                                </svg>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0522461 0.951852V17.6964C0.0522461 17.8996 0.132235 18.0946 0.274915 18.2393C0.574787 18.5435 1.06442 18.5469 1.36855 18.247L7.97949 11.7285L14.5904 18.247C14.7351 18.3897 14.9302 18.4697 15.1334 18.4697C15.5605 18.4697 15.9067 18.1235 15.9067 17.6964V0.951852C15.9067 0.738302 15.7336 0.565186 15.5201 0.565186H0.438913C0.225363 0.565186 0.0522461 0.738302 0.0522461 0.951852ZM1.21223 16.772V1.72511H14.7467V16.772L8.52244 10.6348C8.22134 10.3379 7.7376 10.3379 7.4365 10.6348L1.21223 16.772Z" fill="#262626" />
                            </svg>
                        </div>
                        <div className="mt-2 px-3 text-sm pb-3">
                            <div className="flex items-center gap-1">
                                <img className="size-5" src={instalogo} alt="" />
                                <p>
                                    Liked by <span className="font-semibold">craig_love</span> and <span className="font-semibold">44,686</span> others
                                </p>
                            </div>
                            <p className="mt-2">
                                <span className="font-semibold">Foodieland.</span> The vegetables dishes need to have certain vitamin for those people
                            </p>
                            <p className="mt-5 text-gray-600">
                                September 19
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-14 mt-8 pb-7 text-center flex justify-center">
                    <button className="bg-black text-white py-4 px-6 rounded-2xl flex items-center gap-2">
                        <p>Visit Our Instagram</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83667 0H16.0867C19.883 0 22.9617 3.07862 22.9617 6.875V15.125C22.9617 18.9214 19.883 22 16.0867 22H7.83667C4.04029 22 0.96167 18.9214 0.96167 15.125V6.875C0.96167 3.07862 4.04029 0 7.83667 0ZM16.0867 19.9375C18.7404 19.9375 20.8992 17.7787 20.8992 15.125V6.875C20.8992 4.22125 18.7404 2.0625 16.0867 2.0625H7.83667C5.18292 2.0625 3.02417 4.22125 3.02417 6.875V15.125C3.02417 17.7787 5.18292 19.9375 7.83667 19.9375H16.0867Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46167 11C6.46167 7.96263 8.92429 5.5 11.9617 5.5C14.999 5.5 17.4617 7.96263 17.4617 11C17.4617 14.0374 14.999 16.5 11.9617 16.5C8.92429 16.5 6.46167 14.0374 6.46167 11ZM8.52417 11C8.52417 12.8948 10.0669 14.4375 11.9617 14.4375C13.8564 14.4375 15.3992 12.8948 15.3992 11C15.3992 9.10388 13.8564 7.5625 11.9617 7.5625C10.0669 7.5625 8.52417 9.10388 8.52417 11Z" fill="white" />
                            <circle cx="17.8741" cy="5.08761" r="0.732875" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Instagram;
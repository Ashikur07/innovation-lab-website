"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Zoom } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";

// Slider images with respective Quranic verses and translations
const bannerData = [
    {
        id: 1,
        img: "/images/slider1.jpeg", // Reference the image in the public folder
        textLines: [
            "<span class='text-6xl md:text-7xl lg:text-8xl font-bold'>Welcome to the Computer Lab</span>", // Title
            "<span class='text-[#84fa24] text-lg md:text-5xl font-bold'>Empowering your learning with technology</span>", // Subtext
        ],
    },
    {
        id: 2,
        img: "/images/slider2.jpeg",
        textLines: [
            "<span class='text-6xl md:text-7xl lg:text-8xl font-bold'>Learn, Explore, Create</span>", // Title
            "<span class='text-[#84fa24] text-lg md:text-5xl font-bold'>Unlock your potential with cutting-edge tools</span>", // Subtext
        ],
    },
    {
        id: 3,
        img: "/images/slider3.jpeg",
        textLines: [
            "<span class='text-6xl md:text-7xl lg:text-8xl font-bold'>Innovation at Your Fingertips</span>", // Title
            "<span class='text-[#84fa24] text-lg md:text-5xl font-bold'>Transform your ideas into reality</span>", // Subtext
        ],
    },
    {
        id: 4,
        img: "/images/slider4.jpeg",
        textLines: [
            "<span class='text-6xl md:text-7xl lg:text-8xl font-bold'>Technology for the Future</span>", // Title
            "<span class='text-[#84fa24] text-lg md:text-5xl font-bold'>Stay ahead with the latest in tech education</span>", // Subtext
        ],
    },
];


const Banner = () => {
    const swiperRef = useRef(null);
    const [showText, setShowText] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(true);

    const handleSlideChange = (swiper) => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const prevSlide = swiper.slides[swiper.previousIndex];

        const activeImgElement = activeSlide.querySelector("img");
        const prevImgElement = prevSlide ? prevSlide.querySelector("img") : null;

        // Apply zoom-out effect on previous image
        if (prevImgElement) {
            prevImgElement.style.transform = "scale(1)";
            prevImgElement.style.transition = "transform 1s ease-in-out";
        }

        // Apply zoom-in effect on the current image
        if (activeImgElement) {
            activeImgElement.style.transform = "scale(1.15)";
            activeImgElement.style.transition = "transform 1s ease-in-out";
        }

        // Reset text animation before showing again
        setShowText(false);
        setTimeout(() => {
            setShowText(true);
            setIsFirstTime(false); // After first slide, speed up
        }, 200);
    };


    return (
        <div className="relative w-full overflow-hidden">
            {/* Previous Button */}
            <button
                className="absolute left-5 top-1/2 z-10 -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white"
                onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
            >
                &#9664;
            </button>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation, Autoplay, Zoom]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full"
                zoom={true}
                onSlideChange={handleSlideChange}
            >
                {bannerData.map((banner) => (
                    <SwiperSlide key={banner.id} className="relative">
                        {/* Image with overlay shadow */}
                        <img
                            src={banner.img}
                            alt="Banner"
                            className="w-full h-[600px] object-cover transition-all duration-2000 transform scale-100"
                        />
                        {/* Shadow Overlay */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Typing Effect with Wave Animation */}
                        {showText && (
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center"
                                initial={{ opacity: 0, filter: "blur(20px)", scale: 0.85 }}
                                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                transition={{ duration: isFirstTime ? 3 : 2 }}
                            >
                                <motion.div className="text-white text-center leading-tight">
                                    {banner.textLines.map((line, lineIndex) => (
                                        <motion.div
                                            key={lineIndex}
                                            className="overflow-hidden"
                                        >
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: line, // Render the line with embedded HTML (for custom colors)
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Next Button */}
            <button
                className="absolute right-5 top-1/2 z-10 -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white"
                onClick={() => swiperRef.current && swiperRef.current.slideNext()}
            >
                &#9654;
            </button>
        </div>
    );
};

export default Banner;

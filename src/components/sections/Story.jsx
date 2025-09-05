import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import ProfilePicture from '../../assets/Profile Picture.png';
import twelve from '../../assets/twelve.jpg';
import seven from '../../assets/seven.jpg';
import one from '../../assets/one.png';
import six from '../../assets/six.png';
import eight from '../../assets/eight.png';
import nine from '../../assets/nine.jpg';
import thirteen from '../../assets/thirteen.png';
import eighteen from '../../assets/eighteen.png';
import b from '../../assets/b.png';
import Background2 from '../../assets/Background2.png';
import g from '../../assets/g.png';
import three from '../../assets/three.jpg';
import four from '../../assets/four.jpg';
import two from '../../assets/two.jpg';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import slider4 from '../../assets/slider4.jpg';
import slider5 from '../../assets/slider5.jpg';
import slider6 from '../../assets/slider6.jpg';
import slider7 from '../../assets/slider7.jpg';
import slider8 from '../../assets/slider8.jpeg';
import slider9 from '../../assets/slider9.jpeg';
import slider10 from '../../assets/slider10.jpeg';
import slider11 from '../../assets/slider11.jpeg';
import slider12 from '../../assets/slider12.jpg';
import slider13 from '../../assets/slider13.jpg';
import slider14 from '../../assets/slider14.jpg';
import sketch1 from '../../assets/sketch1.png';
import sketch2 from '../../assets/sketch2.png';
import sketch3 from '../../assets/sketch3.jpg';
import sketch4 from '../../assets/sketch4.jpg';
import sketch5 from '../../assets/sketch5.jpg';
import sketch6 from '../../assets/sketch6.jpg';
import sketch7 from '../../assets/sketch7.jpg';
import sketch8 from '../../assets/sketch8.jpg';
import sketch9 from '../../assets/sketch9.jpg';
import sketch10 from '../../assets/sketch10.jpg';
import sketch11 from '../../assets/sketch11.png';
import sketch12 from '../../assets/sketch12.png';
















export const Story = () => {
    const images = [ProfilePicture, slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10, slider11, slider12, slider13, slider14];
    const [currentSet, setCurrentSet] = useState(0);
    const imagesPerSet = 4;
    const totalSets = Math.ceil(images.length / imagesPerSet);
    const [direction, setDirection] = useState("next"); // 'next' or 'prev'
    const [transitioning, setTransitioning] = useState(false);
    
    const handleNextSet = () => {
        if (currentSet < totalSets - 1) {
            setCurrentSet((prev) => prev + 1);
        }
    }

    const handlePreviousSet = () => {
        if (currentSet > 0) {
            setCurrentSet((prev) => prev - 1);
        }
    }

    return (
        <>
            <section
                id="about"
                className="flex items-center justify-center pt-20 px-0 rgba(190,190,184,255)"
            >
                <RevealOnScroll>
                    <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between mb-16 px-4 md:px-6">
                        {/* Left Section: Fashion Showcase Title */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2
                                className="text-4xl sm:text-5xl md:text-5xl font-normal text-black px-10 py-5"
                                style={{ fontFamily: 'Julius Sans One' }}
                            >
                                About Me 
                            </h2>
                            <h3
                                className="px-10"
                                style={{ fontFamily: 'Julius Sans One' }}
                            >
                                Fashion designer with over twenty <br /> years of experience
                                educating and inspiring <br /> the next generation of designers. 
                            </h3>
                            <a 
                                href="/Resume.png"
                                target="_blank"
                                rel="noopener noreferrer">
                                <button
                                    type="submit"
                                    className="w-full text-left px-10"
                                    style={{ fontFamily: "Meow Script"}}
                                >
                                    resume
                                </button>
                            </a>
                            
                        </div>

                        {/* Right Section: Photos */}
                        <div className="w-full flex items-center justify-between gap-x-4 px-10 overflow-hidden relative">
                            {images.slice(currentSet * 4, currentSet * 4 + 4).map((img, index) => (
                                <div key={index} className="relative pr-2">
                                    <img 
                                        src={img} 
                                        alt={`Fashion ${index}`}
                                        className=" h-[280px] w-[300px] object-cover" 
                                    />
                                    {index == 3 && currentSet < totalSets - 1 && (
                                        <button
                                            onClick={handleNextSet}
                                            className="absolute top-1/2 right-[8px] transform -translate-y-1/2 bg-gray-200 text-black px-3 py-2 z-10 hover:bg-white transition"
                                        >
                                            <svg
                                                xmlns="http:www.w3.org/2000/svg"
                                                className="w-2 h-6 text-gray-500 scale-[2]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={1}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M 9 5 l 7 7-7 7" />
                                            </svg>
                                        </button>
                                    )}
                                    
                                    {index === 0 && currentSet > 0 && (
                                        <button
                                            onClick={handlePreviousSet}
                                            className="absolute top-1/2 left-[0px] -translate-y-1/2 bg-gray-200 text-black px-3 py-2 z-10 hover:bg-white "
                                        >
                                            <svg
                                                xmlns="http:www.w3.org/2000/svg"
                                                className="w-2 h-6 text-gray-500 scale-[2]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={1}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <RevealOnScroll>
                        {/* two images beneath about me */}
                        <div className="w-full px-4 md:px-10 flex flex-col md:flex-row items-center justify-center gap-12 mb-16 ">
                            <img 
                                src={four} 
                                alt="four" 
                                className="w-[600px] h-[650px]"
                            />
                            <img 
                                src={three} 
                                alt="three"
                                className="w-[600px] h-[650px]"
                            />
                        </div>
                    </RevealOnScroll>
                    
                    {/* 2x2 images on left and blurb on right */}
                    <RevealOnScroll>
                        <div className="grid md:grid-cols-2 gap-6 px-12 py-10 items-center">
                            {/* left: 2x2 image grid */}
                            <div className="grid grid-cols-2 grid-rows-2 gap-0.5 max-w-[800px] px-10">
                                <img 
                                    src={sketch9} 
                                    alt="sketch9" 
                                    className="w-full h-[300px] object-cover"
                                />
                                <img 
                                    src={sketch11} 
                                    alt="sketch11" 
                                    className="w-full h-[300px] object-cover"
                                />
                                <img 
                                    src={sketch3} 
                                    alt="sketch3" 
                                    className="w-full h-[300px] object-cover"
                                />
                                <img 
                                    src={sketch5} 
                                    alt="sketch5" 
                                    className="w-full h-[300px] object-cover"
                                />
                            </div>
                            {/* right: text blurb */}
                            <div className="text-left px-10">
                                <p 
                                    className="text-sm text-black"
                                    style={{ fontFamily: "Nunito Sans"}}
                                >
                                    I was born in Tashkent on 29th of of August 1988. 
                                    My love for art started when I was 5 years old. 
                                    By that time I was already sewing dresses for my dolls, 
                                    I loved art so much that I would sleep holding my pencils
                                    under my blanket. 
                                    <br /><br />
                                    When I graduated high school I went to college named 
                                    after Benkov, where I learned the most important education 
                                    that I needed to become a designer. After college I went 
                                    to university named after Kamoliddin Behzod. There, I was 
                                    a student of many designers and masters bu the best of them 
                                    was designer Dilmurod Mirkomilov. 
                                    <br /><br />
                                    Throughout my career, I demonstrated my prowess through 
                                    numeroud showcases and competitions, including but not limited
                                    to: “Kelajak Ovozi” (2003), “Golden Needle” (2003), “Fairytale 
                                    Serpentine” fashion show (2004-2005), and “Milliy Liboslar 
                                    Festivals” (2018). Noteworthy achievements also include the 
                                    publication of her book “Ulim Zhazosi Turlari” (2004), recognized 
                                    by the Uzbekistan Institute of Legal Research, as well as her 
                                    participation in esteemed projects such as “Top Designer” (2014), 
                                    “Tillakosh” (2015), and “Zirapcha” 2019 “@Asiamodelfestival” (2019), 
                                    where she emerged as a finalist at the grand festival in Seoul, Korea. 
                                    Gulchekhra’s multifaceted talents and unwavering dedication solidify 
                                    her as a prominent figure in the realm of art and design, shaping 
                                    her trajectory as the “Face of Central Asia” (2019) and positioning 
                                    her as a visionary in the global fashion landscape.
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </RevealOnScroll>
            </section>
        </>
    )
}
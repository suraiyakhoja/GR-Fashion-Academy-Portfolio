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
import fashion_show_1 from '../../assets/fashion_show_1.png';
import fashion_show_2 from '../../assets/fashion_show_2.png';
import fashion_show_3 from '../../assets/fashion_show_3.png';
import fashion_show_4 from '../../assets/fashion_show_4.png';
import fashion_show_5 from '../../assets/fashion_show_5.png';
import fashion_show_6 from '../../assets/fashion_show_6.png';
import fashion_show_7 from '../../assets/fashion_show_7.png';
import fashion_show_8 from '../../assets/fashion_show_8.png';
import fashion_show_9 from '../../assets/fashion_show_9.png';
import fashion_show_10 from '../../assets/fashion_show_10.png';
import fashion_show_11 from '../../assets/fashion_show_11.png';
import fashion_show_12 from '../../assets/fashion_show_12.png';
import fashion_show_14 from '../../assets/fashion_show_14.png';

















export const Shows = () => {
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
                                className="text-4xl sm:text-5xl md:text-3xl font-normal text-black px-10 py-5"
                                style={{ fontFamily: 'Julius Sans One' }}
                            >
                                FASHION SHOWS 
                            </h2>
                            <h3
                                className="px-10"
                                style={{ fontFamily: 'Julius Sans One' }}
                            >
                                Models and designers from Uzbekistan - Gulchekhra Rakhimova, 
                                Zarina Kholova and Jahongir Abdumalikov performed at Asia 
                                Model Festival 2019.
                            </h3>
                            
                            
                        </div>

                        {/* Right Section: Photos */}
                        <div className="w-full flex items-center justify-between gap-x-4 px-10 overflow-hidden relative">
                            <img src= {fashion_show_7} alt="fashion_show_7" className="w-750px"/>
                        </div>
                    </div>

                    <RevealOnScroll>
                        {/* two images beneath about me */}
                        <div className="w-full px-4 md:px-10 grid grid-cols-3 items-center justify-center gap-12 mb-16 ">
                            <img 
                                src={fashion_show_3} 
                                alt="fashion_show_3" 
                                className="w-[600px] h-[650px]"
                            />
                            <img 
                                src={fashion_show_4} 
                                alt="fashion_show_4"
                                className="w-[600px] h-[650px]"
                            />
                            <img 
                                src={fashion_show_5} 
                                alt="fashion_show_5"
                                className="w-[600px] h-[650px]"
                            />
                        </div>
                    </RevealOnScroll>
                    
                    {/* 2x2 images on left and blurb on right */}
                    <RevealOnScroll>
                        <div className="grid md:grid-cols-2 gap-6 px-12 py-10 items-center">
                            {/* left: 2x2 image grid */}
                            <div className="grid grid-cols-2  gap-0.5 max-w-[800px] px-10">
                                <img 
                                    src={fashion_show_14} 
                                    alt="fashion_show_14" 
                                    className="w-full h-[400px] object-cover"
                                />
                               
                                
                                <img 
                                    src={fashion_show_11} 
                                    alt="sketch5" 
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                            {/* right: text blurb */}
                            <div className="text-left px-10">
                                <p 
                                    className="text-sm text-black"
                                    style={{ fontFamily: "Nunito Sans"}}
                                >
                                    Asia Model Festival is an annual event attended by 275 Asian countries 
                                    (South Korea, China, Japan, Thailand, Vietnam, India, Singapore, Cambodia, etc.).
                                    Not only do models compete at the festival, but designers, top models, and, of 
                                    course, stars from the participating countries present their brands. 
                                    Every year in Seoul, the Korea Modeling Association organizes a grand show, Asia 
                                    Model Festival, which attracts with colorful performances and famous guests: top 
                                    models, actors and leading figures in the world of fashion and beauty industry. In 
                                    turn, Face of Central Asia is part of this grand show.
                                    Face of Central Asia is the semi-final event of Asia Model Festival and also an event 
                                    during which cultural exchange takes place between the participating countries: 
                                    Kazakhstan, Kyrgyzstan, Uzbekistan and Tajikistan. The Central Asian region is 
                                    present at this event for the fifth time and gives the opportunity to show our 
                                    culture, beautiful and talented people to the world through the fashion and beauty industry.
                                    Miss Kyrgyzstan / Universe proudly wore a custom dress by Gulchehra Rahimova, 
                                    showcasing her unique design on an international stage.
                                    
                                 
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </RevealOnScroll>
            </section>
        </>
    )
}
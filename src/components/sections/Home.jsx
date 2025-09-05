import { RevealOnScroll } from "../RevealOnScroll";
import Background from '../../assets/Background1.png';

export const Home = () => {
    return (
        <section
            id="home"
            className="relative h-screen bg-cover bg-center bg-white items-center"
            style={{ backgroundImage: `url(${Background})`, fontFamily: "Julius Sans One", width: '1440px'}}        
        >
            <RevealOnScroll>
                <div className="absolute inset-0 flex items-center pl-8 md:pl-20 pt-90 z-10">
                    <div>
                        <h1 className="text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-60">
                            GULCHEKHRA
                        </h1>
                        <h1 className="text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            RAKHIMOVA
                        </h1>
                        <h3
                            className="text-base sm:text-xl md:text-xl text-white mt-4"
                        >
                            Fashion designer with over twenty years <br></br>and educating the next
                            generation of <br></br> designers. 
                        </h3>
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    )
}
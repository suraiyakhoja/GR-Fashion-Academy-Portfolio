import { RevealOnScroll} from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";

import telegram from "../../assets/telegram.png"
import instagram from "../../assets/instagram.png"
import youtube from "../../assets/youtube.png"


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            alert("Message Sent!");
            setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."));
    }
    return (
        <section
            id="contact"
            className="py-20"
        >
            <RevealOnScroll>
                <div className="px-4 container mx-auto">
                    {/* title */}
                    <div className="text-center mb-8">
                        <h2 
                            className="text-3xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-red-400 bg-clip-text text-transparent text-center"
                            style={{ fontFamily: "Julius Sans One"}}
                        >
                            GET IN TOUCH
                        </h2>
                        {/* socials */}
                        <div className="w-full flex justify-center py-4">
                            <div className="grid grid-cols-3 gap-8">
                                <a 
                                    href="https://t.me/your_channel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform duration-300 hover:scale-110 hover:brightness-110"
                                >
                                    <img 
                                        src={telegram} 
                                        alt="telegram" 
                                        className="w-[40px] object-cover"
                                    />
                                </a>
                                <a 
                                    href="https://www.instagram.com/designer_gulchehra/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform duration-300 hover:scale-110 hover:brightness-110"
                                >
                                    <img 
                                        src={instagram} 
                                        alt="instagram" 
                                        className="w-[40px] object-cover"
                                    />
                                </a>
                                <a 
                                    href="https://www.youtube.com/@GRFashionAcademy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform duration-300 hover:scale-110 hover:brightness-110"
                                >
                                    <img 
                                        src={youtube} 
                                        alt="youtube" 
                                        className="w-[40px] object-cover"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* form + map, make justify-between to add map back. */}
                    <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
                        {/* form */}
                        <div className="md:w-1/2 w-full">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div 
                                    className="relative"
                                    style={{ fontFamily: "Julius Sans One" }}
                                >
                                    <input 
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        className="w-full bg-black/5 border border-black/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                        placeholder="Name"
                                        onChange={(e) => setFormData({...formData, name: e.target.value})} />
                                </div>

                                <div 
                                    className="relative"
                                    style={{ fontFamily: "Julius Sans One" }}
                                >
                                    <input 
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        className="w-full bg-black/5 border border-black/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                        placeholder="example@gmail.com"
                                        onChange={(e) => setFormData({...formData, email: e.target.value})} />
                                </div>

                                <div 
                                    className="relative"
                                    style={{ fontFamily: "Julius Sans One"}}
                                >
                                    <textarea 
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        rows={5}
                                        className="w-full bg-black/5 border border-black/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                        placeholder="YOUR MESSAGE..."
                                        onChange={(e) => setFormData({...formData, message: e.target.value})} 
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-rose-300 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                                    style={{ fontFamily: "Julius Sans One"}}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Map */}
                        {/*
                        <div className="md:w-1/2 h-[300px] md:h-auto">
                            <iframe
                                title="map"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAKmciHKrWwSrNeTOvHPmXGDscIbQwBlYM&q=GR+Fashion+Academy,+611+Banner+Avenue,+New+York,+NY`}
                            ></iframe>
                        </div>
                        */ }
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    )
}

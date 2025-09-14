import { Mail, Download } from "lucide-react"
import img from '../assets/img.jpeg'
import cv from '../assets/ANNOUN_CV.pdf'

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

            <div className="flex flex-col ">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour, <br /> je suis {" "}
                    <span className="text-accent">Ridouane ANNOUN</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Je suis un développeur web et mobile, avec <br />
                    2 ans d'expérience, utilisant React et Flutter.<br />
                    Actuellement, je cherche un stage PFE de 6 mois <br />
                    pour mettre en pratique mes compétences.
                </p>
                <div className="flex gap-4">
                    <a href={cv} download className="btn btn-outline btn-accent md:w-fit">
                        <Download className="w-5 h-5" />
                        Télécharger CV
                    </a>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-accent md:w-fit">
                        <Mail className="w-5 h-5" />
                        Contactez-moi
                    </button>
                </div>


            </div>

            <div className="md:ml-60">
                <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
                style={{
                    borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
                }}
                />
            </div>
        </div>
    )
}

export default Home

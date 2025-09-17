import Title from "./Title"
import img3 from '../assets/img3.png'
import { CalendarSync, LetterText, Paintbrush, Smartphone } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description:
        "Je conçois des interfaces modernes, réactives et optimisées, offrant une expérience fluide et intuitive aux utilisateurs.",
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description:
        "Je développe des API performantes et sécurisées, assurant une communication fiable entre le frontend et la base de données.",
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Développeur Mobile",
    description:
        "Je crée des applications mobiles performantes et multiplateformes, alliant rapidité, fluidité et design moderne.",
    icon: <Smartphone className="text-accent scale-150" />,
  },
  {
    id: 4,
    title: "Passionné par l'UI/UX",
    description:
        "J’attache une grande importance à l’esthétique et à l’ergonomie, en créant des interfaces à la fois attractives et faciles à utiliser.",
    icon: <Paintbrush className="text-accent scale-150" />,
  },
];


const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <div className="flex flex-col items-center">
                <Title title="À propos" />
                <div className="mt-1 md:mt-2 md:min-h-screen flex justify-center items-center w-full">
                    <div className="hidden md:block">
                        <img src={img3} alt="" className=" w-96 object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                    </div>

                    <div className="md:ml-4 space-y-4">
                        {aboutSections.map((section) => (
                            <div key={section.id}
                                className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                            >
                                <div className="mb-2 md:mb-0">
                                    {section.icon}
                                </div>
                                <div className="md:ml-4 text-center md:text-left">
                                    <h2 className="text-xl  font-bold mb-1">
                                        {section.title}
                                    </h2>
                                    <p className="text-sm">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        ))

                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About

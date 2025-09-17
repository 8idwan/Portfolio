import { useState, useEffect } from "react";
import Title from "./Title";

import imgANGULAR from "../assets/techno/angular.png";
import imgCPP from "../assets/techno/cpp.svg";
import imgCSHARP from "../assets/techno/csharp.png";
import imgCSS from "../assets/techno/css.png";
import imgDOTNET from "../assets/techno/dotnet.png";
import imgFLUTTER from "../assets/techno/flutter.svg";
import imgGIT from "../assets/techno/git.png";
import imgGITHUB from "../assets/techno/github.png";
import imgHTML from "../assets/techno/html.png";
import imgJAVA from "../assets/techno/java.png";
import imgJS from "../assets/techno/js.png";
import imgMONGODB from "../assets/techno/mongodb.png";
import imgMYSQL from "../assets/techno/mysql.png";
import imgPHP from "../assets/techno/php.png";
import imgPYTHON from "../assets/techno/python.png";
import imgPYTORCH from "../assets/techno/pytorch.png";
import imgQT from "../assets/techno/qt.png";
import imgREACT from "../assets/techno/react.png";
import imgSPRINGBOOT from "../assets/techno/springboot.svg";
import imgSQL from "../assets/techno/sql.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgTENSORFLOW from "../assets/techno/tensorflow.png";
import imgTYPE from "../assets/techno/typescript.png";
import imgDOCKER from "../assets/techno/docker.png";
import imgKUBERNETES from "../assets/techno/Kubernetes.png";
import imgFIREBASE from "../assets/techno/firebase.png";
import imgSUPABASE from "../assets/techno/supabase.svg";

const skillCategories = [
  { title: "Langages", skills: [
      { name: "C++", image: imgCPP },
      { name: "C#", image: imgCSHARP },
      { name: "Java", image: imgJAVA },
      { name: "JavaScript", image: imgJS },
      { name: "PHP", image: imgPHP },
      { name: "Python", image: imgPYTHON },
      { name: "TypeScript", image: imgTYPE },
    ],
  },
  { title: "Frontend", skills: [
      { name: "Angular", image: imgANGULAR },
      { name: "CSS", image: imgCSS },
      { name: "HTML5", image: imgHTML },
      { name: "React", image: imgREACT },
      { name: "Tailwind CSS", image: imgTAILWIND },
    ],
  },
  { title: "Backend", skills: [
      { name: ".NET", image: imgDOTNET },
      { name: "Spring Boot", image: imgSPRINGBOOT },
    ],
  },
  { title: "Mobile", skills: [{ name: "Flutter", image: imgFLUTTER }] },
  { title: "Desktop", skills: [{ name: "Qt", image: imgQT }] },
  { title: "IA", skills: [
      { name: "PyTorch", image: imgPYTORCH },
      { name: "TensorFlow", image: imgTENSORFLOW },
    ],
  },
  { title: "Base de données", skills: [
      { name: "MongoDB", image: imgMONGODB },
      { name: "MySQL", image: imgMYSQL },
      { name: "SQL", image: imgSQL },
      { name: "Supabase", image: imgSUPABASE },
      { name: "Firebase", image: imgFIREBASE },
    ],
  },
  { title: "DevOps", skills: [
      { name: "Docker", image: imgDOCKER },
      { name: "Git", image: imgGIT },
      { name: "GitHub", image: imgGITHUB },
      { name: "Kubernetes", image: imgKUBERNETES },
    ],
  },
];

const Competences = () => {
  const [activeTab, setActiveTab] = useState(0);

  // ✅ Auto-défilement toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % skillCategories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="competences" className="pb-16 px-4 max-w-7xl mx-auto -mt-12">
      {/* ✅ Titre */}
      <Title title="Mes Compétences" />

      {/* ✅ Navigation (tabs) */}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {skillCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-bold rounded-full text-sm transition-all ${
              activeTab === index
                ? "bg-[#ffb86c] text-white shadow-md"
                : "bg-[#1f2937] text-white hover:bg-accent/20"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* ✅ Contenu des tabs */}
      <div className="mt-10 transition-all duration-700 ease-in-out">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-1">
            {skillCategories[activeTab].skills.map((skill, i) => (
            <div
                key={i}
                className="flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-125" // zoom un peu plus
            >
                <div className="w-24 h-24 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-[#1f2937] shadow-sm"> {/* taille plus grande */}
                <img
                    src={skill.image}
                    alt={skill.name}
                    className="object-contain h-full w-full"
                />
                </div>
                <span className="mt-1 text-sm font-medium">{skill.name}</span>
            </div>
            ))}
        </div>
        </div>

    </div>
  );
};

export default Competences;

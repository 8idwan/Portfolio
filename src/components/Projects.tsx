import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Plano',
        description: 'Application mobile utilisant la caméra et un modèle entraîné sur 30 plantes pour identifier l’espèce, puis afficher automatiquement les conditions optimales de croissance adaptées.',
        technologies: ['Java', 'SQLite', 'PyTorch'],
        demoLink: 'https://www.linkedin.com/posts/rannoun_smartgreenhouse-plantidentification-ai-activity-7188892924804243457-bgv5/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVTHyIB771T-oedFQS3Dqgji76UYBfA_bw',
        repoLink: 'https://github.com/8idwan/Plano',
        image: img1,
    },
    {
        id: 2,
        title: 'SoLass',
        description: 'Application Android intégrant le modèle YamNet Lite avec TensorFlow Lite pour classifier des sons captés en temps réel via microphone, offrant une interface intuitive et conviviale.',
        technologies: ['Java', 'TensorFlow Lite'],
        demoLink: 'https://streamable.com/ahbbsw',
        repoLink: 'https://github.com/8idwan/SoLass',
        image: img2,
    },
    {
        id: 3,
        title: 'GestionPresta',
        description: 'Application Flutter connectée à Prestashop via API et backend PHP, permettant la gestion des produits, commandes et stocks en temps réel avec interface moderne et performante.',
        technologies: ['Flutter', 'php'],
        demoLink: 'https://www.linkedin.com/posts/rannoun_demo-prestashop-flutter-activity-7339095716922904577-nRPl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVTHyIB771T-oedFQS3Dqgji76UYBfA_bw',
        repoLink: 'https://github.com/8idwan/endyear_2025_gr01_mobileapp',
        image: img3,
    },
    {
        id: 4,
        title: 'ShareElec',
        description: 'Application web innovante permettant aux particuliers/organisations d’acheter, vendre et gérer des offres d’électricité de manière sécurisée, favorisant l’autonomie énergétique et l’optimisation locale.',
        technologies: ['Angular', '.NET'],
        demoLink: 'https://www.linkedin.com/posts/rannoun_slides-of-the-project-activity-7323435645761200128-jHPa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVTHyIB771T-oedFQS3Dqgji76UYBfA_bw',
        repoLink: 'https://github.com/8idwan/ShareElec_FrontEnd-',
        image: img4,
    },
    {
        id: 5,
        title: 'V2V Simulation',
        description: 'Application desktop en C++/Qt simulant les connexions V2V en 5G : déplacements, couverture radio et communications inter-véhicules en temps réel sur le territoire de Mulhouse.',
        technologies: ['C++', 'Qt'],
        demoLink: 'https://streamable.com/a445m4',
        repoLink: 'https://github.com/8idwan/V2V-Simulation-QT-Cpp-VF',
        image: img5,
    },
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4" />
                            </a>

                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects

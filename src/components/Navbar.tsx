import { Container } from "lucide-react"

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-lg flex justify-center md:justify-between items-center p-4 ">
            <a href="#"
                className="flex items-center  font-bold  text-3xl md:text-xl"
            >
                <Container className="mr-2" />
                R
                <span className="text-accent">A</span>
            </a>

            <ul
                className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home"
                        className="btn btn-sm btn-ghost"
                    >
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#About"
                        className="btn btn-sm btn-ghost"
                    >
                        À propos
                    </a>
                </li>

                <li>
                    <a href="#competences"
                        className="btn btn-sm btn-ghost"
                    >
                        Mes compétences
                    </a>
                </li>


                <li>
                    <a href="#Projects"
                        className="btn btn-sm btn-ghost"
                    >
                        Mes projets
                    </a>
                </li>

                <li>
                    <a href="#contact"
                        className="btn btn-sm btn-ghost"
                    >
                        Contact
                    </a>
                </li>

            </ul>

        </div>
    )
}

export default Navbar

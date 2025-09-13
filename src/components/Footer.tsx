import { Container, Facebook, Github, Linkedin, Mail, User, MessageSquare } from "lucide-react"
import emailjs from '@emailjs/browser'
import { useState } from 'react'

const Footer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_spsha7r', 'template_8a29ujc', e.currentTarget, 'SPbD6RlDmktne0Quq')
            .then((result) => {
                console.log(result.text);
                alert("Message envoyé avec succès !");
                setName('')
                setEmail('')
                setTitle('')
                setMessage('')
            }, (error) => {
                console.log(error.text);
                alert("Erreur lors de l'envoi du message.");
            });
    };

    return (
        <footer className="footer footer-center p-10 bg-base-200">
            <aside>
                <Container className="w-10 h-10" />
                <p className="font-bold">
                    R
                    <span className="text-accent">A</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/rannoun/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://github.com/8idwan/" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://www.facebook.com/Ridwan.Announ" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
            <div id="contact" className="w-full max-w-lg mx-auto mt-10 p-8 bg-gradient-to-br from-base-100 to-base-200 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
                <h3 className="text-2xl font-bold mb-8 text-center text-white">Contactez-moi</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-base-content">Nom</label>
                        <div className="flex items-center bg-white rounded-lg border border-gray-300 hover:border-accent transition-colors duration-200 focus-within:ring-2 focus-within:ring-accent focus-within:border-accent">
                            <User className="w-5 h-5 text-gray-400 ml-3" />
                            <input type="text" id="name" name="name" required className="flex-1 px-3 py-3 bg-transparent text-black focus:outline-none rounded-r-lg" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-base-content">Email</label>
                        <div className="flex items-center bg-white rounded-lg border border-gray-300 hover:border-accent transition-colors duration-200 focus-within:ring-2 focus-within:ring-accent focus-within:border-accent">
                            <Mail className="w-5 h-5 text-gray-400 ml-3" />
                            <input type="email" id="email" name="email" required className="flex-1 px-3 py-3 bg-transparent text-black focus:outline-none rounded-r-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="relative">
                        <label htmlFor="title" className="block text-sm font-medium mb-2 text-base-content">Titre</label>
                        <input type="text" id="title" name="title" required className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-lg hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="relative">
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-base-content">Message</label>
                        <div className="flex items-start bg-white rounded-lg border border-gray-300 hover:border-accent transition-colors duration-200 focus-within:ring-2 focus-within:ring-accent focus-within:border-accent">
                            <MessageSquare className="w-5 h-5 text-gray-400 ml-3 mt-3" />
                            <textarea id="message" name="message" rows={4} required className="flex-1 px-3 py-3 bg-transparent text-black focus:outline-none rounded-r-lg resize-none" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-accent to-accent-focus text-white py-3 px-4 rounded-lg hover:from-accent-focus hover:to-accent hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 shadow-lg">Envoyer</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer

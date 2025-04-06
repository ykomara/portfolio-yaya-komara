import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, Code2, MonitorSmartphone, Database, FileCode, Server, Layout } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import ReactGA from 'react-ga4';

// Initialize Google Analytics
ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 measurement ID

function App() {
  const [state, handleSubmit] = useForm("your-form-id"); // Replace with your Formspree form ID
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 5000);
    }
  }, [state.succeeded]);

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-slate-900/30" />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 animate-fade-in">
              Hello ! Je suis développeur Full Stack
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animate-delay-200">
              Spécialisé en développement Front-End et création d'applications web et mobiles
            </p>
            <div className="flex justify-center gap-4 animate-fade-in animate-delay-300">
              <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors hover-scale">
                Me Contacter
              </a>
              <a href="#projects" className="border border-indigo-300/20 hover:border-indigo-300/40 px-6 py-3 rounded-lg font-medium transition-colors hover-scale">
                Voir mes Projets
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-slate-900/50" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg animate-slide-in hover-scale border border-slate-700/50">
              <FileCode className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Front-End</h3>
              <p className="text-gray-300">HTML5, CSS3, JavaScript (ES6+), React.js, Redux</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg animate-slide-in animate-delay-200 hover-scale border border-slate-700/50">
              <Server className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Back-End</h3>
              <p className="text-gray-300">Node.js, Express, RESTful APIs</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg animate-slide-in animate-delay-400 hover-scale border border-slate-700/50">
              <Layout className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Design & UI/UX</h3>
              <p className="text-gray-300">Responsive Design, Accessibilité, UX/UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">Projets Réalisés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden animate-scale-in hover-scale border border-slate-700/50">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Application E-commerce</h3>
                <p className="text-gray-300 mb-4">Une solution e-commerce complète avec gestion des stocks en temps réel</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Redux</span>
                </div>
                <a href="#" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300">Voir le projet →</a>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden animate-scale-in animate-delay-200 hover-scale border border-slate-700/50">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80" 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Application de Gestion</h3>
                <p className="text-gray-300 mb-4">Gestion de tâches collaborative avec mises à jour en temps réel</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Express</span>
                </div>
                <a href="#" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300">Voir le projet →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-slate-900/50" id="blog">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">Blog & Actualités</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden animate-scale-in hover-scale border border-slate-700/50">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Les tendances du développement web en 2024</h3>
                <p className="text-gray-300 mb-4">Découvrez les technologies et pratiques qui façonnent le développement web moderne.</p>
                <span className="text-sm text-gray-400">15 Mars 2024</span>
              </div>
            </article>
            <article className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden animate-scale-in animate-delay-200 hover-scale border border-slate-700/50">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">L'importance de l'accessibilité web</h3>
                <p className="text-gray-300 mb-4">Comment rendre vos applications web accessibles à tous les utilisateurs.</p>
                <span className="text-sm text-gray-400">10 Mars 2024</span>
              </div>
            </article>
            <article className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden animate-scale-in animate-delay-400 hover-scale border border-slate-700/50">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">React vs Vue en 2024</h3>
                <p className="text-gray-300 mb-4">Comparaison détaillée des deux frameworks les plus populaires.</p>
                <span className="text-sm text-gray-400">5 Mars 2024</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">Me Contacter</h2>
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in animate-delay-200">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nom</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Sujet</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors hover-scale"
              >
                Envoyer
              </button>
            </form>

            {showConfirmation && (
              <div className="mt-6 p-4 bg-green-500/20 text-green-400 rounded-lg text-center animate-fade-in">
                Message envoyé avec succès !
              </div>
            )}

            <div className="mt-12 flex flex-col items-center gap-6">
              <div className="flex gap-6 animate-fade-in animate-delay-300">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors hover-scale">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors hover-scale">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="mailto:your.email@example.com" className="hover:text-indigo-400 transition-colors hover-scale">
                  <Mail className="w-8 h-8" />
                </a>
              </div>
              <a 
                href="/CV-Nicolas-Plaza.pdf" 
                download 
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition-colors hover-scale animate-fade-in animate-delay-400"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Yaya KOMARA</h3>
              <p className="text-gray-300">Développeur Full Stack spécialisé en Front-End</p>
            </div>
            <div className="text-right">
              <p className="text-gray-300">© 2025 Yaya KOMARA. Tous droits réservés.</p>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
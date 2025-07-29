import React, { useEffect } from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Noah-Gabriel Winkler - Software Architect & .NET Developer';
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Software Architect specialized in .NET integration with 3+ years of experience implementing enterprise architectures. Expert in Oracle PL/SQL, Angular, RabbitMQ, and Elastic Stack.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Software Architect specialized in .NET integration with 3+ years of experience implementing enterprise architectures. Expert in Oracle PL/SQL, Angular, RabbitMQ, and Elastic Stack.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Add meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'software architect, .NET, C#, Oracle PL/SQL, Angular, TypeScript, RabbitMQ, Elastic Stack, JWT, enterprise architecture, Alicante, Spain';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Noah-Gabriel Winkler",
      "jobTitle": "Software Architect & .NET Developer",
      "description": "Software Architect specialized in .NET integration and enterprise architectures",
      "url": "https://noah-winkler.dev",
      "email": "w.noah.gabriel@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alicante",
        "addressRegion": "ALC",
        "addressCountry": "ES"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Background Elements */}
      <BackgroundParticles />
      <ScrollProgress />
      
      {/* Main Content */}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Languages />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
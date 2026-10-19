import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechStackSection } from './components/sections/TechStackSection';

export function App() {
  return (
    <div className="min-h-screen bg-surface font-body text-text-primary antialiased selection:bg-energy-red selection:text-white">
      <Header />
      <main className="w-full pt-20">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

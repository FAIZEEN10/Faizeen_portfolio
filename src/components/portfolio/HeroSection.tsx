import { MapPin, Calendar, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const socialLinks = {
    github: "https://github.com/Mohamedfaizeen",
    linkedin: "https://www.linkedin.com/in/mohamed-faizeen-j-8795302b5/",
    resume: "https://drive.google.com/file/d/1Xddc27U_GgWL2sNlphLWMjLIgwuakHpy/view?usp=sharing"
  };

  const handleResumeDownload = () => {
    window.open(socialLinks.resume, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1 glow animate-float">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-5xl font-bold gradient-text">MF</span>
              </div>
            </div>
            {/* Availability Badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass px-4 py-1 rounded-full whitespace-nowrap">
              <span className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available Immediately
              </span>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in">
            Mohamed Faizeen J
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="gradient-text font-semibold">Java Full Stack Developer</span> | Software Engineer
          </p>

          {/* Location & Status */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
              <MapPin size={16} className="text-primary" />
              Sharjah, UAE
            </span>
            <span className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
              <Calendar size={16} className="text-accent" />
              Immediate Joining
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              onClick={handleResumeDownload}
              size="lg" 
              className="bg-primary hover:bg-primary/90 glow flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
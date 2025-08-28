import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Star,
  Phone,
  Trophy
} from "@/lib/icons";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    "Java", "Python", "Web Development", "Object-Oriented Programming", "Data Structures & Algorithms", 
    "System Design", "MySQL", "Git", "VSCode", "Problem Solving", "Software Development"
  ];

  const projects = [
    {
      title: "Notepad (TextEditor)",
      description: "Java-based text editor with advanced Stack-type clipboard functionality to keep multiple strings in clipboard. Features a graphical user interface built with Java Swing.",
      technologies: ["Java", "Java Swing", "GUI Development", "Stack Data Structure"],
      github: "https://github.com/varun1127",
      demo: "#",
      featured: true
    },
    {
      title: "File Compressor",
      description: "A file compression software that efficiently compresses and decompresses files using two powerful algorithms: Huffman's Code and Lempel-Ziv-Wells algorithm.",
      technologies: ["Java", "Huffman's Code", "Lempel-Ziv-Wells", "File I/O"],
      github: "https://github.com/varun1127",
      demo: "#",
      featured: true
    },
    {
      title: "Java Development Projects",
      description: "Various Java development projects completed during internship at Coding Blocks, focusing on code optimization and application performance improvements.",
      technologies: ["Java", "OOP", "Performance Optimization", "Team Collaboration"],
      github: "https://github.com/varun1127",
      demo: "#",
      featured: false
    }
  ];

  const experiences = [
    {
      title: "Intern/Trainee",
      company: "Coding Blocks Pvt Ltd",
      duration: "June 2024 - August 2024",
      description: "Developed projects and completed all assignments within a 1.5-month intensive program. Worked on Java development projects, contributed to design and implementation of various features, and collaborated with developers to optimize code and improve application performance.",
      type: "internship"
    },
    {
      title: "B.Tech Information Technology",
      company: "Guru Gobind Singh Indraprastha University (GGSIPU)",
      duration: "2022 - 2026 (Expected)",
      description: "Currently pursuing Bachelor's in Information Technology with a GPA of 73.8%. Strong focus on software development, data structures, algorithms, and system design.",
      type: "education"
    }
  ];

  const certifications = [
    {
      title: "Master Data Structures in Java with System Design",
      issuer: "Coding Blocks Pvt Ltd, Noida",
      icon: <Code />
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      icon: <Trophy />
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank", 
      icon: <Trophy />
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-slate-800">Varun</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-slate-900 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-slate-900 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-600 hover:text-slate-900 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('certifications')} className="text-slate-600 hover:text-slate-900 transition-colors">Certifications</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F92153d4c93714902ac9cc77402e48c3f%2Ffb22536c3f6e495a81fdfa78fe72a699?format=webp&width=400&height=400&fit=cover&gravity=face"
                  alt="Varun's Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
                Varun
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-2">
                Information Technology Student
              </p>
              <p className="text-lg text-slate-500 mb-8 flex items-center justify-center gap-2">
                <GraduationCap />
                GGSIPU, Delhi
              </p>
            </div>
            
            <div className="flex justify-center gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollToSection('contact')}>
                <Mail />
                <span className="ml-2">Get in Touch</span>
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.open('https://github.com/varun1127', '_blank')}>
                <Github />
                <span className="ml-2">View GitHub</span>
              </Button>
            </div>

            <div className="animate-bounce">
              <ChevronDown 
                className="w-6 h-6 mx-auto text-slate-400 cursor-pointer"
                onClick={() => scrollToSection('about')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm a motivated engineering student with a solid foundation in software development, 
                specializing in Java and Python programming. With a strong understanding of data structures 
                and algorithms, I'm eager to leverage my academic knowledge in a tech-focused role to drive innovation.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Recently completed an intensive internship at Coding Blocks where I honed my Java development 
                skills and gained valuable experience in collaborative software development and code optimization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" onClick={() => window.open('https://www.linkedin.com/in/varun1102/', '_blank')}>
                  <Linkedin />
                  <span className="ml-2">LinkedIn</span>
                </Button>
                <Button variant="outline" onClick={() => window.open('https://github.com/varun1127', '_blank')}>
                  <Github />
                  <span className="ml-2">GitHub</span>
                </Button>
                <Button variant="outline" onClick={() => window.open('https://leetcode.com/u/varun1102/', '_blank')}>
                  <Code />
                  <span className="ml-2">LeetCode</span>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap />
                  <span className="text-slate-700">Information Technology Major</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar />
                  <span className="text-slate-700">Expected Graduation: July 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase />
                  <span className="text-slate-700">Seeking Opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy />
                  <span className="text-slate-700">GPA: 73.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="p-3 text-center justify-center bg-white border-2 border-slate-200 hover:border-blue-300 transition-colors cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Star />
                    )}
                  </div>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => window.open(project.github, '_blank')}>
                      <Github />
                      <span className="ml-1">Code</span>
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink />
                      <span className="ml-1">Details</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Experience & Education</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-900">{exp.title}</h3>
                    <Badge variant={exp.type === 'education' ? 'secondary' : 'default'}>
                      {exp.type === 'education' ? 'Education' : 'Experience'}
                    </Badge>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-slate-500 text-sm mb-3">{exp.duration}</p>
                  <p className="text-slate-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{cert.title}</h3>
                      <p className="text-slate-600 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm actively seeking opportunities to contribute to innovative projects and continue 
            growing my skills in software development. Let's discuss how I can add value to your team!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => window.open('mailto:choudhryvarun35@gmail.com', '_blank')}>
              <Mail />
              <span className="ml-2">choudhryvarun35@gmail.com</span>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800" onClick={() => window.open('tel:+919818331816', '_blank')}>
              <Phone />
              <span className="ml-2">+91 9818331816</span>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800" onClick={() => window.open('https://www.linkedin.com/in/varun1102/', '_blank')}>
              <Linkedin />
              <span className="ml-2">LinkedIn</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 text-slate-400 text-center">
        <p>© 2024 Varun. Built with React, TypeScript and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

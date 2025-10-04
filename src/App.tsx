import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ChevronDown, X, ChevronLeft, ChevronRight, Settings, Car, Code, Zap, Play, Pause } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  gallery: Array<{
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }>;
  technologies?: string[];
  challenges?: string[];
  outcomes?: string[];
}

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['header', 'categories', 'projects'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentGalleryIndex(0);
    setIsVideoPlaying(false);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentGalleryIndex(0);
    setIsVideoPlaying(false);
    document.body.style.overflow = 'unset';
  };

  const nextGalleryItem = () => {
    if (selectedProject) {
      setCurrentGalleryIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevGalleryItem = () => {
    if (selectedProject) {
      setCurrentGalleryIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  const toggleVideo = () => {
    const video = document.querySelector('video');
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const projectCategories = [
    {
      id: 'cad-3d-printing',
      title: 'CAD Design & 3D Printing',
      icon: <Settings className="w-8 h-8" />,
      gradient: 'from-slate-600 to-blue-700',
      projects: [
        {
          id: 'fixing-3d-printer',
          title: 'Fixing a Used 3D Printer',
          description: 'I wanted to get into 3D printing on a budget, so I bought a printer with issues and fixed it up myself.',
          image: '/images/printerfix1.png',
          fullDescription: 'This project began when I decided to enter the world of 3D printing without breaking the bank. I purchased a used Ender 3 printer that had several mechanical and electrical issues. Through systematic troubleshooting and repair, I was able to restore it to full functionality.',
          gallery: [
            { type: 'image', url: '/images/printerfix0.jpeg', caption: 'Initial state of the printer' },
            { type: 'image', url: '/images/printerfix1.png' },
            { type: 'image', url: '/images/printerfix2.png' },
            { type: 'image', url: '/images/printerfix3.jpeg' },
            { type: 'image', url: '/images/printerfix4.jpeg', caption: 'Printing with PETG' },
            { type: 'image', url: '/images/printerfix5.jpeg', caption: 'Figure printed in PETG'},
            
           
          ],
          technologies: ['3D Printing', 'Mechanical Repair', 'Electronics Troubleshooting'],
          challenges: ['Identifying faulty components', 'Sourcing replacement parts', 'Calibrating bed leveling'],
          outcomes: ['Fully functional 3D printer', 'Savings vs buying a new printer', 'Gained hands-on repair experience']
        },
        {
          id: 'cane-holder',
          title: 'Designing & Printing a Cane Holder',
          description: 'Designed and printed a custom cane holder to assist with mobility for a family member.',
          image: '/images/caneholder1.jpeg',
          fullDescription: 'When my grandmother needed a convenient way to store her walking cane, I designed a custom holder that could attach to her favorite walker. The design process involved measuring, prototyping, and iterating to create the perfect solution.',
          gallery: [
            { type: 'image', url: '/images/caneholder1.jpeg', caption: 'Testing the cane holder' },
            { type: 'video', url: '/videos/caneholder2.mp4', caption: 'CAD design' },
            { type: 'video', url: '/videos/caneholder3.mp4', caption: '3D printing procees' },
            { type: 'video', url: '/videos/caneholder4.mp4', caption: 'Final Testing' },
          ],
          technologies: ['CAD Design', 'PLA 3D Printing', 'Ergonomic Design'],
          challenges: ['Ensuring proper grip security', 'User oriented design', 'Material durability'],
          outcomes: ['Improved daily mobility', 'Family member satisfaction', 'Design thinking skills']
        },
        {
          id: 'octoprint-setup',
          title: 'Improving 3D Printer with OctoPrint',
          description: 'Tired of waking up in the middle of the night to check on the printer, I set up a Raspberry Pi to run the printers software, stream live video to my phone, and email me with possible issues with the print.',
          image: '/images/octoprint1.jpeg',
          fullDescription: 'Long print jobs required constant monitoring, disrupting my sleep schedule. I implemented OctoPrint on a Raspberry Pi 4 with a camera module to enable remote monitoring, automatic failure detection, and email notifications for print completion or issues.',
          gallery: [
            { type: 'image', url: '/images/octoprint1.jpeg', caption: 'Flashing software into the Raspberry' },
            { type: 'image', url: '/images/octoprint2.jpeg', caption: 'Testing connection to the 3D printer' },
            { type: 'image', url: '/images/octoprint3.jpeg', caption: 'Testing local port' },
            { type: 'image', url: '/images/octoprint5.jpeg', caption: 'Testing web interface' },
         
          ],
          technologies: ['Raspberry Pi', 'OctoPrint', 'Python', 'Linux', 'Network Configuration'],
          challenges: ['Network stability', 'Camera positioning', 'Email notification setup'],
          outcomes: ['24/7 remote monitoring', 'Improved print success rate']
        },
        // {
        //   id: 'printer-calibration',
        //   title: 'Calibrating a 3D Printer',
        //   description: 'I worked on dialing up the printer in every aspect, from the extruder to the bed leveling, to ensure the best print quality. This was a great hands-on learning experience.',
        //   image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
        //   fullDescription: 'Achieving professional-quality 3D prints requires meticulous calibration of multiple parameters. I systematically calibrated bed leveling, extruder steps, temperature settings, and print speeds to optimize print quality and reliability.',
        //   gallery: [
        //     { type: 'image', url: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Bed leveling process' },
        //     { type: 'image', url: 'https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Calibration test prints' },
        //     { type: 'image', url: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Final quality comparison' }
        //   ],
        //   technologies: ['3D Printing', 'Mechanical Calibration', 'Quality Control'],
        //   challenges: ['Achieving consistent first layer', 'Temperature optimization', 'Speed vs quality balance'],
        //   outcomes: ['Professional print quality', 'Reduced failed prints', 'Deep understanding of 3D printing']
        // }
      ]
    },
    {
      id: 'car-fixes',
      title: 'Car Fixes',
      icon: <Car className="w-8 h-8" />,
      gradient: 'from-gray-600 to-slate-700',
      projects: [
        {
          id: 'garage-bodywork',
          title: 'Garage Bodywork and Paint',
          description: 'I was curious to learn how to paint a car, so I decided to try on my own truck. Using stud welding, I pulled out the big dents, then applied paint with a small air compressor and budget paint gun. During the process, I accidentally used the wrong reducer and had to sand down part of the base coat. Despite this setback, the final result was excellent for a garage paint job!',
          image: '/images/truckpaint6.jpeg',
          fullDescription: 'This ambitious project taught me automotive bodywork and painting from scratch. Starting with significant dent damage, I learned stud welding techniques for dent removal, proper surface preparation, and spray painting techniques using budget equipment.',
          gallery: [
            { type: 'video', url: '/videos/studweld.mp4', caption: 'Pulling out the big dents with stud welding' },
            { type: 'image', url: '/images/truckpaint1.jpeg' },
            { type: 'image', url: '/images/truckpaint2.jpeg' },
            { type: 'image', url: '/images/truckpaint3.jpeg' },
            { type: 'image', url: '/images/truckpaint4.jpeg' },
            { type: 'image', url: '/images/truckpaint5.jpeg' },
            { type: 'image', url: '/images/truckpaint6.jpeg' },
            { type: 'image', url: '/images/truckpaint7.jpeg' },
            { type: 'image', url: '/images/truckpaint8.jpeg' },
            { type: 'image', url: '/images/truckpaint9.jpeg' },
            { type: 'image', url: '/images/truckpaint10.jpeg' },
            { type: 'image', url: '/images/truckpaint11.jpeg' },
            { type: 'video', url: '/videos/truckfinished.mp4', caption: 'Final result' },

            
          ],
          technologies: ['Stud Welding', 'Automotive Paint', 'Surface Preparation', 'Spray Gun Technique'],
          challenges: ['Learning proper paint mixing', 'Achieving even coverage', 'Dealing with paint mistakes'],
          outcomes: ['Professional-looking finish', 'Cost savings vs body shop', 'New automotive skills']
        },
        {
          id: 'truck-resurrection',
          title: 'Resurrecting an Abandoned Truck',
          description: 'I purchased this 1978 Chevy after it had been abandoned for more than 10 years. I was determined to bring it back to life. After some hours tinkering with it I was able to get it running and driving again.',
          image: '/images/78chevy1.jpeg',
          fullDescription: 'This classic 1978 Chevrolet had been sitting abandoned for over a decade. The restoration involved comprehensive mechanical work including engine rebuilding, fuel system cleaning, electrical repairs, and brake system overhaul to bring this vintage truck back to roadworthy condition.',
          gallery: [
            { type: 'image', url: '/images/78chevy1.jpeg' },
            { type: 'video', url: '/videos/78chevystart.mp4', caption: '78 Chevy engine start' },
            { type: 'video', url: '/videos/78chevydrive.mp4', caption: 'First Drive' },
            
          ],
          technologies: ['Engine Resurrection', 'Fuel System Troubleshooting', 'Electrical Troubleshooting'],
          challenges: ['Clogged Carburetor', 'Chewed up wiring'],
          outcomes: ['Fully operational vehicle', 'Brought back to life', 'Learned carburetor rebuilding']
        },
        {
          id: 'olds-resurrection',
          title: 'Bringing an Oldsmobile Back to Life',
          description: 'A farmer was getting rid of this 1965 Oldsmobile F85 after it had been sitting for 43 years in a field. I towed it home and got it to run. I am currently working on making it roadworthy.',
          image: '/images/olds1.jpeg',
          fullDescription: 'This classic 1965 Oldsmobile F85 had been sitting abandoned for over four decades. I am currently working on making it roadworthy.',
          gallery: [
            { type: 'image', url: '/images/olds0.jpeg', caption: 'This was a top of the line unit with the 330 engine' },
            { type: 'image', url: '/images/olds1.jpeg', caption: 'It also has factory AC, power steering, and cruise control.' },
            { type: 'image', url: '/images/olds2.jpeg', caption: 'This is the spot where it had been sitting' },
            { type: 'image', url: '/images/olds3.jpeg', caption: 'The interior was completely destroyed, all those years of sitting outside were not kind to it.' },
            { type: 'image', url: '/images/olds4.jpeg', caption: '' },
            { type: 'image', url: '/images/olds5.jpeg', caption: 'Towing it home (yep, that rear tire blew up after a mile)' },
            { type: 'image', url: '/images/olds6.jpeg', caption: 'Last registered 1982' },
            { type: 'image', url: '/images/olds7.jpeg', caption: 'Put on some good wheels and tires' },
            { type: 'image', url: '/images/olds8.jpeg', caption: 'Cleaning the gummed up carburetor' },
            { type: 'video', url: '/videos/olds1.mp4', caption: 'Spining engine by hand' },
            { type: 'video', url: '/videos/olds2.mp4', caption: 'First start, I hotwired the ignition coil and starter because the car did not come with keys. I also set up a temporary fuel system' },
            
          ],
          technologies: ['Engine Resurrection', 'Fuel System Troubleshooting', 'Electrical Troubleshooting'],
          challenges: ['Clogged Carburetor', 'Chewed up wiring'],
          outcomes: ['Running engine!', 'Brought back to life', 'Learned carburetor rebuilding']
        },
        {
          id: 'electrical-fixes',
          title: 'Electrical Fixes in a Car',
          description: 'After chasing down an alternator light issue for months. I traced the wiring and found a broken wire. I repaired the wire, and the alternator light issue was resolved.',
          image: '/images/electrical1.jpeg',
          gallery: [
            { type: 'image', url: '/images/electrical1.jpeg' , caption: 'I had to disassemble the front end' },
            { type: 'image', url: '/images/electrical2.jpeg' },
            { type: 'image', url: '/images/electrical3.jpeg' , caption: 'A tiny wire caused the issue' },
            { type: 'image', url: '/images/electrical4.jpeg' , caption: 'A tiny wire caused the issue' },
        
          ],
          technologies: ['Multimeter Testing', 'Wire Repair', 'Circuit Tracing'],
          challenges: ['Intermittent fault diagnosis', 'Access to wiring harness', 'Proper wire splicing'],
          outcomes: ['Resolved charging system issue', 'Cost-effective repair']
        }
      ]
    },
    {
      id: 'real-world',
      title: 'Real World Projects',
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-blue-600 to-indigo-700',
      projects: [
        {
          id: 'pdf-organization',
          title: 'Organizing 180GB of PDF Documents',
          description: 'I was asked to organize a massive collection of PDF documents for a client. This included thousands of work orders and engineering drawings I developed a Python script that automated the sorting and categorization process, saving weeks of manual work.',
          image: '/images/python.jpeg',
          fullDescription: 'A client approached me with 180GB of unorganized PDF documents including work orders, engineering drawings, and technical specifications. I developed a comprehensive Python automation solution that used OCR, text parsing, and machine learning to automatically categorize and organize these documents. Due to company policy, I cannot share the code.',
          gallery: [
            { type: 'image', url: '/images/python.jpeg' },
          ],
          technologies: ['Python', 'OCR (Tesseract)', 'PDF Processing', 'File System Automation'],
          challenges: ['Handling various PDF formats', 'OCR accuracy issues', 'Large file processing'],
          outcomes: ['Saved 200+ hours of manual work', 'Improved document accessibility', 'Client satisfaction and referrals']
        }
      ]
    },
    {
      id: 'others',
      title: 'Others',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-slate-500 to-gray-600',
      projects: [
        {
          id: 'rc-hotwheels',
          title: 'R.C Hotwheels',
          description: 'This was a fun little project where I customized a remote-controlled Hotwheels car. I 3D printed body mounts and had to adapt the body to fit the existing chassis.',
          image: '/images/rch1.jpeg',
          fullDescription: 'This was a small project, I used 3D printed body mounts to adapt a Hotwheels RC car body to fit an existing RC chassis. It was a fun way to practice CAD design and 3D printing skills while creating a unique custom RC car.',
          gallery: [
            { type: 'image', url: '/images/rch2.jpeg', caption: 'Starting platform' },
            { type: 'image', url: '/images/rch3.jpeg', caption: 'Adapting the body' },
            { type: 'image', url: '/images/rch4.jpeg', caption: '' },
            { type: 'image', url: '/images/rch5.jpeg', caption: '' },
            { type: 'image', url: '/images/rch6.jpeg', caption: '' },
            { type: 'image', url: '/images/rch7.jpeg', caption: '' },
            { type: 'image', url: '/images/rch8.jpeg', caption: '' },
            { type: 'image', url: '/images/rch9.jpeg', caption: '' },
            { type: 'video', url: '/videos/rch1.mp4', caption: '' },

           
            
          ],
          technologies: ['3D Printing', 'CAD Design', 'RC Electronics', 'Precision Measurement'],
          challenges: ['Scale compatibility', 'Weight distribution', 'Mounting point strength'],
          outcomes: ['Unique custom RC car', 'Improved CAD skills', 'Fun hobby project']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">
              David Esguerra
            </div>
            
            {/* Contact Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/davidesguerra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-blue-700 transition-colors duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:davidjulian.es@gmail.com"
                className="p-2 text-slate-600 hover:text-blue-700 transition-colors duration-200"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/davidjem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-blue-700 transition-colors duration-200"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('header')}
                className="text-slate-700 hover:text-blue-700 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('categories')}
                className="text-slate-700 hover:text-blue-700 transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('footer')}
                className="text-slate-700 hover:text-blue-700 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="header" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center text-slate-800 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-slate-100 to-blue-100 backdrop-blur-sm border border-slate-300 flex items-center justify-center overflow-hidden shadow-xl">
              <img 
                src="/images/headshot2.png" 
                alt="David Esguerra" 
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm <span className="bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">David Esguerra</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-slate-600 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            Hands-on mechanical engineering student at UVU — I learn by building, fixing, and constantly experimenting.
          </p>
          
          <button 
            onClick={() => scrollToSection('categories')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-blue-700 text-white rounded-full font-semibold text-lg hover:from-slate-800 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl animate-slide-up delay-400"
          >
            See My Projects
            <ChevronDown className="ml-2 w-5 h-5" />
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </section>

      {/* Project Categories */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Explore My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-blue-700 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${category.gradient} text-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                <div className="relative z-10 flex items-center justify-center flex-col">
                  <div className="mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center">{category.title}</h3>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-blue-700 mx-auto"></div>
          </div>

          {projectCategories.map((category, categoryIndex) => (
            <div key={category.id} id={category.id} className="mb-20">
              <div className="flex items-center mb-12">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} text-white mr-6`}>
                  {category.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <div 
                    key={project.id}
                    onClick={() => openProject(project)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${(categoryIndex * 200) + (projectIndex * 100)}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold">Click to learn more</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm modal-backdrop">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-4 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h2>
              <button
                onClick={closeProject}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Gallery */}
              <div className="relative mb-6">
                <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
                  {selectedProject.gallery[currentGalleryIndex].type === 'image' ? (
                    <img
                      src={selectedProject.gallery[currentGalleryIndex].url}
                      alt={selectedProject.gallery[currentGalleryIndex].caption}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full bg-slate-900">
                      <video
                        src={selectedProject.gallery[currentGalleryIndex].url}
                        className="w-full h-full object-cover"
                        controls={false}
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                      />
                      <button
                        onClick={toggleVideo}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-200"
                      >
                        <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors duration-200">
                          {isVideoPlaying ? (
                            <Pause className="w-8 h-8 text-slate-800" />
                          ) : (
                            <Play className="w-8 h-8 text-slate-800 ml-1" />
                          )}
                        </div>
                      </button>
                    </div>
                  )}
                </div>
                
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevGalleryItem}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors duration-200"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextGalleryItem}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors duration-200"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedProject.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentGalleryIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentGalleryIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                {selectedProject.gallery[currentGalleryIndex].caption && (
                  <p className="text-sm text-slate-600 mt-2 text-center">
                    {selectedProject.gallery[currentGalleryIndex].caption}
                  </p>
                )}
              </div>
              
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Project Overview</h3>
                <p className="text-slate-700 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>
              
              {/* Technologies */}
              {selectedProject.technologies && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Challenges */}
              {selectedProject.challenges && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Challenges Faced</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Outcomes */}
              {selectedProject.outcomes && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Outcomes</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    {selectedProject.outcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="footer" className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              I'm always interested in discussing new projects, opportunities, or just talking about engineering and technology.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://github.com/davidjem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:bg-slate-700"
            >
              <Github className="w-6 h-6 group-hover:text-blue-300 transition-colors" />
            </a>
            <a 
              href="mailto:davidjulian.es@gmail.com"
              className="group p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:bg-slate-700"
            >
              <Mail className="w-6 h-6 group-hover:text-blue-300 transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/davidesguerra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:bg-slate-700"
            >
              <Linkedin className="w-6 h-6 group-hover:text-blue-300 transition-colors" />
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-slate-400 text-sm">
              © 2025 David Esguerra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
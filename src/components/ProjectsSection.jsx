import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Image E-Commerce Web Application",
    description: "A ecommerce website for images",
    image:
      "https://github.com/nishok19/portfolio/blob/main/public/images/ImgEcom-1.png?raw=true",
    tags: ["React", "TailwindCSS", "Stripe"],
    srclink: "https://github.com/nishok19/portfolio",
    livelink: "https://img.nishok.my",
  },
  {
    id: 2,
    title: "Task Manager Web Application",
    description:
      "This application is a full-stack web application built using React.js, Express, MongoDB, Zustand for state management, and secure user authentication. It reflects my expertise in web development and my commitment to delivering user-centric solutions.",
    image:
      "https://github.com/nishok19/portfolio/blob/main/public/images/todo-sample.png?raw=true",
    tags: ["React", "Express", "Zustand", "MongoDB"],
    srclink: "https://github.com/nishok19/todo-jscamp",
    livelink: "https://github.com/nishok19/todo-jscamp",
  },
  {
    id: 3,
    title: "React-Redux-Authentication",
    description:
      "This application is a full-stack web application built using React.js, Express, MongoDB, Zustand for state management, and secure user authentication. It reflects my expertise in web development and my commitment to delivering user-centric solutions.",
    image:
      "https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?t=st=1715183369~exp=1715186969~hmac=9a0b8f2f5db27e929ab66d77d3bafb3a32865bbd3a405e07bb76c3f49718c8f6&w=826",
    tags: ["React", "Redux"],
    srclink: "https://github.com/nishok19/react-redux-auth-protected",
    livelink: "https://github.com/nishok19/react-redux-auth-protected",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the recent projects. Each project was carefully
          crafted with attention to detail, performance and user epxerience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 border text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center ">
                  <div className="flex space-x-3">
                    <a
                      href={project.livelink}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.srclink}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 ">
          <a
            href="https://github.com/nishok19"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

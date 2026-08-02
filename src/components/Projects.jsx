import { PROJECTS } from '../constats'
import {motion} from "framer-motion"

const Projects =() =>{
    const featured = PROJECTS.filter((project) => project.featured)
    const other = PROJECTS.filter((project) => !project.featured)

    return(
        <section id="projects" className="border-b border-border pb-16">
            <motion.h2
            whileInView={{y:0, opacity:1}}
            initial={{y:-50, opacity:0}}
            viewport={{once:true}}
            transition={{duration:0.5}}
            className='my-20 text-center text-3xl font-semibold tracking-tight text-text sm:text-4xl'>
                Projects
            </motion.h2>

            <div className="mx-auto max-w-5xl space-y-8">
                {featured.map((project, index) => (
                    <motion.div
                    key={project.title}
                    initial={{y:30, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:0.5, delay: index * 0.1}}
                    whileHover={{y:-4}}
                    className='flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-colors duration-300 hover:border-border-strong dark:shadow-none lg:flex-row'
                    >
                        <div className="lg:w-2/5">
                            <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className='aspect-[4/3] w-full object-cover'
                            />
                        </div>

                        <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
                            {project.badge && (
                                <span className="mb-3 inline-block w-fit rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                                    {project.badge}
                                </span>
                            )}
                            <h3 className='mb-2 text-xl font-semibold text-text'>
                                {project.title}
                            </h3>
                            <p className='mb-4 leading-relaxed text-text-muted'>
                                {project.description}
                            </p>

                            <div className="mb-5 flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className='rounded-full border border-border bg-canvas px-3 py-1 text-xs font-medium text-text-muted'>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a href={project.live} target='_blank' rel="noopener noreferrer">
                                    <button type="button" className="rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-accent-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
                                        Live Demo
                                    </button>
                                </a>
                                <a href={project.github} target='_blank' rel="noopener noreferrer">
                                    <button type="button" className="rounded-lg border border-border px-5 py-2.5 text-center text-sm font-medium text-text transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
                                        GitHub
                                    </button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {other.length > 0 && (
                <div className="mx-auto mt-16 max-w-5xl">
                    <motion.h3
                    initial={{y:20, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:0.4}}
                    className="mb-6 text-sm font-semibold uppercase tracking-wider text-text-faint">
                        Other Projects
                    </motion.h3>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {other.map((project, index) => (
                            <motion.div
                            key={project.title}
                            initial={{y:20, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{duration:0.4, delay: index * 0.06}}
                            whileHover={{y:-3}}
                            className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-colors duration-300 hover:border-border-strong dark:shadow-none"
                            >
                                <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[16/10] w-full object-cover"
                                />
                                <div className="flex flex-1 flex-col p-4">
                                    <h4 className="mb-1 font-semibold text-text">{project.title}</h4>
                                    <p className="mb-3 line-clamp-2 text-sm text-text-muted">{project.description}</p>
                                    <div className="mb-3 flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="rounded-full border border-border bg-canvas px-2 py-0.5 text-[11px] font-medium text-text-muted">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-auto flex gap-4 text-sm">
                                        <a href={project.live} target='_blank' rel="noopener noreferrer" className="font-medium text-accent hover:text-accent-strong">Live</a>
                                        <a href={project.github} target='_blank' rel="noopener noreferrer" className="font-medium text-text-muted hover:text-text">GitHub</a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects

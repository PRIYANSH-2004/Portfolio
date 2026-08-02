import { EXPERIENCES } from '../constats'
import {motion} from 'framer-motion'

const Experience = () => {
    return (
        <section id="experience" className="border-b border-border pb-4">
            <motion.h2
            whileInView={{y:0, opacity:1}}
            initial={{y:-50, opacity:0}}
            viewport={{once:true}}
            transition={{duration:0.5}}
            className='my-20 text-center text-3xl font-semibold tracking-tight text-text sm:text-4xl'>
                Experience
            </motion.h2>

            <div className="mx-auto max-w-4xl space-y-6">
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                    key={index}
                    initial={{y:30, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:0.5, delay: index * 0.1}}
                    className='rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors duration-300 hover:border-border-strong dark:shadow-none lg:p-8'>
                        <div className='flex flex-wrap items-start justify-between gap-2'>
                            <div>
                                <h6 className='text-lg font-semibold text-text'>
                                    {experience.role}
                                    <span className='text-accent'> · {experience.company}</span>
                                </h6>
                                <p className='mt-1 text-sm text-text-faint'>{experience.location}</p>
                            </div>
                            <p className='whitespace-nowrap rounded-full border border-border px-3 py-1 text-xs font-medium text-text-muted'>
                                {experience.year}
                            </p>
                        </div>

                        {experience.note && (
                            <p className='mt-3 text-sm italic text-text-faint'>{experience.note}</p>
                        )}

                        <p className='mb-4 mt-4 leading-relaxed text-text-muted'>
                            {experience.description}
                        </p>

                        <div className='flex flex-wrap gap-2'>
                            {experience.technologies.map((tech, i) => (
                                <span key={i} className='rounded-full border border-border bg-canvas px-3 py-1 text-xs font-medium text-text-muted'>{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience

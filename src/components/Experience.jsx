import { EXPERIENCES } from '../constats'
import {motion} from 'framer-motion'

const Experience = () => {
    return (
        <section id="experience" className="border-b border-neutral-900 pb-4">
            <motion.h2
            whileInView={{y:0, opacity:1}}
            initial={{y:-50, opacity:0}}
            viewport={{once:true}}
            transition={{duration:0.5}}
            className='my-20 text-center text-4xl'>
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
                    className='rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6 transition-colors duration-300 hover:border-neutral-700 lg:p-8'>
                        <div className='flex flex-wrap items-start justify-between gap-2'>
                            <div>
                                <h6 className='text-lg font-semibold text-neutral-100'>
                                    {experience.role}
                                    <span className='text-purple-300'> · {experience.company}</span>
                                </h6>
                                <p className='mt-1 text-sm text-neutral-500'>{experience.location}</p>
                            </div>
                            <p className='whitespace-nowrap rounded-full border border-neutral-800 px-3 py-1 text-xs font-medium text-neutral-400'>
                                {experience.year}
                            </p>
                        </div>

                        {experience.note && (
                            <p className='mt-3 text-sm italic text-neutral-500'>{experience.note}</p>
                        )}

                        <p className='mb-4 mt-4 leading-relaxed text-neutral-400'>
                            {experience.description}
                        </p>

                        <div className='flex flex-wrap gap-2'>
                            {experience.technologies.map((tech, i) => (
                                <span key={i} className='rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-cyan-300'>{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience

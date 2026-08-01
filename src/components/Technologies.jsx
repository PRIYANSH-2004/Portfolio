import { SKILLS } from "../constats";
import {motion} from 'framer-motion'

const Technologies = () => {
    return(
        <section id="skills" className="border-b border-neutral-900 pb-16">
            <motion.h2
            whileInView={{y:0, opacity:1}}
            initial={{y:-50, opacity:0}}
            viewport={{once:true}}
            transition={{duration:0.5}}
            className="my-20 text-center text-4xl">
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Skills
                </span>
            </motion.h2>

            <div className="mx-auto flex max-w-4xl flex-col gap-8">
                {SKILLS.map((group, groupIndex) => (
                    <motion.div
                    key={group.category}
                    initial={{y:20, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:0.4, delay: groupIndex * 0.05}}
                    >
                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {group.items.map(({ name, icon: Icon }) => (
                                <motion.div
                                key={name}
                                whileHover={{ y: -3, scale: 1.03 }}
                                className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950/40 px-4 py-2.5 text-sm text-neutral-300 transition-colors duration-200 hover:border-cyan-500/40 hover:text-white"
                                >
                                    <Icon className="text-lg text-cyan-300" />
                                    <span>{name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Technologies

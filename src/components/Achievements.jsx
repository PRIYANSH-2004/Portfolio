import { ACHIEVEMENTS } from '../constats'
import { motion } from 'framer-motion'
import { FaAward } from 'react-icons/fa6'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { TbCode } from 'react-icons/tb'

const statIcons = {
    LeetCode: SiLeetcode,
    'Coding Ninjas': TbCode,
    GeeksforGeeks: SiGeeksforgeeks,
}

const Achievements = () => {
    return (
        <section id="achievements" className="border-b border-border pb-16">
            <motion.h2
            whileInView={{y:0, opacity:1}}
            initial={{y:-50, opacity:0}}
            viewport={{once:true}}
            transition={{duration:0.5}}
            className='my-20 text-center text-3xl font-semibold tracking-tight text-text sm:text-4xl'>
                Achievements
            </motion.h2>

            <div className="mx-auto max-w-4xl">
                <motion.div
                initial={{y:20, opacity:0}}
                whileInView={{y:0, opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5}}
                className="mb-6 flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors duration-300 hover:border-border-strong dark:shadow-none sm:flex-row sm:items-start"
                >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                        <FaAward className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-faint">Patent Publication · {ACHIEVEMENTS.patent.role}</p>
                        <h3 className="mt-1 text-lg font-semibold text-text">{ACHIEVEMENTS.patent.title}</h3>
                        <p className="mt-2 text-sm text-text-muted">
                            {ACHIEVEMENTS.patent.journal} — Application No. {ACHIEVEMENTS.patent.applicationNo}, Publication No. {ACHIEVEMENTS.patent.publicationNo}
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {ACHIEVEMENTS.stats.map((stat, index) => {
                        const Icon = statIcons[stat.label]
                        return (
                            <motion.a
                            key={stat.label}
                            href={stat.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{y:20, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{duration:0.4, delay: index * 0.08}}
                            whileHover={{y:-3}}
                            className="group flex flex-col items-center gap-1 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-colors duration-300 hover:border-accent/40 dark:shadow-none"
                            >
                                {Icon && <Icon className="mb-2 text-2xl text-text-faint transition-colors duration-300 group-hover:text-accent" />}
                                <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-3xl font-semibold text-transparent">
                                    {stat.value}
                                </span>
                                <span className="text-sm text-text-muted">{stat.suffix}</span>
                                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-text-faint">{stat.label}</span>
                            </motion.a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Achievements

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
        <section id="achievements" className="border-b border-neutral-900 pb-16">
            <motion.h2
            whileInView={{y:0, opacity:1}}
            initial={{y:-50, opacity:0}}
            viewport={{once:true}}
            transition={{duration:0.5}}
            className='my-20 text-center text-4xl'>
                Achievements
            </motion.h2>

            <div className="mx-auto max-w-4xl">
                <motion.div
                initial={{y:20, opacity:0}}
                whileInView={{y:0, opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5}}
                className="mb-6 flex flex-col gap-4 rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6 transition-colors duration-300 hover:border-neutral-700 sm:flex-row sm:items-start"
                >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 via-sky-500/20 to-violet-500/20 text-cyan-300">
                        <FaAward className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Patent Publication · {ACHIEVEMENTS.patent.role}</p>
                        <h3 className="mt-1 text-lg font-semibold text-neutral-100">{ACHIEVEMENTS.patent.title}</h3>
                        <p className="mt-2 text-sm text-neutral-400">
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
                            className="group flex flex-col items-center gap-1 rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6 text-center transition-colors duration-300 hover:border-cyan-500/40"
                            >
                                {Icon && <Icon className="mb-2 text-2xl text-neutral-500 transition-colors duration-300 group-hover:text-cyan-300" />}
                                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-3xl font-semibold text-transparent">
                                    {stat.value}
                                </span>
                                <span className="text-sm text-neutral-400">{stat.suffix}</span>
                                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-600">{stat.label}</span>
                            </motion.a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Achievements

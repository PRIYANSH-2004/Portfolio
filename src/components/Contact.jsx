import { CONTACT } from "../constats";
import {motion} from 'framer-motion'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Contact = () => {
    return (
        <section id="contact" className="pb-24">
            <motion.h2
            whileInView={{y:0, opacity:1}}
            initial={{y:-50, opacity:0}}
            viewport={{once:true}}
            transition={{duration:0.5}}
            className="my-10 text-center text-4xl">
                Get in Touch
            </motion.h2>
            <motion.p
            whileInView={{opacity:1}}
            initial={{opacity:0}}
            viewport={{once:true}}
            transition={{duration:0.5}}
            className="mx-auto mb-10 max-w-md text-center text-neutral-500">
                Open to full-time Software Developer roles and interesting collaborations — feel free to reach out.
            </motion.p>

            <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center tracking-tight">
                <motion.div
                whileInView={{opacity:1, y:0}}
                initial={{y:20, opacity:0}}
                viewport={{once:true}}
                transition={{duration:0.5}}
                className="flex flex-col gap-2"
                >
                    <a href="tel:+917355250737" className="text-lg text-neutral-300 transition-colors duration-200 hover:text-white">
                        {CONTACT.phoneNo}
                    </a>
                    <a href={`mailto:${CONTACT.email}`} className="text-lg text-neutral-300 underline decoration-neutral-700 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-cyan-400">
                        {CONTACT.email}
                    </a>
                </motion.div>

                <motion.div
                whileInView={{opacity:1, y:0}}
                initial={{y:20, opacity:0}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:0.1}}
                className="flex items-center gap-5 text-2xl text-neutral-400"
                >
                    <a href="https://linkedin.com/in/priyansh-singh-pr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors duration-200 hover:text-white">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/PRIYANSH-2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors duration-200 hover:text-white">
                        <FaGithub />
                    </a>
                    <a href="https://leetcode.com/u/PRIYANSH_2004/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="transition-colors duration-200 hover:text-white">
                        <SiLeetcode />
                    </a>
                </motion.div>

                <motion.a
                whileInView={{opacity:1, y:0}}
                initial={{y:20, opacity:0}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:0.2}}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <button type="button" className="rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-6 py-2.5 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03]">
                        Download Resume
                    </button>
                </motion.a>
            </div>
        </section>
    )
}

export default Contact

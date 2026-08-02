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
            className="my-10 text-center text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                Get in Touch
            </motion.h2>
            <motion.p
            whileInView={{opacity:1}}
            initial={{opacity:0}}
            viewport={{once:true}}
            transition={{duration:0.5}}
            className="mx-auto mb-10 max-w-md text-center text-text-muted">
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
                    <a href="tel:+917355250737" className="text-lg text-text transition-colors duration-200 hover:text-accent">
                        {CONTACT.phoneNo}
                    </a>
                    <a href={`mailto:${CONTACT.email}`} className="text-lg text-text underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent">
                        {CONTACT.email}
                    </a>
                </motion.div>

                <motion.div
                whileInView={{opacity:1, y:0}}
                initial={{y:20, opacity:0}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:0.1}}
                className="flex items-center gap-5 text-2xl text-text-muted"
                >
                    <a href="https://linkedin.com/in/priyansh-singh-pr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors duration-200 hover:text-text">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/PRIYANSH-2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors duration-200 hover:text-text">
                        <FaGithub />
                    </a>
                    <a href="https://leetcode.com/u/PRIYANSH_2004/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="transition-colors duration-200 hover:text-text">
                        <SiLeetcode />
                    </a>
                </motion.div>

                <motion.a
                whileInView={{opacity:1, y:0}}
                initial={{y:20, opacity:0}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:0.2}}
                href="/resume.pdf"
                download="Priyansh_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <button type="button" className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-accent-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
                        Download Resume
                    </button>
                </motion.a>
            </div>
        </section>
    )
}

export default Contact

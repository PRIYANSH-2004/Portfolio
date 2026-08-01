import { useState } from 'react'
import logo from '../assets/pr-logo.png'

import { FaGithub, FaBars, FaXmark } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import {motion, AnimatePresence} from 'framer-motion'

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
]

const SOCIALS = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/priyansh-singh-pr', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/PRIYANSH-2004', label: 'GitHub' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/PRIYANSH_2004/', label: 'LeetCode' },
    { icon: IoIosMail, href: 'mailto:priyanshsingh.pr@gmail.com', label: 'Email' },
]

const Navbar =() => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='sticky top-0 z-50 -mx-4 mb-12 border-b border-neutral-900/0 bg-neutral-950/70 px-4 py-5 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:mb-20 lg:px-8'>
            <div className='flex items-center justify-between'>
                <a href='#home' className="flex shrink-0 items-center">
                    <motion.img
                    whileHover={{scale:1.15}}
                    className='w-9'  src={logo} alt='Priyansh Singh logo'/>
                </a>

                <div className='hidden items-center gap-6 text-sm text-neutral-400 md:flex'>
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className='transition-colors duration-200 hover:text-white'>
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className='hidden items-center gap-4 text-xl text-neutral-400 md:flex'>
                    {SOCIALS.map(({icon: Icon, href, label}) => (
                        <motion.a
                        key={label}
                        whileHover={{scale:1.2}}
                        target='_blank'
                        rel="noopener noreferrer"
                        href={href}
                        aria-label={label}
                        className='transition-colors duration-200 hover:text-white'
                        >
                            <Icon/>
                        </motion.a>
                    ))}
                </div>

                <button
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-2xl text-neutral-300 md:hidden"
                >
                    {isOpen ? <FaXmark /> : <FaBars />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col gap-4 pb-2 pt-6 text-neutral-300">
                            {NAV_LINKS.map((link) => (
                                <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="mt-2 flex items-center gap-5 text-xl text-neutral-400">
                                {SOCIALS.map(({icon: Icon, href, label}) => (
                                    <a key={label} target='_blank' rel="noopener noreferrer" href={href} aria-label={label} className='hover:text-white'>
                                        <Icon/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar

import { HERO_CONTENT } from "../constats";
import profilePic from '../assets/priyansh3.jpg'
import {motion} from 'framer-motion'

const contianer = (delay) =>({
    hidden : {x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
    return (
        <section id="home" className="border-b border-border pt-8 pb-16 lg:pb-24">
            <div className=" flex flex-wrap">
                <div className=" w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                        variants={contianer(0)}
                        initial = "hidden"
                        animate= "visible"
                         className="pb-4 text-6xl font-thin tracking-tight text-text lg:mt-16 lg:text-8xl">
                            Priyansh Singh
                        </motion.h1>
                        {/* craeted transparent te and cliped only text for background and used gradeint for color */}
                        <motion.span
                        variants={contianer(0.5)}
                        initial = "hidden"
                        animate= "visible"
                         className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-3xl font-medium tracking-tight text-transparent lg:text-4xl">Software Developer — Full-Stack &amp; AI Systems</motion.span>
                        {/* tracking is for space between text */}
                        <motion.p
                        variants={contianer(1)}
                        initial = "hidden"
                        animate= "visible"
                         className='my-2 max-w-xl py-6 font-light leading-relaxed text-text-muted tracking-tight'>
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.div
                        variants={contianer(1.3)}
                        initial = "hidden"
                        animate= "visible"
                        className="flex flex-wrap items-center gap-3">
                            <a href='/resume.pdf' download="Priyansh_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:scale-[1.03] hover:bg-accent-strong hover:shadow-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
                                    Download Resume
                                </button>
                            </a>
                            <a href='#contact'>
                                <button type="button" className="rounded-lg border border-border px-6 py-3 text-center text-sm font-medium text-text transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
                                    Get in touch
                                </button>
                            </a>
                        </motion.div>
                </div>


                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center ">
                        <motion.img
                        initial={{x:100, opacity:0}}
                        animate = {{x:0, opacity:1}}
                        transition= {{duration:0.5, delay:1}}
                        loading="eager"
                         src={profilePic} alt="Priyansh Singh" className="max-w-full rounded-2xl border border-border" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
